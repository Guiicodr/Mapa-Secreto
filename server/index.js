const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const app = express()
app.use(cors())
app.use(express.json())

const places = [
  { id: 1, name: 'Parque Secreto', desc: 'Um cantinho tranquilo', coords: [-23.55, -46.63] },
  { id: 2, name: 'Mirante Escondido', desc: 'Vista incrível', coords: [-23.56, -46.64] },
  { id: 3, name: 'Praça Oculta', desc: 'Pequena praça com arte urbana', coords: [-23.57, -46.62] }
]

app.get('/api/places', (req, res) => {
  res.json(places)
})

const suggestionsPath = path.join(__dirname, 'data', 'suggestions.json')

function readSuggestions() {
  return JSON.parse(fs.readFileSync(suggestionsPath, 'utf8'))
}

app.post('/api/suggestions', (req, res) => {
  const { nome, bairro, descricao, trilha } = req.body
  if (!nome?.trim() || !bairro?.trim() || !descricao?.trim()) {
    return res.status(400).json({ error: 'Nome, bairro e descrição são obrigatórios.' })
  }

  const suggestions = readSuggestions()
  const suggestion = {
    id: Date.now(),
    nome: nome.trim(),
    bairro: bairro.trim(),
    descricao: descricao.trim(),
    trilha: trilha || null,
    createdAt: new Date().toISOString(),
  }
  suggestions.push(suggestion)
  fs.writeFileSync(suggestionsPath, `${JSON.stringify(suggestions, null, 2)}\n`)
  res.status(201).json(suggestion)
})

app.get('/api/suggestions', (req, res) => {
  res.json(readSuggestions())
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Mapa Secreto API running on http://localhost:${port}`))
