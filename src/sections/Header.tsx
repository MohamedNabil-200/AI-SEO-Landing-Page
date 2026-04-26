import LogoIcon from "@/assets/logo.svg";
import JoinButton from "@/components/JoinButton";
import MenuIcon from "@/assets/icon-menu.svg";

export const Header = () => {
  return (
  <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 backdrop-blur md:backdrop-blur-none">
    <div className="container">
      <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur">
        <div>
          <div className="border h-10 w-10 rounded-lg inline-flex items-center justify-center border-white/15">
            <LogoIcon className="h-8 w-8"/>
          </div>
        </div>
        <div className="hidden md:block">
          <nav>
            <ul className="flex gap-8 text-sm">
              <li><a href="#" className="text-white/70 hover:text-white transition">Features</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition">Developers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition">Changelog</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-4 items-center">
          <JoinButton>Join waitlist</JoinButton>
          <MenuIcon className="md:hidden"/>
        </div>
      </div>
    </div>
  </header>
  );
};
