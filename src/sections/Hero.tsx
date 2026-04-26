"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import JoinButton from "@/components/JoinButton";
import starsBG from "@/assets/stars.png";
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(scrollYProgress,[0, 1], [-300, 300]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative h-[492px] md:h-[800px] flex items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{ 
        backgroundImage: `url(${starsBG.src})`,
        backgroundPositionY,
      }}
      animate= {{backgroundPositionX: starsBG.width}}
      transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      {/* Planet */}
      <div className="absolute h-64 w-64 md:w-96 md:h-96 bg-purple-500 rounded-full border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(140,69,255)]"></div>
      {/* Ring 1 */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ rotate: "1turn" }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[344px] h-[344px] md:w-[580px] md:h-[580px] rounded-full border opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 rounded-full bg-white top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 rounded-full bg-white top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 rounded-full border border-white top-1/2 left-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
      {/* Ring 2 */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ rotate: "-1turn" }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[444px] h-[444px] md:w-[780px] md:h-[780px] rounded-full border border-white/20 border-dashed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></motion.div>
      {/* Ring 3 */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ rotate: "1turn" }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute w-[544px] h-[544px] md:w-[980px] md:h-[980px] rounded-full border opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 rounded-full bg-white top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 rounded-full bg-white top-1/2 left-full -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>
      <div className="container relative mt-16">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          AI SEO
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
          Elevate your site's visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-5">
          <JoinButton>Join waitlist</JoinButton>
        </div>
      </div>
    </motion.section>
  );
};
