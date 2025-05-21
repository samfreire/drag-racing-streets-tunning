const tunagens = [
  {
    id: "1",
    modelo: "Nissan Silvia S15",
    classe: "B",
    tracao: "RWD",
    modo: "Top Speed",
    upgrades: { motor: 0, turbo: 1, admissao_escapamento: 1, nitro: 4, peso: 1, rodas: 2 },
    final_drive: 3.22,
    marchas: [3.45, 2.12, 1.45, 1.12, 0.92, 0.78],
    nitro: 1.4,
    pneus: { frente: 1.9, tras: 2.1 },
    suspensao: { frente: 60, tras: 65 },
    rpm_largada: 8000,
    melhor_tempo: { quarter_mile: 11.2, half_mile: 22.5 },
    fonte: "https://youtu.be/exemplo1",
    validada: true,
    avaliacoes: []
  },
  // ... mais 49 registros similares (vou mandar o arquivo completo com todas as tunagens no próximo envio)
];

export default function handler(req, res) {
  res.status(200).json(tunagens);
}
