"use client";

import { useEffect } from "react";
import Link from "next/link";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0e1015] px-4 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#14171f] p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-red-400/20 bg-red-400/10 text-2xl text-red-400">
          !
        </div>

        <h1 className="mt-5 font-oswald text-3xl font-bold uppercase tracking-wide">
          Something went wrong
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          We couldn&apos;t load the workout library right now. Please try again.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-xl bg-[#ccff00] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#b8e600]"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Error;
