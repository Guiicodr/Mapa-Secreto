import React from 'react';
import TrailPage from '../components/TrailPage';

const lugares = [
    { id: 1, nome: 'Cine Sesc', bairro: 'Consolação', categoria: 'Cinema de rua', preco: '$ · sessões', descricao: 'Filmes que merecem tela grande, numa programação que foge do óbvio e cabe no bolso.', coords: [-23.5546, -46.6642], endereco: 'Rua Augusta, 2075, Consolação' },
    { id: 2, nome: 'Pico do Jaraguá', bairro: 'Jaraguá', categoria: 'Vista da cidade', preco: 'grátis · dia', descricao: 'Suba devagar até uma das vistas mais bonitas de São Paulo, cercada de mata e silêncio.', coords: [-23.4563, -46.7665], endereco: 'Estrada Turística do Jaraguá, 3988, Jaraguá' },
    { id: 3, nome: 'Beco do Batman', bairro: 'Vila Madalena', categoria: 'Arte urbana', preco: 'grátis · qualquer hora', descricao: 'Um corredor a céu aberto onde os muros mudam de pele e cada esquina rende uma descoberta.', coords: [-23.5553, -46.6894], endereco: 'Rua Gonçalo Afonso, Vila Madalena' },
    { id: 4, nome: 'Casa das Caldeiras', bairro: 'Água Branca', categoria: 'Arquitetura', preco: '$$ · eventos', descricao: 'Chaminés, tijolos e uma antiga fábrica que virou cenário para encontros culturais.', coords: [-23.5246, -46.6913], endereco: 'Av. Francisco Matarazzo, 2000, Água Branca' },
];

export default function Ver() {
    return <TrailPage eyebrow="Trilha ver · São Paulo" title="Olha com" highlight="calma." description="Cinemas, mirantes, paredes e prédios que fazem a cidade parar por um instante. Escolha um lugar para ver São Paulo de outro jeito." accent="bg-mapa-green" motif="◉" note="A cidade também pede pausa." count="34 achados" places={lugares} />;
}
