# Mapa Secreto

Uma curadoria colaborativa de lugares especiais em São Paulo e região. Explore quatro trilhas — **Comer**, **Beber**, **Ver** e **Ouvir** —, conheça os lugares no mapa e indique novos achados.

## Sobre o projeto

O Mapa Secreto valoriza pequenos comércios, espaços culturais e cantos da cidade que merecem ser descobertos. Cada trilha reúne lugares selecionados, com informações de bairro, categoria, descrição, endereço e faixa de preço.

Na página de cada lugar, é possível visualizar sua localização no mapa, abrir o endereço no Google Maps e enviar uma indicação para a curadoria.

## Tecnologias

- React 18 e Vite
- Tailwind CSS 4
- Leaflet e React Leaflet
- API opcional em Node.js, Express e CORS

## Requisitos

- Node.js 18 ou superior
- npm

## Começar

Na raiz do projeto, instale as dependências e inicie o frontend:

```bash
npm ci
npm run dev
```

O Vite informa no terminal o endereço local da aplicação (normalmente `http://localhost:5173`).

### Build de produção

```bash
npm run build
npm run preview
```

O comando `build` gera os arquivos em `dist/`; `preview` serve localmente essa build.

## API local (opcional)

A API fica na pasta `server/` e usa a porta `4000` por padrão. Para iniciar:

```bash
cd server
npm ci
npm start
```

O endpoint de indicações lê e grava em `server/data/suggestions.json`. Esse arquivo contém dados locais e não é versionado. Crie-o antes de usar os endpoints de indicações:

```bash
node -e "require('fs').writeFileSync('data/suggestions.json', '[]\n')"
```

Execute esse comando dentro da pasta `server/`.

### Endpoints

| Método | Caminho | Descrição |
| --- | --- | --- |
| `GET` | `/api/places` | Retorna os lugares de exemplo definidos na API. |
| `GET` | `/api/suggestions` | Lista as indicações salvas localmente. |
| `POST` | `/api/suggestions` | Salva uma indicação. Requer `nome`, `bairro` e `descricao`; `trilha` é opcional. |

O frontend usa `http://localhost:4000` como endereço padrão da API para enviar indicações. Para apontar para outro endereço, defina `VITE_API_URL` em um arquivo `.env.local` na raiz:

```env
VITE_API_URL=http://localhost:4000
```

Os lugares exibidos nas trilhas são atualmente definidos nos componentes em `src/pages/`. O endpoint `/api/places` é uma rota de exemplo da API.

## Estrutura do projeto

```text
src/
  components/   Componentes compartilhados, cards, navegação e mapa
  pages/        Página inicial e trilhas da cidade
  services/     Integração do frontend com a API
server/
  index.js      API Express
  data/         Arquivo local de indicações
```

## Scripts disponíveis

Na raiz:

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento do frontend. |
| `npm run build` | Gera a build de produção. |
| `npm run preview` | Pré-visualiza a build localmente. |

Em `server/`:

| Comando | Descrição |
| --- | --- |
| `npm start` | Inicia a API Express. |

O projeto não possui um script de testes automatizados configurado no momento.
