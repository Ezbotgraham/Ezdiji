export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
        <h1 className="text-3xl font-bold">Create account</h1>

        <div className="mt-6 flex flex-col gap-4">
          <input
            className="rounded-lg bg-zinc-900 p-3 outline-none"
            placeholder="Username"
          />

          <input
            className="rounded-lg bg-zinc-900 p-3 outline-none"
            placeholder="Email"
          />

          <input
            className="rounded-lg bg-zinc-900 p-3 outline-none"
            placeholder="Password"
            type="password"
          />

          <button className="rounded-lg bg-white p-3 text-black font-semibold">
            Register
          </button>
        </div>
      </div>
    </main>
  )
}
