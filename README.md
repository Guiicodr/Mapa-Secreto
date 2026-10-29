# Mapa Secreto 🗺️

Uma curadoria colaborativa de lugares especiais em São Paulo e região. Explore quatro trilhas — **Comer, Beber, Ver e Ouvir** — e descubra pequenos comércios, espaços culturais e cantos escondidos da cidade.

## ✨ Funcionalidades

- Exploração de lugares por trilha e categoria.
- Mapa interativo com localização dos estabelecimentos.
- Informações sobre bairros, endereços e faixas de preço.
- Acesso à localização pelo Google Maps.
- Envio de indicações de novos lugares.

## 🛠️ Tecnologias

- React 18 e Vite
- Tailwind CSS 4
- Leaflet e React Leaflet
- Node.js e Express

## 🚀 Como executar

**Pré-requisitos:** Node.js e npm.

Na raiz do projeto, instale as dependências e inicie o frontend:

```bash
npm ci
npm run dev
```

Para iniciar a API local, em outro terminal:

```bash
cd server
npm ci
npm start
```

A API utiliza a porta `4000` por padrão. Consulte as configurações do projeto para personalizar o endereço da API, se necessário.

## 📁 Estrutura

```text
src/
  components/
  pages/
  services/
server/
  index.js
  data/
```

## 📌 Status

Projeto em desenvolvimento, com dados dos lugares definidos localmente no frontend e API para gerenciamento de indicações.
