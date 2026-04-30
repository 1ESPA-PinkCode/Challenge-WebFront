import { useState, useEffect } from 'react';
import Missoes from '../components/Missoes';
import Grupos from '../components/Grupos';
import Girassol from '../components/Girassol';

const MISSOES_INICIAIS = [
  {
    id: 1,
    titulo: 'Meditação Matinal',
    descricao: 'Pratique 10 minutos de meditação',
    iconeKey: 'meditacao',
    corFundo: '#E0F2F1',
    corIcone: '#00897B',
    progresso: 0,
    meta: 10,
    unidade: 'min',
    recompensa: 30
  },
  {
    id: 2,
    titulo: 'Sono Reparador',
    descricao: 'Durma 8 horas essa noite',
    iconeKey: 'sono',
    corFundo: '#E3F2FD',
    corIcone: '#1976D2',
    progresso: 0,
    meta: 8,
    unidade: 'horas',
    recompensa: 40
  },
  {
    id: 3,
    titulo: 'Hidratação',
    descricao: 'Beba 8 copos de água',
    iconeKey: 'agua',
    corFundo: '#E1F5FE',
    corIcone: '#0288D1',
    progresso: 0,
    meta: 8,
    unidade: 'copos',
    recompensa: 25
  },
  {
    id: 4,
    titulo: 'Movimento',
    descricao: 'Faça 30 minutos de exercício',
    iconeKey: 'exercicio',
    corFundo: '#FFF3E0',
    corIcone: '#F57C00',
    progresso: 0,
    meta: 30,
    unidade: 'min',
    recompensa: 50
  }
];

const STORAGE_KEY = 'girassol_missoes';

const AppPage = () => {
  const [abaAtiva, setAbaAtiva] = useState('missoes');
  const [murcho, setMurcho] = useState(false);

  const [missoes, setMissoes] = useState(() => {
    const salvo = localStorage.getItem(STORAGE_KEY);
    if (!salvo) return MISSOES_INICIAIS;

    try {
      const dados = JSON.parse(salvo);
      const hoje = new Date().toDateString();

      if (dados.data !== hoje) return MISSOES_INICIAIS;

      return MISSOES_INICIAIS.map(inicial => {
        const salva = dados.missoes.find(m => m.id === inicial.id);
        return salva ? { ...inicial, progresso: salva.progresso } : inicial;
      });
    } catch {
      return MISSOES_INICIAIS;
    }
  });

  useEffect(() => {
    const dados = {
      data: new Date().toDateString(),
      missoes: missoes.map(m => ({ id: m.id, progresso: m.progresso }))
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
  }, [missoes]);

  function atualizarMissao(id, novoProgresso) {
    setMissoes(missoes.map(m =>
      m.id === id ? { ...m, progresso: novoProgresso } : m
    ));
  }

  const progressoTotal = missoes.reduce((acc, m) => {
    return acc + Math.min(1, m.progresso / m.meta);
  }, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F0] py-8 px-4">
      <header className="text-center mb-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold text-[#1c9770ff] mb-2">Meu girassol</h1>
        <p className="text-gray-500 text-sm">
          Cuide das suas missões diárias e veja sua flor crescer
        </p>
      </header>

      <main className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <section className="flex flex-col items-center lg:sticky lg:top-8">
          <Girassol
            missionsCompleted={progressoTotal}
            totalMissions={missoes.length}
            isWilted={murcho}
            showLabel={true}
          />
          <p className="text-xs text-gray-500 mt-2 text-center">
            {progressoTotal.toFixed(1)} de {missoes.length} missões completas
          </p>
          <button
            onClick={() => setMurcho(!murcho)}
            className="mt-3 px-4 py-1.5 text-xs text-gray-600 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
          >
            {murcho ? 'Reviver flor' : 'Ver flor murcha'}
          </button>
        </section>

        <section className="flex flex-col gap-4">
          <nav className="flex gap-2 p-1.5 bg-white rounded-2xl shadow-sm">
            <button
              className={`flex-1 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                abaAtiva === 'missoes'
                  ? 'bg-linear-to-br from-[#1c9770ff] to-[#0e6e54] text-white shadow-md'
                  : 'bg-transparent text-gray-500 hover:bg-gray-50'
              }`}
              onClick={() => setAbaAtiva('missoes')}
            >
              ✓ Missões
            </button>
            <button
              className={`flex-1 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                abaAtiva === 'grupos'
                  ? 'bg-linear-to-br from-[#1c9770ff] to-[#0e6e54] text-white shadow-md'
                  : 'bg-transparent text-gray-500 hover:bg-gray-50'
              }`}
              onClick={() => setAbaAtiva('grupos')}
            >
              Grupos
            </button>
          </nav>

          <div>
            {abaAtiva === 'missoes' && (
              <Missoes missoes={missoes} onAtualizar={atualizarMissao} />
            )}
            {abaAtiva === 'grupos' && <Grupos />}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AppPage;