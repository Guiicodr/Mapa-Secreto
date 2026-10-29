import React from 'react';
import Atmosphere from '../components/Atmosphere';
import NavBar from '../components/NavBar';

function scrollToTrails() {
  document.getElementById('funciona')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Home() {
  const trilhas = [
    { id: 1, nome: 'Comer', achados: '7 achados', bg: 'bg-mapa-orange' },
    { id: 2, nome: 'Beber', achados: '6 achados', bg: 'bg-mapa-blue' },
    { id: 3, nome: 'Ver', achados: '9 achados', bg: 'bg-mapa-green' },
    { id: 4, nome: 'Ouvir', achados: '7 achados', bg: 'bg-mapa-cyan' },
  ];

  return (
    <div className="home-shell min-h-screen bg-mapa-bg text-mapa-dark font-sans antialiased overflow-x-hidden relative">
      <Atmosphere />
      <NavBar />

      <section id="mapa" className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 pb-12 pt-6 sm:gap-10 sm:px-8 sm:pb-24 sm:pt-12 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-6 animate-in fade-in slide-in-from-left-12 duration-1000 fill-mode-forwards sm:col-span-1 sm:space-y-8 lg:col-span-7">
          <span className="inline-block rounded-full border-3 border-mapa-dark bg-mapa-green px-3 py-2 text-center text-[10px] font-black uppercase tracking-wide text-mapa-dark shadow-[3px_3px_0px_0px_#121212] sm:px-6 sm:py-2.5 sm:text-sm sm:tracking-wider">
            DESCUBRA A CIDADE POR OUTRO ÂNGULO
          </span>

          <h1 className="max-w-4xl text-[clamp(2.75rem,12vw,4.5rem)] font-black leading-[0.94] tracking-tight text-mapa-dark sm:text-7xl lg:text-8xl">
            Encontre seu próximo lugar{' '}
            <span className="text-mapa-orange">favorito.</span>
          </h1>

          <p className="max-w-xl text-[15px] font-bold leading-relaxed text-gray-800 sm:text-lg lg:text-xl">
            Uma curadoria de lugares especiais em São Paulo e região. Explore nossas trilhas e descubra novos cantos para comer, beber, ver e ouvir.
          </p>

          <div className="flex flex-col items-stretch gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 sm:pt-4">
            <button type="button" onClick={scrollToTrails} className="inline-flex min-h-14 w-full items-center justify-center rounded-full border-4 border-mapa-dark bg-mapa-blue px-6 py-4 text-base font-black text-white shadow-[5px_5px_0px_0px_#121212] transition-all hover:scale-105 active:scale-95 sm:w-auto sm:px-10 sm:py-5 sm:text-lg sm:shadow-[6px_6px_0px_0px_#121212]">
              Explorar a cidade
            </button>
            <span className="text-center text-xs font-black uppercase tracking-widest text-gray-600 sm:text-left sm:text-sm">
              4 trilhas para descobrir
            </span>
          </div>
        </div>

        <div className="relative z-10 flex w-full justify-center animate-in fade-in zoom-in-75 duration-1000 delay-300 fill-mode-forwards lg:col-span-5 lg:justify-end">
          <div className="relative flex aspect-square w-full max-w-[21rem] items-center justify-center rounded-[2rem] border-4 border-mapa-dark bg-mapa-yellow p-3 shadow-[6px_6px_0px_0px_#121212] sm:max-w-lg sm:rounded-[56px] sm:p-8 sm:shadow-[12px_12px_0px_0px_#121212] md:p-10">
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[1.5rem] border-4 border-mapa-dark bg-white p-3 sm:rounded-[36px] sm:p-4">
              <img
                src="/cidade.png"
                alt="Mapa Secreto"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute -bottom-3 left-3 z-20 max-w-[calc(100%-1.5rem)] -rotate-2 rounded-xl border-3 border-mapa-dark bg-white px-3 py-2 text-[11px] font-black shadow-[3px_3px_0px_0px_#121212] sm:-bottom-6 sm:left-8 sm:max-w-none sm:rounded-2xl sm:border-4 sm:px-6 sm:py-2.5 sm:text-sm sm:shadow-[4px_4px_0px_0px_#121212] lg:text-base">
              Um mapa de boas aventuras!
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

      <section id="funciona" className="w-full bg-mapa-dark-green px-4 py-12 text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-8 sm:space-y-16">
          <h2 className="max-w-2xl text-[clamp(1.75rem,7vw,3rem)] font-black leading-tight tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 sm:text-5xl lg:text-6xl">
            Quatro trilhas, uma cidade inteira escondida.
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {trilhas.map((trilha, index) => (
              <button
                key={trilha.id}
                type="button"
                onClick={() => { window.location.hash = trilha.nome.toLowerCase(); }}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
                className={`${trilha.bg} flex min-h-36 flex-col justify-between rounded-2xl border-3 border-mapa-dark p-4 text-left text-mapa-dark shadow-[4px_4px_0px_0px_#121212] transition-all focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-mapa-yellow sm:h-48 sm:rounded-3xl sm:border-4 sm:p-8 sm:shadow-[5px_5px_0px_0px_#121212] sm:hover:-translate-y-2 sm:hover:scale-105`}
              >
                <h3 className="text-2xl font-black leading-none sm:text-4xl">{trilha.nome}</h3>
                <span className="text-[10px] font-black uppercase tracking-wide opacity-90 sm:text-sm sm:tracking-wider">
                  {trilha.achados}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="quem-somos" className="w-full bg-mapa-cyan px-4 py-12 text-mapa-dark sm:min-h-[45vh] sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5 animate-in fade-in slide-in-from-left-10 duration-700">
            <span className="inline-block rounded-full border-3 border-mapa-dark bg-mapa-yellow px-4 py-2 text-xs font-black uppercase tracking-widest shadow-[3px_3px_0px_0px_#121212] sm:px-5">
              Quem somos?
            </span>
            <h2 className="mt-5 text-[clamp(1.875rem,8vw,3rem)] font-black leading-[0.98] tracking-tight sm:mt-7 sm:text-5xl lg:text-6xl">
              A cidade fica melhor quando a gente compartilha.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-forwards sm:grid-cols-2 sm:gap-6 lg:col-span-7 lg:gap-10 lg:pt-12">
            <div className="space-y-3 rounded-2xl border-2 border-t-4 border-mapa-orange bg-white/75 p-4 shadow-[3px_3px_0px_0px_#121212] sm:space-y-4 sm:rounded-none sm:border-0 sm:border-l-4 sm:bg-transparent sm:p-0 sm:pl-6 sm:shadow-none">
              <h3 className="text-xl font-black sm:text-2xl">Por que existe?</h3>
              <p className="text-sm font-bold leading-relaxed text-gray-700 sm:text-lg">
                Criado como um projeto prático no programa Jovem Aprendiz da ESPRO, o mapa nasce para valorizar os pequenos comércios e cantos esquecidos da cidade. Acreditamos que os lugares mais especiais não aparecem nos primeiros resultados das grandes buscas, mas sim na indicação de quem vive o dia a dia do bairro.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border-2 border-t-4 border-mapa-blue bg-white/75 p-4 shadow-[3px_3px_0px_0px_#121212] sm:space-y-4 sm:rounded-none sm:border-0 sm:border-l-4 sm:bg-transparent sm:p-0 sm:pl-6 sm:shadow-none">
              <h3 className="text-xl font-black sm:text-2xl">Quem faz o mapa?</h3>
              <p className="text-sm font-bold leading-relaxed text-gray-700 sm:text-lg">
                Gente que mora, circula e presta atenção. Uma equipe de jovens aprendizes dividida entre gestão, pesquisa, design e tecnologia. Unimos nossas diferentes áreas e visões para construir uma plataforma colaborativa, sem fins lucrativos, focada em aproximar as pessoas de uma cidade mais autêntica e acessível.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-t-4 border-mapa-dark bg-mapa-yellow px-4 pb-16 pt-12 text-mapa-dark sm:min-h-[55vh] sm:px-8 sm:pb-36 sm:pt-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:min-h-[40vh] sm:gap-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="lg:col-span-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] sm:text-sm">Créditos do mapa</p>
              <h2 className="mt-4 max-w-4xl text-[clamp(1.875rem,8vw,3rem)] font-black leading-[0.94] tracking-tight sm:text-5xl md:text-7xl">
                Feito com cuidado, conversa e vontade de mostrar a cidade por inteiro.
              </h2>
            </div>
            <div className="lg:col-span-4 space-y-4">
              <p className="text-base sm:text-lg font-bold leading-relaxed lg:pb-2">
                Cada achado nasce de uma indicação. Cada indicação ajuda a manter vivos os lugares que fazem uma cidade ser dela mesma.
              </p>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`Vamos descobrir novos lugares? ${window.location.href}`)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 font-black underline underline-offset-4 hover:text-mapa-blue"
              >
                Compartilhar com a família <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-7 border-y-4 border-mapa-dark py-6 animate-in fade-in duration-700 delay-200 fill-mode-forwards sm:gap-x-6 sm:gap-y-10 sm:py-8 lg:grid-cols-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest sm:text-xs">Curadoria</p>
              <p className="mt-2 text-sm font-black sm:text-xl">Seleção e Design de Experiência</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest sm:text-xs">Pesquisa</p>
              <p className="mt-2 text-sm font-black sm:text-xl">Mídia & Conteúdo</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest sm:text-xs">Construção</p>
              <p className="mt-2 text-sm font-black sm:text-xl">Planejamento e Gestão do Projeto</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest sm:text-xs">Tecnologia</p>
              <p className="mt-2 text-sm font-black sm:text-xl">Desenvolvimento e Programação</p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-5">
            <p className="font-logo text-3xl font-black sm:text-4xl">Mapa Secreto</p>
            <p className="max-w-md text-[10px] font-black uppercase tracking-wider sm:text-right sm:text-sm">
              Um projeto independente para quem prefere descobrir do que passar direto.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}