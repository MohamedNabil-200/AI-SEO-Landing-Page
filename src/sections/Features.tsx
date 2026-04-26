"use client";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import Image from "next/image";
import ProductImage from "@/assets/product-image.png";
import {
  Component,
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (
  props: (typeof tabs)[number] &
    ComponentPropsWithoutRef<"div"> & { selected?: boolean },
) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

  const xPercent = useMotionValue(0);
  const yPercent = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercent}% ${yPercent}%, black, transparent)`;

  const handleHoverTab = () => {
    if (dotLottieRef.current == null) return;
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  };

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;

    xPercent.set(0);
    yPercent.set(0);

    const { width, height } = tabRef.current?.getBoundingClientRect();
    const circumference = 2 * (width + height);

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (2 * width + height) / circumference,
      1,
    ];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    const controlsX = animate(xPercent, [0, 100, 100, 0, 0], options);
    const controlsY = animate(yPercent, [0, 0, 100, 100, 0], options);

    return () => {
      controlsX.stop();
      controlsY.stop();
    };
  }, [props.selected]);

  return (
    <div
      ref={tabRef}
      key={props.title}
      onMouseEnter={handleHoverTab}
      className="border hover:cursor-pointer border-white/15 rounded-xl p-2.5 flex gap-2.5 items-center lg:flex-1 relative"
      onClick={props.onClick}
    >
      {props.selected && (
        <motion.div
          style={{
            maskImage,
          }}
          className="absolute inset-0 -m-px border border-[#A369FF] rounded-xl"
        ></motion.div>
      )}
      <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={props.icon}
          autoplay
          className="h-5 w-5"
        />
      </div>
      <h4 className="font-medium">{props.title}</h4>
      {props.isNew && (
        <span className="px-2 py-0.5 text-xs rounded-full bg-[#8c44ff] text-black">
          New
        </span>
      )}
    </div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectedTab = (index: number) => {
    setSelectedTab(index);

    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      animateOptions,
    );

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[index].backgroundPositionX],
      animateOptions,
    );

    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), tabs[index].backgroundPositionY],
      animateOptions,
    );
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate your SEO efforts.
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto text-center tracking-tight mt-5">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              selected={selectedTab === tabIndex}
              onClick={() => handleSelectedTab(tabIndex)}
              key={tab.title}
              {...tab}
            />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <motion.div
            className="aspect-video rounded-lg bg-cover border border-white/20"
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${ProductImage.src})`,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};
