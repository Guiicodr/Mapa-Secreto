import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import PlaceCard from '../components/PlaceCard';

const LOCAIS = [
  {
    id: 1,
    title: 'Beco do Batman',
    category: 'Arte urbana',
    perfil: 'Noturno',
    neighborhood: 'Vila Madalena',
    description: 'Um labirinto de vielas cobertas de grafite com iluminação noturna e clima boêmio.',
    mapQuery: 'Beco do Batman, São Paulo'
  },
  {
    id: 2,
    title: 'Bar dos Arcos',
    category: 'Vida Noturna',
    perfil: 'Noturno',
    neighborhood: 'Centro',
    description: 'Bar subterrâneo instalado sob os arcos do Theatro Municipal com balcões iluminados.',
    mapQuery: 'Bar dos Arcos, São Paulo'
  },
  {
    id: 3,
    title: 'Parque Buenos Aires',
    category: 'Natureza',
    perfil: 'Infantil',
    neighborhood: 'Higienópolis',
    description: 'Parque seguro e plano, com parquinho infantil e muito espaço ao ar livre.',
    mapQuery: 'Parque Buenos Aires, São Paulo'
  },
  {
    id: 4,
    title: 'Cemitério da Consolação',
    category: 'História',
    perfil: 'Família',
    neighborhood: 'Consolação',
    description: 'Passeio histórico guiado em família em meio a esculturas e túmulos de época.',
    mapQuery: 'Cemitério da Consolação, São Paulo'
  },
  {
    id: 5,
    title: 'Mirante do SESC Avenida Paulista',
    category: 'História',
    perfil: 'Família',
    neighborhood: 'Bela Vista',
    description: 'Vista panorâmica do topo da avenida mais famosa da cidade com café e espaço cultural.',
    mapQuery: 'SESC Avenida Paulista, São Paulo'
  },
  {
    id: 6,
    title: 'Cine Joia',
    category: 'Vida Noturna',
    perfil: 'Noturno',
    neighborhood: 'Liberdade',
    description: 'Antigo cinema oriental transformado em casa de shows com projeções mapeadas.',
    mapQuery: 'Cine Joia, São Paulo'
  },
  {
    id: 7,
    title: 'Catavento Museu das Ciências',
    category: 'Natureza',
    perfil: 'Infantil',
    neighborhood: 'Brás',
    description: 'Museu interativo de ciências com experimentos, borboletário e atrações para todas as idades.',
    mapQuery: 'Museu Catavento, São Paulo'
  },
  {
    id: 8,
    title: 'Praça Pôr do Sol',
    category: 'Natureza',
    perfil: 'Família',
    neighborhood: 'Alto de Pinheiros',
    description: 'Ponto de encontro clássico para relaxar no gramado e assistir ao fim de tarde.',
    mapQuery: 'Praca Por do Sol, São Paulo'
  }
];

const CATEGORIAS = ['Todas', 'Arte urbana', 'Vida Noturna', 'História', 'Natureza'];

