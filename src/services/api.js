const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export async function fetchPlaces() {
  const response = await fetch(`${API_URL}/api/places`)
  if (!response.ok) throw new Error('Não foi possível carregar os lugares')
  return response.json()
}
