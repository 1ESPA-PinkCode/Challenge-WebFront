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

  // Proteção de rota — redireciona pro login se não estiver logado
  useEffect(() => {
    const dados = sessionStorage.getItem("usuario");
    if (!dados) {
      navigate("/login");
      return;
    }
    const usuarioSalvo = JSON.parse(dados);
    setUsuario(usuarioSalvo);
    setNome(usuarioSalvo.nome);
  }, []);

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
      if (senha) body.senha = senha;

      const resposta = await fetch(`http://127.0.0.1:5000/usuario/${usuario.cpf}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        setErro(dados.erro);
        return;
      }

      // Atualiza o nome no sessionStorage
      const usuarioAtualizado = { ...usuario, nome };
      sessionStorage.setItem("usuario", JSON.stringify(usuarioAtualizado));
      setUsuario(usuarioAtualizado);
      setSenha("");
      setConfirmarSenha("");
      setMensagem("Dados atualizados com sucesso! 🌱");

    } catch (e) {
      setErro("Não foi possível conectar ao servidor. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  async function handleDeletar() {
    try {
      const resposta = await fetch(`http://127.0.0.1:5000/usuario/${usuario.cpf}`, {
        method: "DELETE",
      });

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
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md flex flex-col gap-6">

        {/* Card de boas vindas */}
        <div className="bg-[#1c9770] rounded-2xl p-6 text-white text-center">
          <div className="text-4xl mb-2">🌱</div>
          <h1 className="text-2xl font-bold">{usuario.nome}</h1>
          <p className="text-white opacity-75 text-sm mt-1">
            CPF: {usuario.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}
          </p>
        </div>

        {/* Card de edição */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-lg font-bold text-gray-700 mb-4">Editar dados</h2>

          <form onSubmit={handleAtualizar} className="flex flex-col gap-4">

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Nova senha <span className="text-gray-400 font-normal">(deixe em branco para manter)</span>
              </label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {senha && (
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Confirmar nova senha</label>
                <input
                  type="password"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                  placeholder="Repita a nova senha"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            )}

            {erro && (
              <div className="bg-red-50 border border-red-300 text-red-600 text-sm rounded-lg px-4 py-2">
                {erro}
              </div>
            )}

            {mensagem && (
              <div className="bg-green-50 border border-green-300 text-green-600 text-sm rounded-lg px-4 py-2">
                {mensagem}
              </div>
            )}

            <button
              type="submit"
              disabled={carregando}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50"
            >
              {carregando ? "Salvando..." : "Salvar alterações"}
            </button>

          </form>
        </div>

        {/* Ações da conta */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-3">
          <h2 className="text-lg font-bold text-gray-700">Conta</h2>

          <button
            onClick={handleLogout}
            className="w-full py-2 rounded-lg border border-gray-300 text-gray-600 font-medium hover:bg-gray-50 transition"
          >
            Sair da conta
          </button>

          {!confirmarDelete ? (
            <button
              onClick={() => setConfirmarDelete(true)}
              className="w-full py-2 rounded-lg border border-red-300 text-red-500 font-medium hover:bg-red-50 transition"
            >
              Deletar conta
            </button>
          ) : (
            <div className="flex flex-col gap-2">
              <p className="text-sm text-red-500 text-center font-medium">
                Tem certeza? Essa ação não pode ser desfeita.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setConfirmarDelete(false)}
                  className="flex-1 py-2 rounded-lg border border-gray-300 text-gray-600 font-medium hover:bg-gray-50 transition"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleDeletar}
                  className="flex-1 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition"
                >
                  Confirmar
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}

export default Perfil;