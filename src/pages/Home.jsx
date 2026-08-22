import React from 'react';
import Atmosphere from '../components/Atmosphere';
import NavBar from '../components/NavBar';

function handleMapClick() {
  if (window.location.hash === '#mapa-cards') {
    document.getElementById('funciona')?.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  window.location.hash = 'mapa-cards';
}

export default function Home() {
  const trilhas = [
    { id: 1, nome: 'Comer', achados: '6 achados', bg: 'bg-mapa-orange' },
    { id: 2, nome: 'Beber', achados: '6 achados', bg: 'bg-mapa-blue' },
    { id: 3, nome: 'Ver', achados: '6 achados', bg: 'bg-mapa-green' },
    { id: 4, nome: 'Ouvir', achados: '6 achados', bg: 'bg-mapa-cyan' },
  ];

  return (
    <div className="home-shell min-h-screen bg-mapa-bg text-mapa-dark font-sans antialiased overflow-x-hidden relative">
      <Atmosphere />
      <NavBar />

      <section id="mapa" className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 sm:pt-12 pb-16 sm:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

        <div className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-left-12 duration-1000 fill-mode-forwards">
          <span className="inline-block bg-mapa-green text-mapa-dark font-black text-sm uppercase tracking-wider px-6 py-2.5 rounded-full border-3 border-mapa-dark shadow-[3px_3px_0px_0px_#121212]">
            FEITO POR QUEM MORA AQUI
          </span>

          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black leading-[0.95] text-mapa-dark tracking-tight">
            Os melhores <br />
            lugares <br />
            <span className="text-mapa-orange">não estão no Google.</span>
          </h1>

          <p className="text-gray-800 font-bold text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed">
            Um mapa colaborativo de becos, botecos, feiras e cantos que só aparecem quando alguém te conta. Sem patrocínio, sem fila de turista.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button type="button" onClick={handleMapClick} className="bg-mapa-blue hover:scale-105 active:scale-95 text-white font-black text-lg px-10 py-5 rounded-full border-4 border-mapa-dark shadow-[6px_6px_0px_0px_#121212] transition-all cursor-pointer">
              Abrir o mapa
            </button>
            <span className="text-sm font-black text-gray-500 uppercase tracking-widest">
              +24 achados · 1 cidade
            </span>
          </div>
        </div>

        <div className="hidden sm:flex lg:col-span-5 justify-center lg:justify-end animate-in fade-in zoom-in-75 duration-1000 delay-300 fill-mode-forwards relative z-10">
          <div className="animate-float bg-mapa-yellow border-4 border-mapa-dark rounded-[40px] sm:rounded-[56px] p-5 sm:p-8 md:p-10 w-full max-w-lg aspect-square flex items-center justify-center relative shadow-[8px_8px_0px_0px_#121212] sm:shadow-[12px_12px_0px_0px_#121212]">

            <div className="border-4 border-mapa-dark rounded-[36px] w-full h-full overflow-hidden bg-white flex items-center justify-center p-4">
              <img
                src="/cidade.png"
                alt="Mapa Secreto"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute -bottom-5 left-4 sm:-bottom-6 sm:left-8 bg-white border-4 border-mapa-dark px-4 sm:px-6 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm lg:text-base font-black -rotate-2 shadow-[4px_4px_0px_0px_#121212] z-20">
              "X marca o boteco."
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-5 flex border-y-3 border-mapa-dark">
        <div className="flex-1 bg-mapa-orange"></div>
        <div className="flex-1 bg-mapa-yellow"></div>
        <div className="flex-1 bg-mapa-cyan"></div>
        <div className="flex-1 bg-mapa-blue"></div>
        <div className="flex-1 bg-mapa-green"></div>
      </div>

      <section id="funciona" className="w-full bg-mapa-dark-green text-white py-12 sm:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black max-w-2xl leading-tight tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700">
            Quatro trilhas, uma cidade inteira escondida.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {trilhas.map((trilha, index) => (
              <button
                key={trilha.id}
                type="button"
                onClick={() => { window.location.hash = trilha.nome.toLowerCase(); }}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
                className={`${trilha.bg} text-mapa-dark border-4 border-mapa-dark rounded-3xl p-5 sm:p-8 shadow-[5px_5px_0px_0px_#121212] hover:-translate-y-2 hover:scale-105 transition-all cursor-pointer flex flex-col justify-between min-h-36 sm:h-48 animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-forwards`}
              >
                <h3 className="font-black text-3xl sm:text-4xl leading-none">{trilha.nome}</h3>
                <span className="text-sm font-black uppercase tracking-wider opacity-90">
                  {trilha.achados}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="quem-somos" className="w-full min-h-[35vh] sm:min-h-[45vh] bg-mapa-cyan px-4 sm:px-8 py-12 sm:py-20 text-mapa-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 animate-in fade-in slide-in-from-left-10 duration-700">
            <span className="inline-block bg-mapa-yellow px-5 py-2 border-3 border-mapa-dark rounded-full font-black text-xs uppercase tracking-widest shadow-[3px_3px_0px_0px_#121212]">
              Quem somos?
            </span>
            <h2 className="mt-5 sm:mt-7 text-3xl sm:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight">
              A cidade fica melhor quando a gente compartilha.
            </h2>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:pt-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-forwards">
            <div className="border-l-4 border-mapa-orange pl-6 space-y-4">
              <h3 className="text-2xl font-black">Por que existe?</h3>
              <p className="text-gray-700 font-bold text-base sm:text-lg leading-relaxed">
                Criado como um projeto prático no programa Jovem Aprendiz da ESPRO, o mapa nasce para valorizar os pequenos comércios e cantos esquecidos da cidade. Acreditamos que os lugares mais especiais não aparecem nos primeiros resultados das grandes buscas, mas sim na indicação de quem vive o dia a dia do bairro.
              </p>
            </div>

            <div className="border-l-4 border-mapa-blue pl-6 space-y-4">
              <h3 className="text-2xl font-black">Quem faz o mapa?</h3>
              <p className="text-gray-700 font-bold text-base sm:text-lg leading-relaxed">
                Gente que mora, circula e presta atenção. Uma equipe de jovens aprendizes dividida entre gestão, pesquisa, design e tecnologia. Unimos nossas diferentes áreas e visões para construir uma plataforma colaborativa, sem fins lucrativos, focada em aproximar as pessoas de uma cidade mais autêntica e acessível.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-[45vh] sm:min-h-[55vh] bg-mapa-yellow border-t-4 border-mapa-dark px-4 sm:px-8 pt-12 sm:pt-20 pb-24 sm:pb-36 text-mapa-dark">
        <div className="max-w-7xl mx-auto flex min-h-[34vh] sm:min-h-[40vh] flex-col justify-between gap-8 sm:gap-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="lg:col-span-8">
              <p className="font-black text-sm uppercase tracking-[0.2em]">Créditos do mapa</p>
              <h2 className="mt-4 max-w-4xl text-3xl sm:text-5xl md:text-7xl font-black leading-[0.9] tracking-tight">
                Feito com cuidado, conversa e vontade de mostrar a cidade por inteiro.
              </h2>
            </div>
            <p className="lg:col-span-4 text-base sm:text-lg font-bold leading-relaxed lg:pb-2">
              Cada achado nasce de uma indicação. Cada indicação ajuda a manter vivos os lugares que fazem uma cidade ser dela mesma.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 border-y-4 border-mapa-dark py-8 animate-in fade-in duration-700 delay-200 fill-mode-forwards">
            <div>
              <p className="text-xs font-black uppercase tracking-widest">Curadoria</p>
              <p className="mt-2 text-base sm:text-xl font-black">Seleção e Design de Experiência</p>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest">Pesquisa</p>
              <p className="mt-2 text-base sm:text-xl font-black">Mídia & Conteúdo</p>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest">Construção</p>
              <p className="mt-2 text-base sm:text-xl font-black">Planejamento e Gestão do Projeto</p>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest">Tecnologia</p>
              <p className="mt-2 text-base sm:text-xl font-black">Desenvolvimento e Programação</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
            <p className="font-logo text-4xl font-black">Mapa Secreto</p>
            <p className="max-w-md text-sm font-black uppercase tracking-wider sm:text-right">
              Um projeto independente para quem prefere descobrir do que passar direto.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}