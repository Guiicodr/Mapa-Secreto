import React from 'react';

const PERFIS = [
    { id: 'Todos', label: 'Todos os Perfis' },
    { id: 'Família', label: '👨‍👩‍👧 Família' },
    { id: 'Infantil', label: '🎈 Infantil' },
    { id: 'Noturno', label: '🌙 Noturno' },
];

export default function Navbar({ perfilAtivo, setPerfilAtivo }) {
    return (
        <nav className="sticky top-0 z-50 bg-[#14171c]/90 backdrop-blur-md border-b border-white/10 px-8 py-5 shadow-2xl transition-colors duration-500">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">

                <div
                    className="flex items-center gap-3 cursor-pointer select-none"
                    onClick={() => setPerfilAtivo('Todos')}
                >
                    <span className="text-[#cccc29] text-2xl">✦</span>
                    <span className="font-serif italic text-3xl font-bold text-[#efe7d3]">Mapa Secreto</span>
                </div>

                <div className="flex gap-3 flex-wrap justify-center">
                    {PERFIS.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => setPerfilAtivo(p.id)}
                            className={`font-mono text-sm md:text-base uppercase px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer font-medium ${perfilAtivo === p.id
                                    ? 'bg-[#cccc29] text-[#14171c] font-bold shadow-lg scale-105'
                                    : 'bg-[#1b1f26] text-gray-200 border border-white/15 hover:border-white/40'
                                }`}
                        >
                            {p.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}