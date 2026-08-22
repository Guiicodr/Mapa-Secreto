import React, { useEffect, useRef } from 'react'
import { MarkerClusterer } from '@googlemaps/markerclusterer'

const mapsPromises = new globalThis.Map()

function loadGoogleMaps(key) {
  if (mapsPromises.has(key)) return mapsPromises.get(key)

  const promise = new Promise((resolve, reject) => {
    const existing = document.getElementById('gmaps-script')
    if (existing) {
      if (window.google?.maps) {
        resolve()
      } else {
        existing.addEventListener('load', resolve, { once: true })
        existing.addEventListener('error', reject, { once: true })
      }
      return
    }

    const script = document.createElement('script')
    script.id = 'gmaps-script'
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`
    script.async = true
    script.defer = true
    script.onload = resolve
    script.onerror = reject
    document.body.appendChild(script)
  })

  mapsPromises.set(key, promise)
  return promise
}

export default function Map({ places }) {
  const mapRef = useRef(null)
  const searchRef = useRef(null)

  useEffect(() => {
    const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    if (!key || key === 'YOUR_API_KEY_HERE') {
      return
    }

    let active = true
    let cleanup = () => {}

    loadGoogleMaps(key).then(() => {
      if (active) initMap()
    }).catch(() => {})

    function initMap() {
      if (!mapRef.current || !window.google?.maps) return

      const center = places && places.length ? { lat: places[0].coords[0], lng: places[0].coords[1] } : { lat: -23.55, lng: -46.63 }
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 12,
      })
      const markers = []
      let autocomplete

      if (searchRef.current && window.google.maps.places) {
        autocomplete = new window.google.maps.places.Autocomplete(searchRef.current, { types: ['geocode', 'establishment'] })
        autocomplete.bindTo('bounds', map)
        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace()
          if (place.geometry && place.geometry.location) {
            map.panTo(place.geometry.location)
            map.setZoom(14)
          }
        })
      }

      if (places) {
        places.forEach(p => {
          const m = new window.google.maps.Marker({
            position: { lat: p.coords[0], lng: p.coords[1] },
            title: p.nome || p.name
          })

          const infoContent = document.createElement('div')
          infoContent.style.maxWidth = '200px'
          const title = document.createElement('strong')
          title.textContent = p.nome || p.name
          const description = document.createElement('p')
          description.textContent = p.descricao || p.desc || ''
          infoContent.append(title, description)

          const infowindow = new window.google.maps.InfoWindow({
            content: infoContent
          })

          m.addListener('click', () => infowindow.open(map, m))
          markers.push(m)
        })
      }

      if (markers.length) {
        markers.forEach(m => m.setMap(map))
        const clusterer = new MarkerClusterer({ markers, map })

        cleanup = () => {
          clusterer.clearMarkers()
          markers.forEach(marker => marker.setMap(null))
          autocomplete && window.google.maps.event.clearInstanceListeners(autocomplete)
        }
      } else {
        cleanup = () => {
          autocomplete && window.google.maps.event.clearInstanceListeners(autocomplete)
        }
      }
    }

    return () => {
      active = false
      cleanup()
    }

  }, [places])

  const hasGoogleMapsKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY && import.meta.env.VITE_GOOGLE_MAPS_API_KEY !== 'YOUR_API_KEY_HERE'

  if (!hasGoogleMapsKey) {
    return (
      <div className="w-full h-[65vh] sm:h-[75vh] md:h-[80vh] min-h-[400px] bg-mapa-cyan p-6 flex items-end">
        <div className="w-full bg-white border-3 border-mapa-dark rounded-2xl p-5 shadow-[4px_4px_0px_0px_#121212]">
          <p className="text-xs font-black uppercase tracking-widest text-mapa-orange mb-2">Mapa interativo</p>
          <p className="font-bold text-sm leading-relaxed">Adicione uma chave Google Maps em <strong>VITE_GOOGLE_MAPS_API_KEY</strong> para ativar os marcadores e a busca.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full">
      <input
        ref={searchRef}
        aria-label="Buscar endereço ou lugar"
        placeholder="Buscar endereço ou lugar"
        className="absolute z-10 top-3 left-3 right-3 sm:left-4 sm:right-auto sm:w-80 p-2.5 rounded-lg shadow-md bg-white text-sm outline-none"
      />

      <div
        className="w-full h-[65vh] sm:h-[75vh] md:h-[80vh] min-h-[400px] rounded-lg overflow-hidden shadow-md"
        ref={mapRef}
      />
    </div>
  )
}
