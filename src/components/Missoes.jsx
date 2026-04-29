import { GiMeditation, GiNightSleep, GiWaterDrop, GiRunningShoe } from 'react-icons/gi';
import { FaPlus, FaUndo, FaMinus } from 'react-icons/fa';

const ICONES = {
  meditacao: GiMeditation,
  sono: GiNightSleep,
  agua: GiWaterDrop,
  exercicio: GiRunningShoe,
};

export default function Missoes({ missoes, onAtualizar }) {
  function incrementar(id) {
    const m = missoes.find(x => x.id === id);
    if (m.progresso >= m.meta) return;
    onAtualizar(id, m.progresso + 1);
  }

  function decrementar(id) {
    const m = missoes.find(x => x.id === id);
    if (m.progresso <= 0) return;
    onAtualizar(id, m.progresso - 1);
  }

  function resetar(id) {
    onAtualizar(id, 0);
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-linear-to-br from-[#1c9770ff] to-[#0e6e54] rounded-2xl px-5 py-4 mb-4 shadow-md">
        <h2 className="text-white text-lg font-semibold m-0">Missões de hoje</h2>
      </div>

      <div className="flex flex-col gap-3">
        {missoes.map(missao => {
          const completa = missao.progresso >= missao.meta;
          const porcentagem = Math.min(100, (missao.progresso / missao.meta) * 100);
          const Icone = ICONES[missao.iconeKey];

          return (
            <div
              key={missao.id}
              className={`rounded-2xl px-5 py-4 border transition-all ${
                completa
                  ? 'bg-linear-to-br from-[#f1f8e9] to-[#e8f5e9] border-[#a5d6a7]'
                  : 'bg-white border-black/5 shadow-sm'
              }`}
            >
              <div className="flex gap-3 items-start mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ backgroundColor: missao.corFundo, color: missao.corIcone }}
                >
                  {Icone && <Icone />}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-semibold m-0 mb-1 text-gray-900">
                    {missao.titulo}
                  </h3>
                  <p className="text-[13px] text-gray-500 m-0 leading-snug">
                    {missao.descricao}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-1.5 text-xs">
                  <span className="text-gray-500">
                    {missao.progresso} de {missao.meta} {missao.unidade}
                  </span>
                  <span className={`font-semibold ${completa ? 'text-[#2e7d32]' : 'text-[#1c9770ff]'}`}>
                    {Math.round(porcentagem)}%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      completa
                        ? 'bg-linear-to-r from-[#1c9770ff] to-[#0e6e54]'
                        : 'bg-linear-to-r from-[#3fb88a] to-[#1c9770ff]'
                    }`}
                    style={{ width: `${porcentagem}%` }}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center gap-2">
                <div className={`rounded-lg px-2.5 py-1 text-xs border ${
                  completa
                    ? 'bg-[#ffe082] border-[#ffca28]'
                    : 'bg-[#fff8e1] border-[#ffe082]'
                }`}>
                  <span className="text-[#f57f17] font-semibold">
                    +{missao.recompensa} moedas
                  </span>
                </div>
                <div className="flex gap-1.5 items-center">
                  {missao.progresso > 0 && !completa && (
                    <button
                      onClick={() => decrementar(missao.id)}
                      className="rounded-lg px-2.5 py-1.5 text-base bg-transparent text-gray-400 border border-gray-200 hover:bg-gray-50 hover:text-gray-600 transition-all"
                      aria-label="Diminuir progresso"
                    >
                      <FaMinus className="text-xs" />
                    </button>
                  )}
                  {completa ? (
                    <button
                      onClick={() => resetar(missao.id)}
                      className="rounded-lg px-3 py-1.5 text-[13px] font-medium bg-transparent text-gray-600 border border-gray-300 hover:bg-gray-50 transition-all flex items-center gap-1.5"
                    >
                      <FaUndo className="text-xs" /> Resetar
                    </button>
                  ) : (
                    <button
                      onClick={() => incrementar(missao.id)}
                      className="rounded-lg px-3 py-1.5 text-[13px] font-medium bg-[#1c9770ff] text-white hover:bg-[#0e6e54] hover:-translate-y-0.5 hover:shadow-md transition-all flex items-center gap-1.5"
                    >
                      <FaPlus className="text-xs" /> Registrar
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}