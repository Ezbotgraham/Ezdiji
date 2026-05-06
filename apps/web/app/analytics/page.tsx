export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold">Analytics</h1>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
          <h2 className="text-lg font-semibold">Voice Quality</h2>
        </div>

        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
          <h2 className="text-lg font-semibold">Network</h2>
        </div>

        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
          <h2 className="text-lg font-semibold">Performance</h2>
        </div>
      </div>
    </main>
  )
}
