export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <div className="relative flex w-full flex-col items-center gap-5 px-5 py-20 sm:px-10 lg:px-20">
        <div className="flex flex-col items-center gap-4">
          <span className="inline-flex items-center gap-1">
            <img
              src="/animated-emoji-point.webp"
              alt="Animated emoji of hand pointing at user"
              className="w-10 h-10 sm:w-16 sm:h-16"
            />
            <img
              src="/animated-emoji-raised-eyebrow.webp"
              alt="Animated emoji of face raising eyebrow"
              className="w-10 h-10 sm:w-16 sm:h-16"
            />
          </span>
          <h1 className="text-center text-5xl font-800 sm:text-7xl text-gray-900">
            Bangsoal
          </h1>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-2xl font-600 text-gray-800">Selamat datang!</h2>
          <p className="text-lg font-400 text-gray-600">
            Yuk, Latihan UTBK!
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://app.bangsoal.co.id"
            className="relative inline-flex flex-none shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-full border border-emerald-500 bg-emerald-400 px-8 py-3 text-base font-medium text-white shadow hover:scale-105 hover:border-emerald-600 hover:bg-emerald-500 active:scale-95 transition"
          >
            Kunjungi BangSoal
          </a>
        </div>
        <img
          src="/hero-bg.svg"
          alt=""
          className="absolute inset-x-0 bottom-0 top-20 -z-10 h-full object-cover object-bottom"
        />
      </div>
    </section>
  );
}