export default function Home() {
  const [busca, setBusca] = useState('');
  const [perfilAtivo, setPerfilAtivo] = useState('Todos');
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas');
  const [bgAnimation, setBgAnimation] = useState('bg-fade-in');

  const trocarPerfil = (novoPerfil) => {
    if (novoPerfil === perfilAtivo) return;

    setBgAnimation('bg-fade-out');

    setTimeout(() => {
      setPerfilAtivo(novoPerfil);
      setBgAnimation('bg-fade-in');
    }, 200);
  };

  const locaisFiltrados = LOCAIS.filter(local => {
    const batePerfil = perfilAtivo === 'Todos' || local.perfil === perfilAtivo;
    const bateCategoria = categoriaAtiva === 'Todas' || local.category === categoriaAtiva;
    const bateBusca = local.title.toLowerCase().includes(busca.toLowerCase()) ||
      local.neighborhood.toLowerCase().includes(busca.toLowerCase());
    return batePerfil && bateCategoria && bateBusca;
  });

  const getThemeBackground = () => {
    switch (perfilAtivo) {
      case 'Noturno':
        return {
          bgColor: 'bg-[#090b10]',
          gradient: 'bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(147,51,234,0.25),transparent)]',
          heroText: 'text-purple-400',
          title: 'A cidade após o pôr do sol'
        };
      case 'Infantil':
        return {
          bgColor: 'bg-[#0f1d17]',
          gradient: 'bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.25),transparent)]',
          heroText: 'text-emerald-400',
          title: 'Aventuras para os pequenos'
        };
      case 'Família':
        return {
          bgColor: 'bg-[#1a1510]',
          gradient: 'bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(245,158,11,0.25),transparent)]',
          heroText: 'text-amber-300',
          title: 'Roteiros calmos & culturais'
        };
      default:
        return {
          bgColor: 'bg-[#14171c]',
          gradient: 'bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(204,204,41,0.15),transparent)]',
          heroText: 'text-[#cccc29]',
          title: 'Lugares que o guia esqueceu'
        };
    }
  };

  const theme = getThemeBackground();

  return (
    <div className="min-h-screen text-[#ece7da] relative bg-[#14171c] overflow-hidden">

      {/* FUNDO SIMPLES COM FADE */}
      <div className={`bg-carousel-container ${theme.bgColor}`}>
        <div className={`w-full h-full relative transition-all ${bgAnimation}`}>
          <div className={`absolute inset-0 ${theme.gradient}`} />
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10">
        <Navbar perfilAtivo={perfilAtivo} setPerfilAtivo={trocarPerfil} />

        <header className="relative min-h-[50vh] flex flex-col justify-center items-center text-center px-8 py-16">
          <p className={`font-mono text-sm md:text-base uppercase tracking-[0.2em] ${theme.heroText} mb-6 font-medium transition-colors duration-300`}>
            Perfil Selecionado: {perfilAtivo}
          </p>

          <h1 className="font-serif italic font-semibold text-7xl md:text-9xl leading-none text-[#efe7d3] mb-6">
            Mapa<br />
            <span className={`not-italic font-light text-base md:text-2xl tracking-[0.3em] uppercase ${theme.heroText} font-mono block mt-5 transition-colors duration-300`}>
              {theme.title}
            </span>
          </h1>
        </header>

        <main className="max-w-7xl mx-auto px-8 py-12" id="pontos">
          {/* BARRA SUPERIOR DE INFORMAÇÕES E BUSCA */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8 mb-8 border-b border-white/10">
            <div>
              <h2 className="font-serif italic text-4xl md:text-5xl text-[#efe7d3]">
                O arquivo
              </h2>
              <span className="font-mono text-sm text-gray-400 block mt-2">
                {locaisFiltrados.length} locais encontrados ({perfilAtivo})
              </span>
            </div>

            <input
              type="text"
              placeholder="Buscar por nome ou bairro..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="bg-[#1b1f26]/90 border border-white/20 rounded-md px-5 py-3 font-mono text-sm text-[#efe7d3] focus:outline-none focus:border-[#cccc29] w-full md:w-80 backdrop-blur-sm"
            />
          </div>

          {/* FILTROS DE CATEGORIA */}
          <div className="flex gap-3 flex-wrap mb-12">
            {CATEGORIAS.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaAtiva(cat)}
                className={`font-mono text-xs md:text-sm uppercase px-4 py-2.5 rounded-full transition-all cursor-pointer ${categoriaAtiva === cat
                    ? 'bg-white/20 text-white font-bold shadow-md border border-white/30 backdrop-blur-sm'
                    : 'bg-[#1b1f26]/80 text-gray-300 border border-white/10 hover:border-white/30'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID DE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locaisFiltrados.map((local) => (
              <PlaceCard key={local.id} {...local} />
            ))}

            <div className="bg-[#1b1f26]/60 border-2 border-dashed border-white/20 rounded-sm p-8 flex flex-col justify-center items-center text-center hover:border-white/50 transition-colors min-h-[350px]">
              <h3 className="font-serif text-2xl text-[#efe7d3] mb-2">Conhece um lugar secreto?</h3>
              <p className="font-mono text-sm text-gray-400 mb-6">
                Envie uma indicação para incluir no mapa.
              </p>
              <button
                onClick={() => alert("Em breve: formulário de envio!")}
                className="font-mono text-xs md:text-sm text-[#cccc29] border border-[#cccc29]/50 px-5 py-2.5 rounded hover:bg-[#cccc29]/10 transition-colors cursor-pointer font-semibold"
              >
                + Sugerir Novo Local
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}