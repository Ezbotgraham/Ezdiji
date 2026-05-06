export default function ChannelsPage() {
  return (
    <main className="flex min-h-screen bg-black text-white">
      <aside className="w-72 border-r border-zinc-900 bg-zinc-950 p-4">
        <h1 className="text-2xl font-bold">Ezdiji</h1>

        <div className="mt-8 space-y-2">
          <div className="rounded-lg bg-zinc-900 p-3">General</div>
          <div className="rounded-lg bg-zinc-900 p-3">Gaming</div>
          <div className="rounded-lg bg-zinc-900 p-3">Development</div>
        </div>
      </aside>

      <section className="flex-1 flex flex-col">
        <header className="border-b border-zinc-900 p-4">
          <h2 className="text-xl font-semibold"># general</h2>
        </header>

        <div className="flex-1 p-6 space-y-4 overflow-y-auto">
          <div className="rounded-xl bg-zinc-950 p-4 border border-zinc-900">
            Welcome to Ezdiji.
          </div>
        </div>

        <div className="border-t border-zinc-900 p-4">
          <input
            placeholder="Send message"
            className="w-full rounded-xl bg-zinc-950 p-4 outline-none border border-zinc-900"
          />
        </div>
      </section>
    </main>
  )
}
