import React from 'react';
import NavBar from './NavBar';
import Map from './Map';
import PlaceCard from './PlaceCard';
import Atmosphere from './Atmosphere';
import { submitSuggestion } from '../services/suggestions';

export default function TrailPage({ eyebrow, title, highlight, description, accent, places, motif, note, count }) {
    const [selectedPlace, setSelectedPlace] = React.useState(places[0]);
    const [suggestionSent, setSuggestionSent] = React.useState(false);
    const [suggestionError, setSuggestionError] = React.useState('');
    const [submittingSuggestion, setSubmittingSuggestion] = React.useState(false);
    const [mapOpen, setMapOpen] = React.useState(false);
    const accentText = { 'bg-mapa-orange': 'text-mapa-orange', 'bg-mapa-blue': 'text-mapa-blue', 'bg-mapa-green': 'text-mapa-green', 'bg-mapa-cyan': 'text-mapa-cyan' }[accent];
    const accentBorder = { 'bg-mapa-orange': 'border-mapa-orange', 'bg-mapa-blue': 'border-mapa-blue', 'bg-mapa-green': 'border-mapa-green', 'bg-mapa-cyan': 'border-mapa-cyan' }[accent];
    const suggestionText = { 'bg-mapa-orange': 'text-white', 'bg-mapa-blue': 'text-white', 'bg-mapa-green': 'text-mapa-dark', 'bg-mapa-cyan': 'text-mapa-dark' }[accent];

    const scrollToSuggestion = () => {
        document.getElementById('sugerir-lugar')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handlePlaceSelect = (place) => {
        setSelectedPlace(place);
        if (window.matchMedia('(max-width: 1023px)').matches) setMapOpen(true);
    };

    const handleSuggestionSubmit = async (event) => {
        event.preventDefault();
        setSuggestionError('');
        setSubmittingSuggestion(true);
        const formData = new FormData(event.currentTarget);

        try {
            await submitSuggestion({
                nome: formData.get('nome'),
                bairro: formData.get('bairro'),
                descricao: formData.get('descricao'),
                trilha: eyebrow,
            });
            setSuggestionSent(true);
        } catch {
            setSuggestionError('Não foi possível enviar agora. Tente novamente em instantes.');
        } finally {
            setSubmittingSuggestion(false);
        }
    };

    return (
        <div className="home-shell min-h-screen bg-mapa-bg text-mapa-dark font-sans antialiased overflow-x-hidden relative">
            <Atmosphere />
            <NavBar />
            <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 sm:pt-10 pb-16 sm:pb-24">
                <button type="button" onClick={() => { window.location.hash = ''; }} className="font-black text-sm uppercase tracking-widest text-mapa-blue hover:text-mapa-orange transition-colors mb-10 cursor-pointer">← voltar para o mapa</button>
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-2 pb-20">
                    <header className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-left-12 duration-1000 fill-mode-forwards">
                        <span className={`inline-block ${accent} text-white font-black text-sm uppercase tracking-wider px-6 py-2.5 rounded-full border-3 border-mapa-dark shadow-[3px_3px_0px_0px_#121212]`}>{eyebrow}</span>
                        <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight">{title}<br /><span className={accentText}>{highlight}</span></h1>
                        <p className="text-gray-800 font-bold text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed">{description}</p>
                        <div className="flex flex-wrap items-center gap-6 pt-2"><span className="text-sm font-black text-gray-500 uppercase tracking-widest">{count} · São Paulo</span><span className="text-sm font-black text-gray-500 uppercase tracking-widest">curadoria local</span></div>
                    </header>
                    <div className="hidden sm:flex lg:col-span-5 justify-center lg:justify-end animate-in fade-in zoom-in-75 duration-1000 delay-300 fill-mode-forwards relative z-10">
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
                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                            {places.map((place, index) => (
                                <div key={place.id} style={{ animationDelay: `${index * 120}ms` }} className="animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-forwards">
                                    <PlaceCard {...place} onSelect={() => handlePlaceSelect(place)} selecionado={selectedPlace.id === place.id} />
                                </div>
                            ))}
                            <button type="button" onClick={scrollToSuggestion} className="order-first sm:order-none min-h-52 sm:min-h-64 bg-mapa-cyan text-mapa-dark border-4 border-mapa-dark rounded-3xl p-5 sm:p-6 text-left shadow-[5px_5px_0px_0px_#121212] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#121212] transition-all cursor-pointer flex flex-col justify-between animate-in fade-in slide-in-from-bottom-6 duration-700">
                                <span className="text-5xl font-black leading-none" aria-hidden="true">+</span>
                                <span>
                                    <span className="block text-2xl font-black leading-tight">Conhece um lugar que precisa estar aqui?</span>
                                    <span className="block mt-3 text-xs font-black uppercase tracking-widest">Indique um achado</span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <aside className="hidden lg:block lg:col-span-5 lg:sticky lg:top-6 relative">
                        <div className="bg-mapa-yellow border-4 border-mapa-dark rounded-3xl p-5 shadow-[7px_7px_0px_0px_#121212]">
                            <div className="flex items-center justify-between gap-3 mb-4"><div><p className="text-xs font-black uppercase tracking-widest">Seu próximo achado</p><h2 className="text-3xl font-black leading-tight">{selectedPlace.nome}</h2></div><span className="text-3xl" aria-hidden="true">✦</span></div>
                            <div className="bg-white border-3 border-mapa-dark rounded-2xl overflow-hidden"><Map places={places} selectedPlace={selectedPlace} /></div>
                            <p className="font-bold text-sm mt-4">{selectedPlace.endereco}</p>
                            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${selectedPlace.nome}, ${selectedPlace.endereco}, São Paulo`)}`} target="_blank" rel="noreferrer" className="inline-flex mt-3 bg-mapa-dark text-white px-5 py-3 rounded-xl border-2 border-mapa-dark font-black text-xs uppercase tracking-wider hover:bg-mapa-blue transition-colors">Abrir no Google Maps ↗</a>
                        </div>
                        <article className="bg-white border-4 border-mapa-dark rounded-3xl p-6 shadow-[7px_7px_0px_0px_#121212] animate-in fade-in slide-in-from-right-5 duration-500 lg:absolute lg:left-[calc(100%+1rem)] lg:top-8 lg:w-64 xl:w-72">
                            <p className={`text-xs font-black uppercase tracking-widest ${accentText}`}>{selectedPlace.categoria}</p>
                            <h2 className="mt-2 text-3xl font-black leading-tight">{selectedPlace.nome}</h2>
                            <p className="mt-4 text-base font-bold leading-relaxed">{selectedPlace.descricao}</p>
                            <p className="mt-5 border-t-2 border-mapa-dark pt-4 text-sm font-black leading-relaxed">{selectedPlace.endereco}</p>
                        </article>
                    </aside>
                </section>
            </main>
            <section id="sugerir-lugar" className={`w-full ${accent} border-t-4 border-mapa-dark px-4 sm:px-8 py-12 sm:py-24 ${suggestionText}`}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    <div className="lg:col-span-5 animate-in fade-in slide-in-from-left-10 duration-700">
                        <p className="font-black text-sm uppercase tracking-[0.2em]">A cidade é feita de indicações</p>
                        <h2 className="mt-4 sm:mt-5 text-3xl sm:text-5xl lg:text-6xl font-black leading-[0.92] tracking-tight">Seu lugar secreto pode virar o próximo achado.</h2>
                        <p className="mt-4 sm:mt-6 max-w-lg text-base sm:text-lg font-bold leading-relaxed">Conte para a gente sobre um endereço especial. Nossa curadoria vai conhecer a história e avaliar a indicação.</p>
                    </div>

                    <form onSubmit={handleSuggestionSubmit} className="lg:col-span-7 bg-white text-mapa-dark border-4 border-mapa-dark rounded-3xl p-5 sm:p-6 md:p-8 shadow-[8px_8px_0px_0px_#121212] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-forwards">
                        {suggestionSent ? (
                            <div className="min-h-64 flex flex-col justify-center gap-4">
                                <p className="text-4xl font-black">Indicação recebida.</p>
                                <p className="text-lg font-bold leading-relaxed">Obrigado por ajudar a cidade a continuar revelando seus melhores cantos.</p>
                                <button type="button" onClick={() => setSuggestionSent(false)} className="self-start bg-mapa-blue text-white px-5 py-3 rounded-xl border-2 border-mapa-dark font-black text-xs uppercase tracking-wider hover:bg-mapa-dark transition-colors">Indicar outro lugar</button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <label className="space-y-2 font-black text-sm">
                                    <span className="block">Nome do lugar</span>
                                    <input required name="nome" type="text" placeholder="Ex.: Bar do Zé" className="w-full bg-white text-mapa-dark placeholder:text-gray-500 border-3 border-mapa-dark rounded-xl px-4 py-3 font-bold outline-none focus:ring-4 focus:ring-mapa-cyan" />
                                </label>
                                <label className="space-y-2 font-black text-sm">
                                    <span className="block">Bairro ou região</span>
                                    <input required name="bairro" type="text" placeholder="Ex.: Centro" className="w-full bg-white text-mapa-dark placeholder:text-gray-500 border-3 border-mapa-dark rounded-xl px-4 py-3 font-bold outline-none focus:ring-4 focus:ring-mapa-cyan" />
                                </label>
                                <label className="md:col-span-2 space-y-2 font-black text-sm">
                                    <span className="block">Por que vale a visita?</span>
                                    <textarea required name="descricao" rows="4" placeholder="Conte um pouco sobre esse achado..." className="w-full bg-white text-mapa-dark placeholder:text-gray-500 resize-y border-3 border-mapa-dark rounded-xl px-4 py-3 font-bold outline-none focus:ring-4 focus:ring-mapa-cyan" />
                                </label>
                                {suggestionError && <p role="alert" className="md:col-span-2 text-sm font-bold text-mapa-orange">{suggestionError}</p>}
                                <button type="submit" disabled={submittingSuggestion} className="md:col-span-2 justify-self-start bg-mapa-orange text-white px-6 py-3.5 rounded-xl border-3 border-mapa-dark shadow-[4px_4px_0px_0px_#121212] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#121212] transition-all font-black uppercase tracking-wider disabled:cursor-wait disabled:opacity-60">{submittingSuggestion ? 'Enviando...' : 'Enviar indicação'}</button>
                            </div>
                        )}
                    </form>
                </div>
            </section>
            {mapOpen && (
                <div className="fixed inset-0 z-50 bg-mapa-bg p-4 lg:hidden">
                    <div className="flex h-full flex-col gap-4">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className={`text-xs font-black uppercase tracking-widest ${accentText}`}>Mapa dos achados</p>
                                <h2 className="text-2xl font-black">Explore esta trilha.</h2>
                            </div>
                            <button type="button" onClick={() => setMapOpen(false)} aria-label="Fechar mapa" className="border-3 border-mapa-dark bg-white px-4 py-2 text-sm font-black uppercase shadow-[3px_3px_0px_0px_#121212]">Fechar</button>
                        </div>
                        <div className="rounded-2xl border-3 border-mapa-dark bg-white p-4 text-mapa-dark">
                            <p className={`text-xs font-black uppercase tracking-widest ${accentText}`}>{selectedPlace.categoria}</p>
                            <h2 className="mt-1 text-2xl font-black">{selectedPlace.nome}</h2>
                            <p className="mt-2 text-sm font-bold leading-relaxed">{selectedPlace.descricao}</p>
                            <p className="mt-2 text-sm font-bold">{selectedPlace.endereco}</p>
                            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${selectedPlace.nome}, ${selectedPlace.endereco}, São Paulo`)}`} target="_blank" rel="noreferrer" className="inline-flex mt-3 bg-mapa-dark text-white px-4 py-2.5 rounded-xl border-2 border-mapa-dark font-black text-xs uppercase tracking-wider hover:bg-mapa-blue transition-colors">Abrir no Google Maps ↗</a>
                        </div>
                        <div className="min-h-0 flex-1 overflow-hidden rounded-2xl border-3 border-mapa-dark bg-white">
                            <Map places={places} selectedPlace={selectedPlace} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
