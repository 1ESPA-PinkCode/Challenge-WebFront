import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Perfil() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState(null);
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [confirmarDelete, setConfirmarDelete] = useState(false);

  useEffect(() => {
    const dados = sessionStorage.getItem("usuario");

    if (!dados) {
      navigate("/login");
      return;
    }

    const usuarioSalvo = JSON.parse(dados);
    setUsuario(usuarioSalvo);
    setNome(usuarioSalvo.nome);
  }, [navigate]);

  async function handleAtualizar(e) {
    e.preventDefault();
    setErro("");
    setMensagem("");

    if (senha && senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    if (senha && senha.length < 6) {
      setErro("A senha precisa ter pelo menos 6 caracteres.");
      return;
    }

    setCarregando(true);

    try {
      const body = { nome };

      if (senha) {
        body.senha = senha;
      }

      const resposta = await fetch(
        `https://health-plus-api.onrender.com/usuario/${usuario.cpf}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      const dados = await resposta.json();

      if (!resposta.ok) {
        setErro(dados.erro || "Erro ao atualizar os dados.");
        return;
      }

      const usuarioAtualizado = { ...usuario, nome };

      sessionStorage.setItem("usuario", JSON.stringify(usuarioAtualizado));
      setUsuario(usuarioAtualizado);
      setSenha("");
      setConfirmarSenha("");
      setMensagem("Dados atualizados com sucesso!");
    } catch (e) {
      setErro("Não foi possível conectar ao servidor. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  async function handleDeletar() {
    try {
      const resposta = await fetch(
        `https://health-plus-api.onrender.com/usuario/${usuario.cpf}`,
        {
          method: "DELETE",
        }
      );

      if (!resposta.ok) {
        setErro("Erro ao deletar conta.");
        return;
      }

      sessionStorage.removeItem("usuario");
      navigate("/cadastro");

    } catch (e) {
      setErro("Não foi possível conectar ao servidor. Tente novamente.");
    }
  }

  function handleLogout() {
    sessionStorage.removeItem("usuario");
    navigate("/login");
  }

  if (!usuario) return null;

  return (
    <main className="min-h-screen bg-[#F7FAF9] px-4 py-12">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#1C9770] to-[#28B486] p-8 text-white shadow-[0_18px_45px_rgba(28,151,112,0.25)]">
          <div className="flex flex-col items-center gap-5 text-center md:flex-row md:text-left">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 text-5xl backdrop-blur-sm">
              🌿
            </div>

            <div className="flex-1">
              <p className="mb-1 text-sm font-medium uppercase tracking-[0.25em] text-white/75">
                Meu perfil
              </p>

              <h1 className="text-3xl font-bold md:text-4xl">
                Olá, {usuario.nome}
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
                Gerencie seus dados com segurança e mantenha sua jornada de
                cuidado sempre atualizada.
              </p>
            </div>

            <div className="rounded-2xl bg-white/15 px-5 py-4 text-center backdrop-blur-sm">
              <p className="text-xs uppercase tracking-widest text-white/70">
                CPF
              </p>
              <p className="mt-1 font-semibold">
                {usuario.cpf.replace(
                  /(\d{3})(\d{3})(\d{3})(\d{2})/,
                  "$1.$2.$3-$4"
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-[2rem] border border-[#D9E8E2] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#1F2937]">
                Editar dados
              </h2>
              <p className="mt-1 text-sm text-[#6B7280]">
                Atualize seu nome ou altere sua senha de acesso.
              </p>
            </div>

            <form onSubmit={handleAtualizar} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#1F2937]">
                  Nome
                </label>

                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                  className="rounded-xl border border-[#D9E8E2] bg-[#FAFCFB] px-4 py-3 text-[#1F2937] outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#1C9770]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#1F2937]">
                  Nova senha
                  <span className="ml-1 font-normal text-[#6B7280]">
                    deixe em branco para manter
                  </span>
                </label>

                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Mínimo 6 caracteres"
                  className="rounded-xl border border-[#D9E8E2] bg-[#FAFCFB] px-4 py-3 text-[#1F2937] outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#1C9770]"
                />
              </div>

              {senha && (
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[#1F2937]">
                    Confirmar nova senha
                  </label>

                  <input
                    type="password"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    placeholder="Repita a nova senha"
                    className="rounded-xl border border-[#D9E8E2] bg-[#FAFCFB] px-4 py-3 text-[#1F2937] outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#1C9770]"
                  />
                </div>
              )}

              {erro && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                  {erro}
                </div>
              )}

              {mensagem && (
                <div className="rounded-xl border border-[#B7E7D6] bg-[#E8F7F1] px-4 py-3 text-sm font-medium text-[#167A5B]">
                  {mensagem}
                </div>
              )}

              <button
                type="submit"
                disabled={carregando}
                className="mt-2 rounded-xl bg-[#1C9770] px-5 py-3 font-semibold text-white transition hover:bg-[#167A5B] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {carregando ? "Salvando..." : "Salvar alterações"}
              </button>
            </form>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-[2rem] border border-[#D9E8E2] bg-[#E8F7F1] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1C9770]">
                Status
              </p>

              <h3 className="mt-3 text-xl font-bold text-[#1F2937]">
                Jornada ativa
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                Continue acompanhando seus hábitos e mantendo seus dados sempre
                atualizados.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#D9E8E2] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="mb-5">
                <h2 className="text-xl font-bold text-[#1F2937]">
                  Configurações da conta
                </h2>

                <p className="mt-1 text-sm text-[#6B7280]">
                  Gerencie seu acesso à plataforma.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleLogout}
                  className="w-full rounded-xl border border-[#D9E8E2] px-4 py-3 font-semibold text-[#1F2937] transition hover:bg-[#F7FAF9]"
                >
                  Sair da conta
                </button>

                {!confirmarDelete ? (
                  <button
                    onClick={() => setConfirmarDelete(true)}
                    className="w-full rounded-xl border border-red-200 px-4 py-3 font-semibold text-red-500 transition hover:bg-red-50"
                  >
                    Deletar conta
                  </button>
                ) : (
                  <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
                    <p className="mb-3 text-center text-sm font-medium text-red-600">
                      Tem certeza? Essa ação não pode ser desfeita.
                    </p>

                    <div className="flex gap-2">
                      <button
                        onClick={() => setConfirmarDelete(false)}
                        className="flex-1 rounded-xl border border-[#D9E8E2] bg-white px-4 py-2 font-semibold text-[#1F2937] transition hover:bg-[#F7FAF9]"
                      >
                        Cancelar
                      </button>

                      <button
                        onClick={handleDeletar}
                        className="flex-1 rounded-xl bg-red-500 px-4 py-2 font-semibold text-white transition hover:bg-red-600"
                      >
                        Confirmar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Perfil;