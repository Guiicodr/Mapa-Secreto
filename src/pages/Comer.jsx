import React from 'react';
import TrailPage from '../components/TrailPage';

const lugares = [
    { id: 1, nome: 'Dona Onça', bairro: 'República', categoria: 'Comida brasileira', preco: '$$$ · almoço e jantar', descricao: 'Comida brasileira de verdade, com tempero de casa e balcão cheio de histórias.', coords: [-23.5456, -46.6424], endereco: 'Edifício Copan, Av. Ipiranga, 200, República' },
    { id: 2, nome: 'Rinconcito Peruano', bairro: 'Centro', categoria: 'Peruano', preco: '$ · almoço', descricao: 'Um salão pequeno e sem frescura para encontrar ceviche, lomo saltado e muita personalidade.', coords: [-23.5407, -46.6362], endereco: 'Rua Aurora, 451, Santa Ifigênia' },
    { id: 3, nome: 'A Baianeira', bairro: 'Barra Funda', categoria: 'Baiana', preco: '$$ · brunch', descricao: 'Afeto baiano em pratos inventivos, servido num espaço ensolarado e cheio de plantas.', coords: [-23.5254, -46.6705], endereco: 'Rua Barra Funda, 361, Barra Funda' },
    { id: 4, nome: 'Mocotó', bairro: 'Vila Medeiros', categoria: 'Sertaneja', preco: '$$ · almoço e jantar', descricao: 'Sabores do sertão em receitas generosas, daqueles lugares que valem a viagem até a zona norte.', coords: [-23.4802, -46.5883], endereco: 'Av. Nossa Senhora do Loreto, 1100, Vila Medeiros' },
    { id: 5, nome: 'Mercado de Pinheiros', bairro: 'Pinheiros', categoria: 'Mercado', preco: '$ · dia', descricao: 'Bancas, temperos e pequenos balcões para provar sabores diferentes no ritmo do bairro.', coords: [-23.5666, -46.6907], endereco: 'Rua Pedro Cristi, 89, Pinheiros' },
    { id: 6, nome: 'Pastel da Maria', bairro: 'Liberdade', categoria: 'Comida de rua', preco: '$ · qualquer hora', descricao: 'Pastéis crocantes e caldo de cana para uma parada rápida cheia de sabor.', coords: [-23.5585, -46.6348], endereco: 'Praça da Liberdade, Liberdade' },
];

export default function Comer() {
    return <TrailPage eyebrow="Trilha comer · São Paulo" title="Mesa boa," highlight="escondida." description="Lugares pequenos, cozinhas honestas e endereços que passam de boca em boca. Escolha um achado e trace seu próximo almoço." accent="bg-mapa-orange" motif="✦" note="Comida que vira história." count="6 achados" places={lugares} />;
}
