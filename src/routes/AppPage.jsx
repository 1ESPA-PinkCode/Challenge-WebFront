import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Missoes from '../components/Missoes';
import Grupos from '../components/Grupos';
import Girassol from '../components/Girassol';

const STORAGE_KEY = 'girassol_missoes';

const AppPage = () => {
  const navigate = useNavigate();
  const [abaAtiva, setAbaAtiva] = useState('missoes');
  const [murcho, setMurcho] = useState(false);
  const [missoes, setMissoes] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const usuario = sessionStorage.getItem("usuario");
    if (!usuario) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    fetch("/missoes.json")
      .then((res) => res.json())
      .then((dadosJSON) => {
        const salvo = localStorage.getItem(STORAGE_KEY);

        if (salvo) {
          try {
            const dados = JSON.parse(salvo);
            const hoje = new Date().toDateString();

            if (dados.data === hoje) {
              const missoresComProgresso = dadosJSON.map(inicial => {
                const salva = dados.missoes.find(m => m.id === inicial.id);
                return salva ? { ...inicial, progresso: salva.progresso } : { ...inicial, progresso: 0 };
              });
              setMissoes(missoresComProgresso);
              setCarregando(false);
              return;
            }
          } catch {
          }
        }

        setMissoes(dadosJSON.map(m => ({ ...m, progresso: 0 })));
        setCarregando(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar missões:", err);
        setCarregando(false);
      });
  }, []);

  useEffect(() => {
    if (missoes.length === 0) return;
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

  if (carregando) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF7F0]">
        <p className="text-green-600 text-lg">Carregando missões... 🌱</p>
      </div>
    );
  }

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