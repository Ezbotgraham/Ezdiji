export default function PreferencesPage() {
  return (
    <main className="min-h-screen bg-[#0b0d10] text-white p-8">
      <h1 className="text-4xl font-bold">Ayarlar</h1>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="bg-[#151922] rounded-3xl p-6">
          <h2 className="text-xl font-semibold">Ses Ayarları</h2>
        </div>

        <div className="bg-[#151922] rounded-3xl p-6">
          <h2 className="text-xl font-semibold">Video Ayarları</h2>
        </div>

        <div className="bg-[#151922] rounded-3xl p-6">
          <h2 className="text-xl font-semibold">Bildirimler</h2>
        </div>

        <div className="bg-[#151922] rounded-3xl p-6">
          <h2 className="text-xl font-semibold">Performans</h2>
        </div>
      </div>
    </main>
  )
}
