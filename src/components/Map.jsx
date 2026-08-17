import React, { useEffect, useRef } from 'react'
import { MarkerClusterer } from '@googlemaps/markerclusterer'

export default function Map({places}){
  const mapRef = useRef(null)
  const searchRef = useRef(null)

  useEffect(()=>{
    const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    if(!key){
      console.warn('VITE_GOOGLE_MAPS_API_KEY not set')
      return
    }

    const existing = document.getElementById('gmaps-script')
    if(!existing){
      const s = document.createElement('script')
      s.id = 'gmaps-script'
      s.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`
      s.async = true
      s.defer = true
      document.body.appendChild(s)
      s.onload = initMap
    } else if(window.google){
      initMap()
    }

    function initMap(){
      const center = places && places.length ? { lat: places[0].coords[0], lng: places[0].coords[1] } : { lat: -23.55, lng: -46.63 }
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 12,
      })

      // Autocomplete / search
      if(searchRef.current && window.google.maps.places){
        const ac = new window.google.maps.places.Autocomplete(searchRef.current, { types: ['geocode', 'establishment'] })
        ac.bindTo('bounds', map)
        ac.addListener('place_changed', ()=>{
          const place = ac.getPlace()
          if(place.geometry && place.geometry.location){
            map.panTo(place.geometry.location)
            map.setZoom(14)
          }
        })
      }

      // markers + clustering
      const markers = []
      if(places){
        places.forEach(p => {
          const m = new window.google.maps.Marker({
            position: { lat: p.coords[0], lng: p.coords[1] },
            title: p.name
          })

          const infowindow = new window.google.maps.InfoWindow({
            content: `<div style="max-width:200px"><strong>${p.name}</strong><p>${p.desc}</p></div>`
          })

          m.addListener('click', ()=> infowindow.open(map, m))
          markers.push(m)
        })
      }

      if(markers.length){
        // attach markers to map
        markers.forEach(m => m.setMap(map))
        // cluster
        new MarkerClusterer({ markers, map })
      }
    }

  },[places])

  return (
    <div className="relative">
      <input ref={searchRef} placeholder="Buscar endereço ou lugar" className="absolute z-10 left-4 top-4 p-2 rounded shadow bg-white w-72" />
      <div className="h-96 w-full rounded overflow-hidden shadow" ref={mapRef} />
    </div>
  )
}
