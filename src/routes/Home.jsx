import React from 'react'
import { Leaf, Trophy, Users, UserPlus, ClipboardList, CheckCircle, Gem, Sprout, Bot, Wifi, Bell, Footprints, MessageCircle, ShieldCheck, Sparkles, Medal } from 'lucide-react'
import bloom from '../assets/bloom.jpeg'

const Home = () => {
  return (
    <main>
      
      <section id="hero"        
      className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-24 gap-8 bg-[#f5f9f7]"
      >

        <div className="flex flex-col items-center md:items-start gap-6 flex-1 text-center md:text-left">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--text-dark)' }}
          >
            Cuide-se hoje.<br />Floresça sempre.
          </h1>

          <p
            className="text-base md:text-lg max-w-md leading-relaxed"
            style={{ color: 'var(--text-muted)'}}
          >
            O Health Plus transforma seus hábitos diários em conquistas reais — 
            com gamificação, recompensas e uma plantinha que cresce junto com você.
          </p>

          <div className="hero-bnts flex flex-row flex-wrap justify-center md:justify-start gap-4">

            <a href="/app" className="px-8 py-3 rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: 'var(--green-dark)' }}
            >
              Conheça nosso Aplicativo
            </a>
            <a href="/suporte" className="px-8 py-3 rounded-full font-bold transition-all duration-300 hover:-translate-y-1"
              style={{ color: 'var(--green-dark)', border: '2px solid var(--green-dark)' }}
            >
              Falar com suporte
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center flex-1 py-12 md:py-0">
          <svg
            viewBox="0 0 300 380"
            xmlns="http://www.w3.org/2000/svg"
            className="w-64 md:w-80 lg:w-96 drop-shadow-xl"
          >
            {/* Vaso */}
            <ellipse cx="150" cy="340" rx="60" ry="12" fill="#1c9770" opacity="0.2"/>
            <path d="M110 310 Q110 350 150 355 Q190 350 190 310 Z" fill="#1c9770"/>
            <path d="M105 295 Q105 315 150 318 Q195 315 195 295 Z" fill="#7AD1C3"/>

            {/* Caule */}
            <line x1="150" y1="295" x2="150" y2="160" stroke="#1c9770" strokeWidth="5" strokeLinecap="round"/>

            {/* Folha esquerda baixo */}
            <path d="M150 260 Q110 240 100 200 Q130 215 150 240" fill="#93CB52"/>

            {/* Folha direita baixo */}
            <path d="M150 240 Q190 220 200 180 Q170 195 150 220" fill="#1c9770"/>

            {/* Folha esquerda meio */}
            <path d="M150 210 Q105 185 98 140 Q132 158 150 188" fill="#7AD1C3"/>

            {/* Folha direita meio */}
            <path d="M150 190 Q195 165 202 120 Q168 140 150 168" fill="#93CB52"/>

            {/* Flor centro */}
            <circle cx="150" cy="130" r="22" fill="#93CB52"/>
            <circle cx="150" cy="130" r="13" fill="#1c9770"/>
            <circle cx="150" cy="130" r="6" fill="#7AD1C3"/>

            {/* Pétalas */}
            <ellipse cx="150" cy="103" rx="10" ry="16" fill="#93CB52" opacity="0.8"/>
            <ellipse cx="150" cy="157" rx="10" ry="16" fill="#93CB52" opacity="0.8"/>
            <ellipse cx="123" cy="130" rx="16" ry="10" fill="#93CB52" opacity="0.8"/>
            <ellipse cx="177" cy="130" rx="16" ry="10" fill="#93CB52" opacity="0.8"/>
            <ellipse cx="131" cy="111" rx="10" ry="16" transform="rotate(-45 131 111)" fill="#7AD1C3" opacity="0.7"/>
            <ellipse cx="169" cy="111" rx="10" ry="16" transform="rotate(45 169 111)" fill="#7AD1C3" opacity="0.7"/>
            <ellipse cx="131" cy="149" rx="10" ry="16" transform="rotate(45 131 149)" fill="#7AD1C3" opacity="0.7"/>
            <ellipse cx="169" cy="149" rx="10" ry="16" transform="rotate(-45 169 149)" fill="#7AD1C3" opacity="0.7"/>

            {/* Bolinhas decorativas */}
            <circle cx="90" cy="170" r="5" fill="#93CB52" opacity="0.5"/>
            <circle cx="210" cy="190" r="4" fill="#7AD1C3" opacity="0.5"/>
            <circle cx="80" cy="230" r="3" fill="#1c9770" opacity="0.4"/>
            <circle cx="220" cy="250" r="6" fill="#93CB52" opacity="0.3"/>
          </svg>
        </div>

      </section>

      <section id="sobre" className="py-20 px-6 md:px-24 bg-[#1c9770]">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif'}}
          >
            Saúde que faz sentido para o seu dia a dia
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto text-white opacity-80">
            O Health Plus foi pensado para caber na sua rotina - simples, motivador e recompensador.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <div className="flex flex-col items-center text-center p-8 rounded-3xl gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            style={{ backgroundColor: '#f5f9f7'}}>
            <div className="p-4 rounded-2xl" style={{ backgroundColor: '#1c9770' }}>
              <Leaf size={32} color="white" />
            </div>
            <h3 className="text-xl font-bold" style={{color: 'var(--text-dark)'}}>
              Hábitos Diários
            </h3>
            <p style={{ color: 'var(--text-muted)'}}>
              Missões simples e objetivas que cabem na sua rotina sem gerar pressão ou sobrecarga.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-8 rounded-3xl gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            style={{ backgroundColor: '#f5f9f7'}}>
            <div className="p-4 rounded-2xl" style={{ backgroundColor: '#1c9770' }}>
              <Trophy size={32} color="white" />
            </div>
            <h3 className="text-xl font-bold" style={{color: 'var(--text-dark)'}}>
              Recompensas Reais
            </h3>
            <p style={{ color: 'var(--text-muted)'}}>
              Ganhe diamantes a cada conquista e troque por benefícios reais do seu plano de saúde.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-8 rounded-3xl gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            style={{ backgroundColor: '#f5f9f7'}}>
            <div className="p-4 rounded-2xl" style={{ backgroundColor: '#1c9770' }}>
              <Users size={32} color="white" />
            </div>
            <h3 className="text-xl font-bold" style={{color: 'var(--text-dark)'}}>
              Saúde em Grupo
            </h3>
            <p style={{ color: 'var(--text-muted)'}}>
              Crie ciclos com amigos, acompanhe conquistas coletivas e evolua junto sem competição tóxica.
            </p>
          </div>

        </div>

      </section>

      <section id="como-funciona" className="py-20 px-6 md:px-24 bg-white">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--text-dark)'}}
          >
            Como o Health Plus funciona?
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
          Uma jornada simples, motivadora e pensada para o seu dia a dia.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-0 max-w-6xl mx-auto">

          {[
            { icon: <UserPlus size={28} color="white" />, titulo: "Crie seu perfil", desc: "Cadastre-se, faça o onboarding e configure seus hábitos iniciais do seu jeito.", cor: "#1c9770" },
            { icon: <ClipboardList size={28} color="white" />, titulo: "Receba suas missões", desc: "Missões diárias simples e objetivas aparecem todo dia pra você.", cor: "#7AD1C3" },
            { icon: <CheckCircle size={28} color="white" />, titulo: "Complete e registre", desc: "Marque seus hábitos como concluídos e receba feedback visual na hora.", cor: "#93CB52" },
            { icon: <Gem size={28} color="white" />, titulo: "Ganhe diamantes", desc: "Cada missão cumprida gera recompensas que você troca por benefícios reais.", cor: "#1c9770" },
            { icon: <Sprout size={28} color="white" />, titulo: "Veja sua planta crescer", desc: "Sua consistência vira evolução visual — desbloqueie novas plantas e monte seu jardim.", cor: "#7AD1C3" },
            { icon: <Bot size={28} color="white" />, titulo: "Conte com a Bloom", desc: "Sua assistente virtual te acompanha com mensagens leves, incentivos e cuidado diário.", cor: "#93CB52" },
          ].map((passo, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center flex-1">

              <div className="flex flex-col items-center text-center gap-3 p-6 flex-1">
                <div className="relative">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: passo.cor }}
                  >
                    {passo.icon}
                  </div>

                </div>

                <h3 className="text-base font-bold mt-2" style={{ color: 'var(--text-dark)' }}>
                  {passo.titulo}
                </h3>
                <p className="text-sm leading-relaxed max-w-40" style={{ color: 'var(--text-muted)' }}>
                  {passo.desc}
                </p>
              </div>
              {index < 5 && (
                <div
                  className="hidden md:block h-0.5 w-8 shrink-0"
                  style={{ backgroundColor: '#7AD1C3' }}
                />
              )}

            </div>
          ))}

          </div>
      </section>

      <section id="chaveiro" className="py-20 px-6 md:px-24 bg-[#f5f9f7]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="flex flex-col items-center md:items-start gap-6 flex-1 text-center md:text-left">

            <span
              className="text-sm font-bold tracking-widest uppercase px-4 py-1 rounded-full"
              style={{ backgroundColor: '#7AD1C3', color: 'var(--text-dark)' }}
            >
              Novidade
            </span>

            <h2
              className="text-3xl md:text-4xl font-black leading-tight"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--text-dark)' }}
            >
              Leve sua saúde<br />para onde for
            </h2>

            <p className="text-base md:text-lg max-w-md leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              O Chaveiro Inteligente é a extensão física do Health Plus. Com um conta-passos integrado, 
              sua plantinha evolui conforme você se movimenta — mesmo longe do celular. Inspirado nos 
              Tamagotchis, ele mantém você conectado à sua jornada de saúde o dia todo.
            </p>

            <div className="flex flex-col gap-4 w-full max-w-md">
              {[
                { icon: <Footprints size={20} color="white" />, texto: "Conta-passos integrado que alimenta sua planta" },
                { icon: <Sprout size={20} color="white" />, texto: "Plantinha evolui com sua movimentação diária" },
                { icon: <Bell size={20} color="white" />, texto: "Lembretes sutis ao longo do dia" },
                { icon: <Wifi size={20} color="white" />, texto: "Sincroniza com o app em tempo real" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: '#1c9770' }}
                  >
                    {item.icon}
                  </div>
                  <p className="text-base font-medium" style={{ color: 'var(--text-dark)' }}>
                    {item.texto}
                  </p>
                </div>
              ))}
            </div>

          </div>

          <div className="flex items-center justify-center flex-1">
            <svg
              viewBox="0 0 280 320"
              xmlns="http://www.w3.org/2000/svg"
              className="w-64 md:w-72 lg:w-80 drop-shadow-2xl"
              style={{ animation: 'float 4s ease-in-out infinite' }}
            >
              {/* Cordão */}
              <path d="M140 10 Q160 30 155 55" stroke="#1c9770" strokeWidth="4" fill="none" strokeLinecap="round"/>
              <circle cx="155" cy="58" r="5" fill="#1c9770"/>

              {/* Corpo do chaveiro */}
              <rect x="60" y="60" width="160" height="190" rx="40" ry="40" fill="#1c9770"/>
              <rect x="68" y="68" width="144" height="174" rx="34" ry="34" fill="#0d7a58"/>

              {/* Tela */}
              <rect x="80" y="85" width="120" height="110" rx="16" ry="16" fill="#f0faf5"/>
              <rect x="85" y="90" width="110" height="100" rx="12" ry="12" fill="#e0f5ec"/>

              {/* Planta dentro da tela */}
              {/* Vaso */}
              <path d="M118 175 Q118 185 140 187 Q162 185 162 175 Z" fill="#1c9770"/>
              <path d="M115 168 Q115 178 140 180 Q165 178 165 168 Z" fill="#7AD1C3"/>

              {/* Caule */}
              <line x1="140" y1="168" x2="140" y2="130" stroke="#1c9770" strokeWidth="3" strokeLinecap="round"/>

              {/* Folhas */}
              <path d="M140 155 Q120 145 115 125 Q133 132 140 148" fill="#93CB52"/>
              <path d="M140 145 Q160 135 165 115 Q147 122 140 138" fill="#1c9770"/>

              {/* Florzinha */}
              <circle cx="140" cy="118" r="12" fill="#93CB52"/>
              <circle cx="140" cy="118" r="7" fill="#1c9770"/>
              <circle cx="140" cy="118" r="3" fill="#7AD1C3"/>

              {/* Pétalas florzinha */}
              <ellipse cx="140" cy="104" rx="5" ry="8" fill="#93CB52" opacity="0.8"/>
              <ellipse cx="140" cy="132" rx="5" ry="8" fill="#93CB52" opacity="0.8"/>
              <ellipse cx="126" cy="118" rx="8" ry="5" fill="#93CB52" opacity="0.8"/>
              <ellipse cx="154" cy="118" rx="8" ry="5" fill="#93CB52" opacity="0.8"/>

              {/* Passos / conta-passos */}
              <text x="88" y="105" fontSize="9" fill="#1c9770" fontWeight="bold" fontFamily="sans-serif">👟 247 passos</text>

              {/* Botões inferiores */}
              <circle cx="105" cy="220" r="12" fill="#7AD1C3"/>
              <circle cx="140" cy="225" r="14" fill="#93CB52"/>
              <circle cx="175" cy="220" r="12" fill="#7AD1C3"/>

              {/* Ícones nos botões */}
              <text x="99" y="225" fontSize="10" fill="white" fontWeight="bold" fontFamily="sans-serif">←</text>
              <text x="134" y="231" fontSize="12" fill="white" fontWeight="bold" fontFamily="sans-serif">OK</text>
              <text x="169" y="225" fontSize="10" fill="white" fontWeight="bold" fontFamily="sans-serif">→</text>

            </svg>
          </div>

        </div>
      </section>

      <section id="bloom" className="py-20 px-6 md:px-24 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="flex items-center justify-center flex-1">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full scale-110"
                style={{ backgroundColor: '#f0faf5' }}
              />
              <img
                src={bloom}
                alt="Bloom, assistente virtual do Health Plus"
                className="relative w-64 md:w-72 lg:w-80 rounded-full object-cover shadow-2xl"
                style={{ border: '6px solid #7AD1C3' }}
              />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-6 flex-1 text-center md:text-left">

            <span
              className="text-sm font-bold tracking-widest uppercase px-4 py-1 rounded-full"
              style={{ backgroundColor: '#7AD1C3', color: 'var(--text-dark)' }}
            >
              Assistente Virtual
            </span>

            <h2
              className="text-3xl md:text-4xl font-black leading-tight"
              style={{ fontFamily: 'Playfair Display, serif', color: 'var(--text-dark)' }}
            >
              Conheça a Bloom,<br />sua companheira de saúde
            </h2>

            <p className="text-base md:text-lg max-w-md leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              A Bloom é a assistente virtual do Health Plus. Com uma comunicação leve, 
              empática e nunca punitiva, ela te acompanha todos os dias com incentivos, 
              sugestões de cuidados preventivos e alertas carinhosos quando você precisar.
            </p>

            <div className="flex flex-col gap-4 w-full max-w-md">
              {[
                { icon: <MessageCircle size={20} color="white" />, texto: "Mensagens diárias de incentivo e cuidado" },
                { icon: <ShieldCheck size={20} color="white" />, texto: "Sugestões de cuidados preventivos personalizados" },
                { icon: <Sparkles size={20} color="white" />, texto: "Comunicação acolhedora, leve e sem julgamentos" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: '#1c9770' }}
                  >
                    {item.icon}
                  </div>
                  <p className="text-base font-medium" style={{ color: 'var(--text-dark)' }}>
                    {item.texto}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      <section id="gamificacao" className="py-20 px-6 md:px-24" style={{ backgroundColor: '#1c9770' }}>

        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-black mb-4 text-white"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Cada hábito conta.<br />Cada conquista importa.
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto text-white opacity-80">
            O Health Plus transforma seu autocuidado em uma experiência cheia de recompensas, evolução e conquistas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">

          {[
            { icon: <Sprout size={32} color="#1c9770" />, titulo: "Planta & Jardim", desc: "Evolua sua planta com consistência e desbloqueie novas espécies para montar seu jardim.", bg: "#7AD1C3" },
            { icon: <Gem size={32} color="#1c9770" />, titulo: "Diamantes", desc: "Acumule diamantes completando missões e troque por benefícios reais do seu plano.", bg: "#7AD1C3" },
            { icon: <ClipboardList size={32} color="#1c9770" />, titulo: "Missões Diárias", desc: "Desafios simples e objetivos que cabem na sua rotina sem gerar pressão.", bg: "#7AD1C3" },
            { icon: <Users size={32} color="#1c9770" />, titulo: "Ciclos", desc: "Crie grupos com amigos, acompanhe conquistas coletivas e evolua junto sem competição tóxica.", bg: "#7AD1C3" },
          ].map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-3xl gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ backgroundColor: card.bg }}
            >
              <div
                className="p-4 rounded-2xl"
                style={{ backgroundColor: 'white' }}
              >
                {card.icon}
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--text-dark)' }}>
                {card.titulo}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {card.desc}
              </p>
            </div>
          ))}

        </div>

      </section>

      <section id="cta" className="py-24 px-6 md:px-24 bg-[#f5f9f7]">
        <div className="flex flex-col items-center text-center gap-8 max-w-2xl mx-auto">

          <div
            className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
            style={{ backgroundColor: '#1c9770' }}
          >
            <Sprout size={40} color="white" />
          </div>

          <h2
            className="text-4xl md:text-5xl font-black leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: 'var(--text-dark)' }}
          >
            Pronto para florescer?
          </h2>

          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Comece sua jornada com o Health Plus hoje mesmo. 
            Cuide dos seus hábitos, evolua sua planta e transforme 
            o autocuidado em algo prazeroso e recompensador.
          </p>

        </div>
      </section>
      
    </main>
  )
}

export default Home