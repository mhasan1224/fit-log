



const Loading = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0e1015] px-4 text-white">
      <div className="flex flex-col items-center text-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-[#ccff00]" />

        <span className="loading loading-spinner text-neutral"></span>

        <p className="mt-2 text-sm text-gray-500">
          Preparing your workout library.
        </p>
      </div>
    </main>
  );
};

export default Loading;
