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

          <div className="flex flex-row flex-wrap justify-center md:justify-start gap-4">

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

        <div className="flex items-center justify-center flex-1">

        </div>

      </section>

    </main>
  )
}

export default Home
