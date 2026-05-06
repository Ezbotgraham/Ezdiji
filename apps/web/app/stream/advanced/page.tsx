export default function AdvancedStreamPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold">Advanced Stream Settings</h1>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
          <h2 className="text-xl font-semibold">Resolution & FPS</h2>
        </div>

        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
          <h2 className="text-xl font-semibold">Codec & Encoder</h2>
        </div>

        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
          <h2 className="text-xl font-semibold">Latency Mode</h2>
        </div>

        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
          <h2 className="text-xl font-semibold">Bitrate</h2>
        </div>
      </div>
    </main>
  )
}
