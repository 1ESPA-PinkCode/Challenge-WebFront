import { FaCrown, FaMedal } from 'react-icons/fa';

const GRUPO = {
  nome: 'PinkCode',
  classificacaoSemanal: [
    { nome: 'Roberta Moreira', missoes: 7, cor: '#FF6B9D' },
    { nome: 'Lara Alssabak', missoes: 6, cor: '#9B59B6' },
    { nome: 'Maria Luiza Kochnoff', missoes: 5, cor: '#3498DB' },
    { nome: 'Maria Luisa Boucinhas', missoes: 4, cor: '#1ABC9C' }
  ],
  vitoriasSemanais: [
    { nome: 'Maria Luisa Boucinhas', vitorias: 10, cor: '#1ABC9C' },
    { nome: 'Lara Alssabak', vitorias: 6, cor: '#9B59B6' },
    { nome: 'Roberta Moreira', vitorias: 5, cor: '#FF6B9D' },
    { nome: 'Maria Luiza Kochnoff', vitorias: 3, cor: '#3498DB' }
  ]
};

function obterIniciais(nomeCompleto) {
  const partes = nomeCompleto.split(' ');
  if (partes.length === 1) return partes[0][0];
  return partes[0][0] + partes[partes.length - 1][0];
}

function ItemRanking({ posicao, nome, valor, label, cor }) {
  const corPosicao =
    posicao === 1 ? 'text-[#f57f17]' :
    posicao === 2 ? 'text-[#607d8b]' :
    posicao === 3 ? 'text-[#8d6e63]' :
    'text-gray-400';

  return (
    <div className="flex items-center gap-3 px-3 py-2.5 bg-gray-50 rounded-xl border border-black/5 hover:bg-gray-100 hover:translate-x-0.5 transition-all">
      <span className={`text-sm font-semibold min-w-[24px] ${corPosicao}`}>
        {posicao}º
      </span>
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold text-[13px] shrink-0"
        style={{ background: cor }}
      >
        {obterIniciais(nome)}
      </div>
      <div className="flex-1 flex flex-col gap-0.5 min-w-0">
        <span className="text-sm font-semibold text-gray-900 truncate">{nome}</span>
        <span className="text-xs text-gray-500">{valor} {label}</span>
      </div>
    </div>
  );
}

export default function Grupos() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-linear-to-br from-[#1c9770ff] to-[#0e6e54] rounded-2xl px-5 py-4 mb-4 shadow-md">
        <h2 className="text-white text-lg font-semibold m-0">Seus Grupos</h2>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-black/5 shadow-sm">
        <h3 className="text-center text-xl font-semibold text-[#1c9770ff] mb-6 m-0">
          {GRUPO.nome}
        </h3>

        <div className="mb-6">
          <h4 className="text-[13px] font-medium text-gray-400 mb-3 m-0 uppercase tracking-wide flex items-center gap-2">
            <FaCrown className="text-[#f57f17]" /> Classificação semanal
          </h4>
          <div className="flex flex-col gap-2">
            {GRUPO.classificacaoSemanal.map((pessoa, i) => (
              <ItemRanking
                key={i}
                posicao={i + 1}
                nome={pessoa.nome}
                valor={pessoa.missoes}
                label="missões concluídas"
                cor={pessoa.cor}
              />
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[13px] font-medium text-gray-400 mb-3 m-0 uppercase tracking-wide flex items-center gap-2">
            <FaMedal className="text-[#f57f17]" /> Vitórias
          </h4>
          <div className="flex flex-col gap-2">
            {GRUPO.vitoriasSemanais.map((pessoa, i) => (
              <ItemRanking
                key={i}
                posicao={i + 1}
                nome={pessoa.nome}
                valor={pessoa.vitorias}
                label="vitórias semanais"
                cor={pessoa.cor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}