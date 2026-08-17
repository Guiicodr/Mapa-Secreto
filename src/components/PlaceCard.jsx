import React, { useState } from 'react';

export default function PlaceCard({ title, category, neighborhood, description, mapQuery }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="bg-[#efe7d3] text-[#211d16] rounded-sm p-6 relative shadow-lg hover:-translate-y-1 transition-all duration-300 border border-[#32a852]/30">
      <div className="flex justify-between items-start mb-3.5">
        {/* PINO SVG com o Verde da paleta */}
        <svg style={{ width: '26px', height: '26px' }} className="flex-shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M12 22s7-7.58 7-13A7 7 0 0 0 5 9c0 5.42 7 13 7 13Z" fill="#32a852" />
          <circle cx="12" cy="9" r="2.6" fill="#efe7d3" />
        </svg>

        {/* TAG com borda e texto Verde */}
        <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#32a852] border border-[#32a852]/40 px-2 py-1 rounded-full font-semibold">
          {category}
        </span>
      </div>

      {/* TÍTULO com o Roxo da paleta */}
      <h3 className="font-serif font-semibold text-2xl mb-1 leading-tight text-[#2d1b87]">
        {title}
      </h3>

      {/* BAIRRO com o Verde da paleta */}
      <div className="font-mono text-[11.5px] text-[#32a852] uppercase tracking-wider mb-3.5 font-bold">
        {neighborhood}
      </div>

      <p className="text-sm leading-relaxed text-[#3c3830] mb-4">
        {description}
      </p>

      <div className="border-t border-dashed border-[#c8bc94] pt-3.5">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="font-mono text-xs text-[#211d16] flex items-center gap-2 font-medium cursor-pointer w-full text-left"
        >
          <span className={`text-[#32a852] transition-transform ${isOpen ? 'rotate-90' : ''}`}>▸</span>
          Ver no mapa
        </button>

        {isOpen && (
          <div className="mt-3.5 space-y-2">
            <div className="rounded-sm overflow-hidden border border-[#c8bc94]">
              <iframe
                className="w-full h-48 border-0 saturate-90"
                loading="lazy"
                src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
                title={title}
              />
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-[11.5px] text-[#32a852] hover:underline font-semibold"
            >
              Abrir no Google Maps →
            </a>
          </div>
        )}
      </div>
    </article>
  );
}