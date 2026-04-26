import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="flex gap-2 items-center">
            <Logo className="h-6 w-6"/>
            <p>AI Startup Landing Page</p>
          </div>
          <div >
            <nav className="flex flex-col lg:flex-row gap-5">
              <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition-all">Features</a>
              <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition-all">Developers</a>
              <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition-all">Company</a>
              <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition-all">Blog</a>
              <a href="#" className="text-white/70 hover:text-white text-xs md:text-sm transition-all">Changelog</a>
            </nav>
          </div>
          <div className="flex gap-5">
            <XSocial className="text-white/40 hover:text-white cursor-pointer transition-all"/>
            <InstaSocial className="text-white/40 hover:text-white cursor-pointer transition-all"/>
            <YTSocial className="text-white/40 hover:text-white cursor-pointer transition-all"/>
          </div>
        </div>
      </div>
    </footer>
  );
};
