export default function PerformancePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold">Performance</h1>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
          <h2 className="text-xl font-semibold">Low Resource Mode</h2>
        </div>

        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
          <h2 className="text-xl font-semibold">Adaptive Bitrate</h2>
        </div>

        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
          <h2 className="text-xl font-semibold">Hardware Acceleration</h2>
        </div>

        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
          <h2 className="text-xl font-semibold">Battery Saver</h2>
        </div>
      </div>
    </main>
  )
}
