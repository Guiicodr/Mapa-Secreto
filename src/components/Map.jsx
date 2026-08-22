import React, { useState } from 'react'
import { CircleMarker, MapContainer, Popup, TileLayer, Tooltip, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function SearchLocation({ query, onQueryChange }) {
    const map = useMap()
    const [message, setMessage] = useState('')
    const [searching, setSearching] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!query.trim() || searching) return

        setMessage('')
        setSearching(true)
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=${encodeURIComponent(query)}`, {
                headers: { Accept: 'application/json' },
            })
            if (!response.ok) throw new Error('Search failed')

            const [location] = await response.json()
            if (!location) {
                setMessage('Lugar não encontrado')
                return
            }

            map.flyTo([Number(location.lat), Number(location.lon)], 15)
        } catch {
            setMessage('Não foi possível buscar agora')
        } finally {
            setSearching(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="absolute z-[1000] top-3 left-3 right-3 sm:left-4 sm:right-auto sm:w-80">
            <div className="flex gap-2">
                <input
                    aria-label="Buscar endereço ou lugar"
                    value={query}
                    onChange={(event) => onQueryChange(event.target.value)}
                    placeholder="Buscar endereço ou lugar"
                    className="min-w-0 flex-1 rounded-lg bg-white p-2.5 text-sm text-mapa-dark shadow-md outline-none placeholder:text-gray-500"
                />
                <button type="submit" disabled={searching} className="rounded-lg border-2 border-mapa-dark bg-mapa-yellow px-3 text-xs font-black text-mapa-dark shadow-md disabled:opacity-60">
                    {searching ? '...' : 'Ir'}
                </button>
            </div>
            {message && <p className="mt-2 rounded-lg bg-white px-3 py-2 text-xs font-bold text-mapa-orange shadow-md">{message}</p>}
        </form>
    )
}

export default function Map({ places = [] }) {
    const [query, setQuery] = useState('')
    const center = places.length ? [places[0].coords[0], places[0].coords[1]] : [-23.55, -46.63]

    return (
        <div className="relative w-full">
            <MapContainer center={center} zoom={12} scrollWheelZoom className="h-[65vh] min-h-[400px] w-full sm:h-[75vh] md:h-[80vh]">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <SearchLocation query={query} onQueryChange={setQuery} />
                {places.map((place) => (
                    <CircleMarker
                        key={place.id || place.nome || place.name}
                        center={place.coords}
                        radius={9}
                        pathOptions={{ color: '#121212', fillColor: '#F6511D', fillOpacity: 1, weight: 3 }}
                    >
                        <Tooltip direction="top" offset={[0, -8]}>{place.nome || place.name}</Tooltip>
                        <Popup>
                            <strong>{place.nome || place.name}</strong>
                            <p>{place.descricao || place.desc || ''}</p>
                        </Popup>
                    </CircleMarker>
                ))}
            </MapContainer>
        </div>
    )
}