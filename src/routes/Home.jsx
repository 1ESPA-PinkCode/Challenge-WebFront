import React from 'react'

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

    </main>
  )
}

export default Home
