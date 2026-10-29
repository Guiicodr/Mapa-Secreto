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
        <header className="font-logo w-full px-4 sm:px-8 md:px-12 pt-4 sm:pt-8 pb-3 sm:pb-4 animate-in fade-in slide-in-from-top duration-700">
            <div className="flex min-h-11 w-full items-center justify-between gap-3">
                <a href="#home" aria-label="Mapa Secreto — início" className="group flex min-w-0 items-center gap-2 sm:gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border-3 border-mapa-dark bg-mapa-yellow p-1.5 shadow-[3px_3px_0px_0px_#121212] transition-transform group-hover:scale-105 sm:h-14 sm:w-14 sm:rounded-2xl sm:border-4 sm:shadow-[4px_4px_0px_0px_#121212]">
                        <img
                            src="/cidade2.png"
                            alt="Logo Cidade"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <span className="font-logo text-xl font-black leading-none tracking-tight text-mapa-dark sm:text-3xl md:text-4xl">
                        Mapa <span className="font-logo font-black text-xs md:text-sm uppercase block tracking-[0.15em] text-gray-600 -mt-1">SECRETO</span>
                    </span>
                </a>
                <div className="flex shrink-0 items-center gap-1 sm:gap-8">
                    {!isTrailPage && (
                        <nav className="flex items-center font-black text-[10px] uppercase tracking-wide text-mapa-dark sm:text-sm sm:tracking-wider">
                            <a href="#quem-somos" onClick={handleAboutClick} className="inline-flex min-h-11 items-center rounded-full px-2 transition-colors hover:text-mapa-orange sm:px-3">Quem somos?</a>
                        </nav>
                    )}

                    {isTrailPage && (
                        <button type="button" onClick={handleMapClick} className="min-h-11 rounded-full border-3 border-mapa-dark bg-mapa-yellow px-3 py-2 text-[10px] font-black uppercase text-mapa-dark shadow-[3px_3px_0px_0px_#121212] transition-all hover:scale-105 active:scale-95 sm:border-4 sm:px-8 sm:py-3.5 sm:text-base sm:shadow-[4px_4px_0px_0px_#121212]">
                            Quero o mapa
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
}