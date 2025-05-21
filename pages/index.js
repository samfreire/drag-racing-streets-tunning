import { useState, useEffect } from "react";

export default function Home() {
  const [tunagens, setTunagens] = useState([]);
  const [search, setSearch] = useState("");
  const [selecionada, setSelecionada] = useState(null);

  useEffect(() => {
    fetch("/api/tunagens")
      .then((res) => res.json())
      .then((data) => setTunagens(data));
  }, []);

  const filtradas = tunagens.filter(t =>
    t.modelo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Drag Racing: Streets - Tunning</h1>

      <input
        type="text"
        placeholder="Buscar por nome do carro..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: 8, width: "100%", maxWidth: 400, marginBottom: 20 }}
      />

      <ul>
        {filtradas.map((t) => (
          <li key={t.id} style={{ cursor: "pointer", marginBottom: 10 }} onClick={() => setSelecionada(t)}>
            {t.modelo} - {t.modo} ({t.classe})
          </li>
        ))}
      </ul>

      {selecionada && (
        <section style={{ marginTop: 30, padding: 10, border: "1px solid #ccc", borderRadius: 8, maxWidth: 600 }}>
          <h2>{selecionada.modelo}</h2>
          <p><strong>Classe:</strong> {selecionada.classe}</p>
          <p><strong>Tração:</strong> {selecionada.tracao}</p>
          <p><strong>Modo:</strong> {selecionada.modo}</p>
          <p><strong>Upgrades:</strong></p>
          <ul>
            {Object.entries(selecionada.upgrades).map(([k, v]) => (
              <li key={k}>{k}: {v}</li>
            ))}
          </ul>
          <p><strong>Final Drive:</strong> {selecionada.final_drive}</p>
          <p><strong>Marchas:</strong> {selecionada.marchas.join(", ")}</p>
          <p><strong>Nitro:</strong> {selecionada.nitro} bar</p>
          <p><strong>Pneus:</strong> Frente {selecionada.pneus.frente} / Trás {selecionada.pneus.tras}</p>
          <p><strong>Suspensão:</strong> Frente {selecionada.suspensao.frente} / Trás {selecionada.suspensao.tras}</p>
          <p><strong>RPM de largada:</strong> {selecionada.rpm_largada}</p>
          <p><strong>Melhor tempo:</strong></p>
          <ul>
            {Object.entries(selecionada.melhor_tempo).map(([k, v]) => (
              <li key={k}>{k.replace("_", " ")}: {v} s</li>
            ))}
          </ul>
          <p><strong>Fonte:</strong> <a href={selecionada.fonte} target="_blank" rel="noreferrer">{selecionada.fonte}</a></p>
          <p><strong>Validada:</strong> {selecionada.validada ? "Sim" : "Não"}</p>
        </section>
      )}
    </main>
  );
}
