import React from 'react';
import TrailPage from '../components/TrailPage';

const lugares = [
    { id: 1, nome: 'JazzB', bairro: 'Bela Vista', categoria: 'Jazz ao vivo', preco: '$$ · noite', descricao: 'Palco íntimo, músicos excelentes e uma programação que pede atenção até a última nota.', coords: [-23.5556, -46.6427], endereco: 'Rua General Jardim, 43, Vila Buarque' },
    { id: 2, nome: 'Casa de Francisca', bairro: 'Sé', categoria: 'Música brasileira', preco: '$$ · noite', descricao: 'Uma casa pequena para ouvir música brasileira de perto, com artistas que merecem ser descobertos.', coords: [-23.5505, -46.6343], endereco: 'Rua dos Prazeres, 334, Sé' },
    { id: 3, nome: 'Picles', bairro: 'Santa Cecília', categoria: 'Shows e DJs', preco: '$ · noite', descricao: 'Agenda independente, pista apertada e noites que acabam sempre um pouco mais tarde.', coords: [-23.5387, -46.6508], endereco: 'Rua Augusta, 2690, Consolação' },
    { id: 4, nome: 'Sesc Pompeia', bairro: 'Pompeia', categoria: 'Cultura', preco: '$ · programação', descricao: 'Shows, escutas e encontros em um dos espaços culturais mais vivos da cidade.', coords: [-23.5267, -46.6815], endereco: 'Rua Clélia, 93, Pompeia' },
];

export default function Ouvir() {
    return <TrailPage eyebrow="Trilha ouvir · São Paulo" title="A cidade tem" highlight="som." description="Palcos pequenos, vozes grandes e lugares onde a música chega antes da fama. Escolha um achado e dê play na noite." accent="bg-mapa-cyan" motif="♫" note="Escute onde a cidade pulsa." count="9 achados" places={lugares} />;
}
