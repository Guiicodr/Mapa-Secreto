import React from 'react';

export default function PlaceCard({ nome, bairro, categoria, descricao, preco, onSelect, selecionado }) {
  return (
    <article className={`bg-white border-3 border-mapa-dark rounded-3xl p-6 shadow-[5px_5px_0px_0px_#121212] hover:shadow-[8px_8px_0px_0px_#121212] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between ${selecionado ? 'ring-4 ring-mapa-yellow' : ''}`}>
      <div>
        <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
          <span className="max-w-full bg-mapa-green text-mapa-dark font-extrabold text-[11px] px-3 py-1 rounded-full border-2 border-mapa-dark uppercase tracking-wide break-words">
            📍 {bairro}
          </span>
          <span className="max-w-full bg-mapa-cyan text-mapa-dark font-extrabold text-[10px] px-3 py-1 rounded-full border-2 border-mapa-dark uppercase tracking-wider break-words">
            {categoria}
          </span>
        </div>

        <h3 className="font-extrabold text-2xl text-mapa-dark mb-2 tracking-tight leading-tight">
          {nome}
        </h3>

        <p className="text-gray-600 text-sm font-medium leading-relaxed mb-3">
          {descricao}
        </p>
        <span className="text-xs font-black uppercase tracking-widest text-gray-500">{preco}</span>
      </div>

      <button type="button" onClick={onSelect} className="w-full bg-mapa-orange hover:bg-opacity-90 text-white font-extrabold py-3 px-4 rounded-2xl border-2 border-mapa-dark shadow-[3px_3px_0px_0px_#121212] active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#121212] transition-all text-xs uppercase tracking-wider cursor-pointer">
        {selecionado ? 'Local selecionado' : 'Ver detalhes'}
      </button>
    </article>
  );
}