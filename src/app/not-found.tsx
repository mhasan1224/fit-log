import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0e1015] px-4 text-white">
      <div className="w-full max-w-lg text-center">
        <p className="font-oswald text-8xl font-bold tracking-tight text-[#ccff00] sm:text-9xl">
          404
        </p>

        <h1 className="mt-4 font-oswald text-3xl font-bold uppercase tracking-wide sm:text-4xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-400 sm:text-base">
          The workout you&apos;re looking for doesn&apos;t exist or the page
          may have been moved.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex rounded-xl bg-[#ccff00] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#b8e600]"
        >
          Back to workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;