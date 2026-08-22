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

function getInitialPage() {
  const initialPage = getPageFromHash();

  if (scrollTargets[initialPage]) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
    return 'home';
  }

  return initialPage;
}

function App() {
  const [page, setPage] = React.useState(getInitialPage);

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

      const extraOffset = targetId === 'quem-somos' ? 64 : 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY + extraOffset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    });
  }, [page]);

  return (
    <div className="min-h-screen bg-[#14171c] antialiased">
      {pages[page] || <Home />}
    </div>
  );
}

export default App;