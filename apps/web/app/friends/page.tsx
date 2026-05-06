export default function FriendsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold">Friends</h1>

      <div className="mt-8 grid gap-4">
        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-4 flex items-center justify-between">
          <div>
            <h2 className="font-semibold">Esr1964</h2>
            <p className="text-sm text-green-400">Online</p>
          </div>

          <button className="rounded-lg bg-white px-4 py-2 text-black">
            Message
          </button>
        </div>
      </div>
    </main>
  )
}
