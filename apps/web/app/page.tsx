export default function HomePage() {
  return (
    <main
      style={{
        display: 'flex',
        height: '100vh',
        background: '#0b0d10',
        color: 'white',
        fontFamily: 'sans-serif',
      }}
    >
      <aside
        style={{
          width: 72,
          background: '#111317',
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 16,
            background: '#22c55e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black',
            fontWeight: 'bold',
          }}
        >
          E
        </div>
      </aside>

      <aside
        style={{
          width: 260,
          background: '#13161b',
          padding: 20,
        }}
      >
        <h2>Ezdiji</h2>

        <div style={{ marginTop: 24, lineHeight: 2 }}>
          <div># genel</div>
          <div># yazilim</div>
          <div># oyun</div>
          <div># medya</div>
        </div>
      </aside>

      <section
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <header
          style={{
            padding: 20,
            borderBottom: '1px solid #1f2937',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div># genel</div>

          <div style={{ display: 'flex', gap: 12 }}>
            <button>Ekran Paylaş</button>
            <button>Sese Katıl</button>
          </div>
        </header>

        <div style={{ flex: 1, padding: 24 }}>
          <div
            style={{
              background: '#151922',
              padding: 16,
              borderRadius: 18,
              marginBottom: 16,
              maxWidth: 500,
            }}
          >
            <b>Esr1964</b>
            <p>Ezdiji alpha frontend aktif edildi.</p>
          </div>

          <div
            style={{
              background: '#151922',
              padding: 16,
              borderRadius: 18,
              maxWidth: 500,
            }}
          >
            <b>System</b>
            <p>Realtime sistemleri bağlanmaya hazır.</p>
          </div>
        </div>

        <div style={{ padding: 20 }}>
          <div
            style={{
              display: 'flex',
              gap: 12,
              background: '#171b22',
              padding: 12,
              borderRadius: 18,
            }}
          >
            <input
              placeholder="Mesaj gönder..."
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                color: 'white',
                outline: 'none',
              }}
            />

            <button>Gönder</button>
          </div>
        </div>
      </section>
    </main>
  )
}
