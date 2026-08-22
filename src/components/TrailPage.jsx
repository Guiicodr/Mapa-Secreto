import React from 'react';
import NavBar from './NavBar';
import Map from './Map';
import PlaceCard from './PlaceCard';
import Atmosphere from './Atmosphere';

export default function TrailPage({ eyebrow, title, highlight, description, accent, places, motif, note, count }) {
    const [selectedPlace, setSelectedPlace] = React.useState(places[0]);
    const accentText = { 'bg-mapa-orange': 'text-mapa-orange', 'bg-mapa-blue': 'text-mapa-blue', 'bg-mapa-green': 'text-mapa-green', 'bg-mapa-cyan': 'text-mapa-cyan' }[accent];
    const accentBorder = { 'bg-mapa-orange': 'border-mapa-orange', 'bg-mapa-blue': 'border-mapa-blue', 'bg-mapa-green': 'border-mapa-green', 'bg-mapa-cyan': 'border-mapa-cyan' }[accent];

    return (
        <div className="home-shell min-h-screen bg-mapa-bg text-mapa-dark font-sans antialiased overflow-x-hidden relative">
            <Atmosphere />
            <NavBar />
            <main className="max-w-7xl mx-auto px-8 pt-10 pb-24">
                <button type="button" onClick={() => { window.location.hash = ''; }} className="font-black text-sm uppercase tracking-widest text-mapa-blue hover:text-mapa-orange transition-colors mb-10 cursor-pointer">← voltar para o mapa</button>
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-2 pb-20">
                    <header className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-left-12 duration-1000 fill-mode-forwards">
                        <span className={`inline-block ${accent} text-white font-black text-sm uppercase tracking-wider px-6 py-2.5 rounded-full border-3 border-mapa-dark shadow-[3px_3px_0px_0px_#121212]`}>{eyebrow}</span>
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight">{title}<br /><span className={accentText}>{highlight}</span></h1>
                        <p className="text-gray-800 font-bold text-lg lg:text-xl max-w-xl leading-relaxed">{description}</p>
                        <div className="flex flex-wrap items-center gap-6 pt-2"><span className="text-sm font-black text-gray-500 uppercase tracking-widest">{count} · São Paulo</span><span className="text-sm font-black text-gray-500 uppercase tracking-widest">curadoria local</span></div>
                    </header>
                    <div className="lg:col-span-5 flex justify-center lg:justify-end animate-in fade-in zoom-in-75 duration-1000 delay-300 fill-mode-forwards relative z-10">
                        <div className={`animate-float ${accent} border-4 border-mapa-dark rounded-[56px] p-8 md:p-10 w-full max-w-lg aspect-square flex items-center justify-center relative shadow-[12px_12px_0px_0px_#121212]`}>
                            <div className="border-4 border-mapa-dark rounded-[36px] w-full h-full overflow-hidden bg-white flex flex-col items-center justify-center p-6 text-center">
                                <div className={`text-8xl md:text-9xl leading-none mb-5 ${accentText}`} aria-hidden="true">{motif}</div>
                                <p className="font-black text-2xl md:text-3xl leading-tight">{note}</p>
                            </div>
                            <div className="absolute -bottom-6 left-8 bg-white border-4 border-mapa-dark px-6 py-2.5 rounded-2xl text-sm lg:text-base font-black -rotate-2 shadow-[4px_4px_0px_0px_#121212] z-20">X marca o achado.</div>
                        </div>
                    </div>
                </section>
                <div className="w-full h-5 flex border-y-3 border-mapa-dark mb-20"><div className="flex-1 bg-mapa-orange"></div><div className="flex-1 bg-mapa-yellow"></div><div className="flex-1 bg-mapa-cyan"></div><div className="flex-1 bg-mapa-blue"></div><div className="flex-1 bg-mapa-green"></div></div>
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-7">
                        <div className="flex items-end justify-between gap-4 mb-6"><div><p className={`text-xs font-black uppercase tracking-widest ${accentText}`}>Achados da vez</p><h2 className="text-4xl md:text-5xl font-black tracking-tight">Escolha seu próximo rolê.</h2></div><span className={`hidden sm:block border-3 ${accentBorder} px-3 py-1 rounded-full font-black text-xs uppercase tracking-wider`}>{places.length} lugares</span></div>
                        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {places.map((place, index) => (
                                <div key={place.id} style={{ animationDelay: `${index * 120}ms` }} className="animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-forwards">
                                    <PlaceCard {...place} onSelect={() => setSelectedPlace(place)} selecionado={selectedPlace.id === place.id} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <aside className="lg:col-span-5 lg:sticky lg:top-6 space-y-5">
                        <div className="bg-mapa-yellow border-4 border-mapa-dark rounded-3xl p-5 shadow-[7px_7px_0px_0px_#121212]">
                            <div className="flex items-center justify-between gap-3 mb-4"><div><p className="text-xs font-black uppercase tracking-widest">Seu próximo achado</p><h2 className="text-3xl font-black leading-tight">{selectedPlace.nome}</h2></div><span className="text-3xl" aria-hidden="true">✦</span></div>
                            <div className="bg-white border-3 border-mapa-dark rounded-2xl overflow-hidden"><Map places={places} /></div>
                            <p className="font-bold text-sm mt-4">{selectedPlace.endereco}</p>
                            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${selectedPlace.nome}, ${selectedPlace.endereco}, São Paulo`)}`} target="_blank" rel="noreferrer" className="inline-flex mt-3 bg-mapa-dark text-white px-5 py-3 rounded-xl border-2 border-mapa-dark font-black text-xs uppercase tracking-wider hover:bg-mapa-blue transition-colors">Abrir no Google Maps ↗</a>
                        </div>
                    </aside>
                </section>
            </main>
        </div>
    );
}
