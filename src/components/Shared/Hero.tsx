import Image from "next/image";
import Banner from "@/assets/banner.png";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="container mx-auto overflow-hidden bg-[#222630] my-8 rounded-3xl">
      <div className="grid items-center gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-2 lg:gap-10 lg:px-12 lg:py-16">
        {/* Left Content */}
        <div className="max-w-2xl">
          <p className="mb-4 font-oswald text-xl uppercase tracking-[0.2em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="font-oswald text-3xl font-semibold uppercase leading-[0.95] tracking-tight text-white sm:text-4xl lg:text-6xl">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-white sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;ss plan, and watch the week&apos;s work add up.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#workouts"
              className="rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold text-gray-900 transition hover:bg-[#b8e600]"
            >
              BROWSE WORKOUTS
            </Link>
          </div>
        </div>

        {/* Right Banner */}
        <div className="relative flex items-center justify-center">
          <Image
            src={Banner}
            alt="Workout banner"
            priority
            className="h-auto w-full max-w-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
