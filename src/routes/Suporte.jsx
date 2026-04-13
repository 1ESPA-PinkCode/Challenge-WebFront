import { useState } from "react";

const Suporte = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    plano: "",
    assunto: "",
  });

  const [mensagem, setMensagem] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensagem("Formulário enviado com sucesso! ✨");
  };

  const handleReset = () => {
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      plano: "",
      assunto: "",
    });
    setMensagem("Formulário limpo com sucesso!");
  };

  return (
    <section className="min-h-[70vh] bg-[#7AD1C3]/15 px-6 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 xl:grid-cols-2">
        
        <div className="rounded-3xl border border-[#7AD1C3] bg-white p-8 shadow-xl">
          <h1 className="mb-2 text-3xl font-bold text-[#1c9770ff]">
            Central de Suporte
          </h1>
          <p className="mb-6 text-gray-600">
            Envie sua dúvida, sugestão ou problema e nossa equipe da Health Plus
            vai analisar.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block font-semibold text-[#1c9770ff]">
                Nome
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Digite seu nome"
                className="w-full rounded-2xl border border-[#7AD1C3] bg-[#7AD1C3]/10 px-4 py-3 outline-none transition focus:ring-4 focus:ring-[#7AD1C3]/40"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#1c9770ff]">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu e-mail"
                className="w-full rounded-2xl border border-[#7AD1C3] bg-[#7AD1C3]/10 px-4 py-3 outline-none transition focus:ring-4 focus:ring-[#7AD1C3]/40"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#1c9770ff]">
                Telefone
              </label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="Digite seu telefone"
                className="w-full rounded-2xl border border-[#7AD1C3] bg-[#7AD1C3]/10 px-4 py-3 outline-none transition focus:ring-4 focus:ring-[#7AD1C3]/40"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#1c9770ff]">
                Você já possui uma conta?
              </label>
              <select
                name="plano"
                value={formData.plano}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#7AD1C3] bg-[#7AD1C3]/10 px-4 py-3 outline-none transition focus:ring-4 focus:ring-[#7AD1C3]/40"
              >
                <option value="">Selecione uma opção</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-semibold text-[#1c9770ff]">
                Assunto
              </label>
              <textarea
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                rows="5"
                placeholder="Escreva qual é o assunto do seu atendimento"
                className="w-full resize-none rounded-2xl border border-[#7AD1C3] bg-[#7AD1C3]/10 px-4 py-3 outline-none transition focus:ring-4 focus:ring-[#7AD1C3]/40"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="rounded-full bg-[#1c9770ff] px-6 py-3 font-semibold text-white shadow-md transition hover:bg-[#93CB52] hover:text-[#1c9770ff]"
              >
                Enviar
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="rounded-full bg-[#7AD1C3] px-6 py-3 font-semibold text-[#1c9770ff] shadow-md transition hover:bg-[#93CB52]"
              >
                Limpar
              </button>
            </div>

            {mensagem && (
              <p className="pt-2 font-medium text-[#1c9770ff]">{mensagem}</p>
            )}
          </form>
        </div>

        <div className="space-y-8">
          <div className="rounded-3xl border border-[#7AD1C3] bg-white p-8 shadow-xl">
            <h2 className="mb-6 text-2xl font-bold text-[#1c9770ff]">
              Perguntas frequentes
            </h2>

            <div className="space-y-4">
              <div className="rounded-2xl bg-[#7AD1C3]/10 p-4 transition hover:bg-[#7AD1C3]/20">
                <h3 className="text-lg font-bold text-[#1c9770ff]">
                  Como acompanho a evolução da minha planta?
                </h3>
                <p className="mt-1 text-gray-600">
                  A planta evolutiva cresce conforme você mantém constância nos
                  seus hábitos e metas dentro do app.
                </p>
              </div>

              <div className="rounded-2xl bg-[#7AD1C3]/10 p-4 transition hover:bg-[#7AD1C3]/20">
                <h3 className="text-lg font-bold text-[#1c9770ff]">
                  Como resgatar recompensas?
                </h3>
                <p className="mt-1 text-gray-600">
                  Vá até a área de recompensas, confira seus pontos e escolha o
                  benefício disponível para resgate.
                </p>
              </div>

              <div className="rounded-2xl bg-[#7AD1C3]/10 p-4 transition hover:bg-[#7AD1C3]/20">
                <h3 className="text-lg font-bold text-[#1c9770ff]">
                  Como adicionar amigos?
                </h3>
                <p className="mt-1 text-gray-600">
                  Na área estilo GymRats, você pode procurar amigos, acompanhar
                  progresso e interagir com eles.
                </p>
              </div>

              <div className="rounded-2xl bg-[#7AD1C3]/10 p-4 transition hover:bg-[#7AD1C3]/20">
                <h3 className="text-lg font-bold text-[#1c9770ff]">
                  Onde altero meus dados?
                </h3>
                <p className="mt-1 text-gray-600">
                  No seu perfil, clique em editar informações para atualizar seus
                  dados pessoais.
                </p>
              </div>
              <div className="rounded-2xl bg-[#7AD1C3]/10 p-4 transition hover:bg-[#7AD1C3]/20">
                <h3 className="text-lg font-bold text-[#1c9770ff]">
                  Como altero meu telefone ou e-mail cadastrado?
                </h3>
                <p className="mt-1 text-gray-600">
                  Você pode atualizar suas informações de contato na área de perfil, acessando a opção de editar dados pessoais.
                </p>
              </div>
              <div className="rounded-2xl bg-[#7AD1C3]/10 p-4 transition hover:bg-[#7AD1C3]/20">
                <h3 className="text-lg font-bold text-[#1c9770ff]">
                  O que acontece se eu preencher o formulário de suporte errado?
                </h3>
                <p className="mt-1 text-gray-600">
                  Você pode clicar no botão “Limpar” para apagar os campos e preencher novamente com as informações corretas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suporte;