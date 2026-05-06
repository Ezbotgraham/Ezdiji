export default function AuthPage() {
  return (
    <main className="min-h-screen bg-[#0b0d10] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#13161b] border border-white/5 rounded-3xl p-8">
        <h1 className="text-3xl font-bold">Ezdiji</h1>
        <p className="text-white/60 mt-2">
          Hesabına giriş yap.
        </p>

        <div className="mt-8 space-y-4">
          <input
            placeholder="E-posta"
            className="w-full bg-[#1a1f27] rounded-2xl px-4 py-3 outline-none"
          />

          <input
            type="password"
            placeholder="Şifre"
            className="w-full bg-[#1a1f27] rounded-2xl px-4 py-3 outline-none"
          />

          <button className="w-full bg-green-500 hover:bg-green-400 transition text-black font-semibold rounded-2xl py-3">
            Giriş Yap
          </button>
        </div>
      </div>
    </main>
  )
}
