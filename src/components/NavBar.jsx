import React from 'react';

export default function NavBar() {
    const trailPages = ['comer', 'beber', 'ver', 'ouvir'];
    const isTrailPage = trailPages.includes(window.location.hash.slice(1));

    const handleAboutClick = (event) => {
        event.preventDefault();

        if (window.location.hash === '#quem-somos') {
            const aboutSection = document.getElementById('quem-somos');
            if (aboutSection) {
                const targetPosition = aboutSection.getBoundingClientRect().top + window.scrollY + 64;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
            return;
        }

        window.history.pushState(null, '', '#quem-somos');
        window.dispatchEvent(new Event('hashchange'));
    };

    const handleMapClick = () => {
        if (window.location.hash === '#mapa-cards') {
            document.getElementById('funciona')?.scrollIntoView({ behavior: 'smooth' });
            return;
        }

        window.location.hash = 'mapa-cards';
    };

    return (
        <header className="font-logo w-full px-8 md:px-12 pt-8 pb-4 animate-in fade-in slide-in-from-top duration-700">
            <div className="w-full flex items-center justify-between">


                <div className="flex items-center gap-4 cursor-pointer group">
                    <div className="w-14 h-14 bg-mapa-yellow rounded-2xl border-4 border-mapa-dark overflow-hidden shadow-[4px_4px_0px_0px_#121212] flex items-center justify-center p-1.5 transition-transform group-hover:scale-105">
                        <img
                            src="/cidade2.png"
                            alt="Logo Cidade"
                            className="w-full h-full object-contain"
                        />
                    </div>


                    <span className="font-logo font-black text-3xl md:text-4xl text-mapa-dark leading-none tracking-tight">
                        Mapa <span className="font-logo font-black text-xs md:text-sm uppercase block tracking-[0.15em] text-gray-600 -mt-1">SECRETO</span>
                    </span>
                </div>


                <div className="flex items-center gap-8">
                    {!isTrailPage && (
                        <nav className="hidden lg:flex items-center gap-8 font-black text-sm uppercase tracking-wider text-mapa-dark">
                            <a href="#quem-somos" onClick={handleAboutClick} className="hover:text-mapa-orange transition-colors">Quem somos?</a>
                        </nav>
                    )}

                    {isTrailPage && (
                        <button type="button" onClick={handleMapClick} className="bg-mapa-yellow hover:scale-105 active:scale-95 text-mapa-dark font-black text-base uppercase px-8 py-3.5 rounded-full border-4 border-mapa-dark shadow-[4px_4px_0px_0px_#121212] transition-all cursor-pointer">
                            Quero o mapa
                        </button>
                    )}
                </div>

            </div>
        </header>
    );
}