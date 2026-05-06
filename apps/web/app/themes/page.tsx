export default function ThemesPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold">Themes</h1>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
          <h2 className="text-xl font-semibold">Accent Colors</h2>
        </div>

        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
          <h2 className="text-xl font-semibold">OLED Mode</h2>
        </div>

        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
          <h2 className="text-xl font-semibold">Compact UI</h2>
        </div>

        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
          <h2 className="text-xl font-semibold">Reduced Animations</h2>
        </div>
      </div>
    </main>
  )
}
