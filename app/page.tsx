export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bangsoal-50 to-bangsoal-100 flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-6 max-w-md text-center">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
          <path d="M8.33327 3.96596C9.16663 1.88262 11.7245 1.55363 13.1249 2.29931C14.5254 3.04499 14.9999 4.59873 14.5832 6.04928C14.1666 7.49984 12.4779 8.21515 11.1621 8.94013C9.5173 9.84634 8.42505 11.6356 8.68224 13.5391" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M6.02686 16.7314C6.89712 17.956 8.7775 18.1083 9.85989 17.6233" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M15.8333 11.883C15.8333 12.8035 15.0871 13.5496 14.1667 13.5496C13.2462 13.5496 12.5 12.8035 12.5 11.883C12.5 10.9625 13.2462 10.2163 14.1667 10.2163C15.0871 10.2163 15.8333 10.9625 15.8333 11.883Z" fill="#15803d"/>
          <path d="M7.50008 8.54948C7.50008 9.46995 6.75389 10.2161 5.83341 10.2161C4.91294 10.2161 4.16675 9.46995 4.16675 8.54948C4.16675 7.629 4.91294 6.88281 5.83341 6.88281C6.75389 6.88281 7.50008 7.629 7.50008 8.54948Z" fill="#15803d"/>
        </svg>
        <span className="text-3xl font-bold text-bangsoal-800">bangsoal</span>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-800">Selamat datang!</h1>
          <p className="text-gray-600">
            Aplikasi BangSoal sekarang tersedia di app.bangsoal.co.id
          </p>
        </div>
        <a 
          href="https://app.bangsoal.co.id" 
          className="px-8 py-4 bg-bangsoal-600 text-white font-semibold rounded-xl hover:bg-bangsoal-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Kunjungi BangSoal
        </a>
      </div>
    </div>
  );
}
