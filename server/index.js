const express = require('express')
const cors = require('cors')
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

const port = process.env.PORT || 4000
app.listen(port, ()=> console.log(`Mapa Secreto API running on http://localhost:${port}`))
