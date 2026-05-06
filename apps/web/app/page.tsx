export default function HomePage() {
  return (
    <main className="flex h-screen bg-[#0b0d10] text-white overflow-hidden">
      <aside className="w-[72px] bg-[#111317] border-r border-white/5 flex flex-col items-center py-4 gap-4">
        <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center font-bold text-black text-xl">
          E
        </div>

        <div className="w-12 h-12 rounded-2xl bg-[#1a1d22]" />
        <div className="w-12 h-12 rounded-2xl bg-[#1a1d22]" />
        <div className="w-12 h-12 rounded-2xl bg-[#1a1d22]" />
      </aside>

      <aside className="w-[260px] bg-[#13161b] border-r border-white/5 flex flex-col">
        <div className="h-16 border-b border-white/5 flex items-center px-4 font-semibold text-lg">
          Ezdiji
        </div>

        <div className="p-3 space-y-2 overflow-y-auto">
          <div className="px-3 py-2 rounded-xl bg-[#1d2128] hover:bg-[#242933] transition cursor-pointer">
            # genel
          </div>

          <div className="px-3 py-2 rounded-xl hover:bg-[#1a1f27] transition cursor-pointer">
            # yazilim
          </div>

          <div className="px-3 py-2 rounded-xl hover:bg-[#1a1f27] transition cursor-pointer">
            # oyun
          </div>

          <div className="px-3 py-2 rounded-xl hover:bg-[#1a1f27] transition cursor-pointer">
            # medya
          </div>
        </div>

        <div className="mt-auto p-3 border-t border-white/5">
          <div className="bg-[#1b2028] rounded-2xl p-3 flex items-center justify-between">
            <div>
              <div className="font-medium">Esr1964</div>
              <div className="text-xs text-green-400">Online</div>
            </div>

            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-xl bg-[#2b313d] hover:bg-[#363e4d] transition">
                🎤
              </button>

              <button className="w-10 h-10 rounded-xl bg-[#2b313d] hover:bg-[#363e4d] transition">
                🔈
              </button>
            </div>
          </div>
        </div>
      </aside>

      <section className="flex-1 flex flex-col">
        <header className="h-16 border-b border-white/5 flex items-center px-5 justify-between">
          <div className="font-semibold text-lg"># genel</div>

          <div className="flex gap-3">
            <button className="bg-[#1b2028] px-4 py-2 rounded-xl hover:bg-[#232933] transition">
              Ekran Paylaş
            </button>

            <button className="bg-green-500 text-black px-4 py-2 rounded-xl font-medium hover:bg-green-400 transition">
              Sese Katıl
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="bg-[#151922] rounded-2xl p-4 max-w-[620px]">
            <div className="font-semibold mb-1">Esr1964</div>
            <div className="text-white/80">
              Ezdiji alpha frontend aktif edildi.
            </div>
          </div>

          <div className="bg-[#151922] rounded-2xl p-4 max-w-[620px]">
            <div className="font-semibold mb-1">System</div>
            <div className="text-white/80">
              Websocket, realtime ve RTC sistemleri bağlanmaya hazır.
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-white/5">
          <div className="bg-[#171b22] rounded-2xl px-4 py-3 flex items-center gap-3">
            <input
              placeholder="Mesaj gönder..."
              className="bg-transparent outline-none flex-1 text-white"
            />

            <button className="bg-green-500 hover:bg-green-400 transition text-black px-4 py-2 rounded-xl font-medium">
              Gönder
            </button>
          </div>
        </div>
      </section>

      <aside className="w-[320px] bg-[#111419] border-l border-white/5 p-4 hidden xl:block">
        <div className="font-semibold mb-4">Ses Odası</div>

        <div className="space-y-3">
          <div className="bg-[#1a1f27] rounded-2xl p-4">
            <div className="font-medium">Genel Ses</div>
            <div className="text-sm text-white/60 mt-1">2 kullanıcı bağlı</div>
          </div>

          <div className="bg-[#1a1f27] rounded-2xl p-4">
            <div className="font-medium">Ekran Paylaşımı</div>
            <div className="text-sm text-white/60 mt-1">Aktif yayın yok</div>
          </div>
        </div>
      </aside>
    </main>
  )
}
