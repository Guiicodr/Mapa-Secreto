import React from 'react';
import Home from './pages/Home';
import Comer from './pages/Comer';
import Beber from './pages/Beber';
import Ver from './pages/Ver';
import Ouvir from './pages/Ouvir';

const pages = { comer: <Comer />, beber: <Beber />, ver: <Ver />, ouvir: <Ouvir /> };
const scrollTargets = { 'mapa-cards': 'funciona', 'quem-somos': 'quem-somos' };
const validHashes = new Set(['', 'home', 'mapa', ...Object.keys(scrollTargets), ...Object.keys(pages)]);

function getPageFromHash() {
  const hash = decodeURIComponent(window.location.hash.slice(1));
  return validHashes.has(hash) ? hash || 'home' : 'home';
}

function App() {
  const [page, setPage] = React.useState(getPageFromHash);

  React.useEffect(() => {
    const handleHashChange = () => setPage(getPageFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  React.useEffect(() => {
    const targetId = scrollTargets[page];
    if (!targetId) return;

    requestAnimationFrame(() => {
      const target = document.getElementById(targetId);
      if (!target) return;

      target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      if (targetId === 'quem-somos') {
        window.setTimeout(() => window.scrollBy({ top: 64, behavior: 'smooth' }), 250);
      }
    });
  }, [page]);

  return (
    <div className="min-h-screen bg-[#14171c] antialiased">
      {pages[page] || <Home />}
    </div>
  );
}

export default App;