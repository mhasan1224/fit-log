"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { useFitLog } from "@/providers/FitLogProvider";

const Navbar = () => {
  const { plannedWorkouts, savedWorkouts } = useFitLog();

  return (
    <header className="sticky top-0 z-50 border-b border-[#1A2312] bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-18 items-center justify-between gap-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="shrink-0">
              <Image
                src={logo}
                alt="FitLog"
                width={40}
                height={40}
                priority
                className="h-auto w-6"
              />
            </Link>

            <Link
              href="/"
              className="shrink-0 font-oswald text-3xl tracking-tight text-white"
            >
              FITLOG
            </Link>
          </div>

          {/* Desktop / Tablet Navigation */}
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href="/"
              className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-[#CCFF00] transition hover:bg-gray-800"
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-100 hover:text-gray-900"
            >
              My Plan
            </Link>
          </div>

          {/* Status Badges */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-full bg-[#CCFF00] px-3 py-2 text-sm font-bold text-black">
              <span>Plan</span>
              <span>{plannedWorkouts.length}</span>
            </div>

            <div className="flex items-center gap-1.5 rounded-full border border-gray-300 px-3 py-2 text-sm font-semibold text-white">
              <span>Saved</span>
              <span>{savedWorkouts.length}</span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex gap-2 pb-3 sm:hidden">
          <Link
            href="/"
            className="flex-1 rounded-full bg-gray-900 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className="flex-1 rounded-full px-4 py-2.5 text-center text-sm font-semibold text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          >
            My Plan
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;