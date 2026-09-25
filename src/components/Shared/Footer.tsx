import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0e1015]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="FitLog"
            width={42}
            height={42}
            className="h-10 w-auto object-contain"
          />

          <span className="font-oswald text-2xl font-bold uppercase tracking-wide text-white">
            FITLOG
          </span>
        </div>

        <p className="text-center text-sm text-gray-500 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
