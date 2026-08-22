import React from 'react';
import TrailPage from '../components/TrailPage';

const lugares = [
    { id: 1, nome: 'Bar do Luiz Fernandes', bairro: 'Tucuruvi', categoria: 'Boteco clássico', preco: '$$ · fim de tarde', descricao: 'Bolinho de bacalhau, chope gelado e uma mesa de sinuca que conhece muitas histórias.', coords: [-23.4771, -46.6037], endereco: 'Rua Paulo Gonçalves, 344, Tucuruvi' },
    { id: 2, nome: 'Boteco São Bento', bairro: 'Vila Madalena', categoria: 'Chopes artesanais', preco: '$$ · noite', descricao: 'Um balcão discreto para provar cervejas locais e petiscos caprichados sem pressa.', coords: [-23.5579, -46.6913], endereco: 'Rua Mourato Coelho, 1022, Vila Madalena' },
    { id: 3, nome: 'Bar do Biu', bairro: 'Pinheiros', categoria: 'Nordestino', preco: '$ · almoço e noite', descricao: 'Cerveja estupidamente gelada, sarapatel e conversa boa num salão de bairro.', coords: [-23.5651, -46.6861], endereco: 'Rua Cardeal Arcoverde, 772, Pinheiros' },
    { id: 4, nome: 'Cervejaria Nacional', bairro: 'Vila Madalena', categoria: 'Cerveja da casa', preco: '$$ · noite', descricao: 'Tanques à vista e cervejas autorais para beber direto na fonte.', coords: [-23.5556, -46.6916], endereco: 'Av. Pedroso de Morais, 604, Pinheiros' },
    { id: 5, nome: 'Bar do Giba', bairro: 'Santa Cecília', categoria: 'Boteco de bairro', preco: '$ · fim de tarde', descricao: 'Mesa na calçada, petiscos simples e chope gelado para desacelerar depois do trabalho.', coords: [-23.5374, -46.6501], endereco: 'Rua Barão de Tatuí, 302, Santa Cecília' },
    { id: 6, nome: 'Matiz Bar', bairro: 'Bela Vista', categoria: 'Drinks autorais', preco: '$$ · noite', descricao: 'Coquetéis criativos e um balcão acolhedor escondido no coração da Bela Vista.', coords: [-23.5588, -46.6462], endereco: 'Rua dos Ingleses, 384, Bela Vista' },
];

export default function Beber() {
    return <TrailPage eyebrow="Trilha beber · São Paulo" title="Um gole de" highlight="cidade." description="Balcões honestos, cervejas de bairro e bares que ainda sabem o nome de quem chega. Escolha um achado para começar a noite." accent="bg-mapa-blue" motif="◒" note="A noite começa no balcão." count="6 achados" places={lugares} />;
}
