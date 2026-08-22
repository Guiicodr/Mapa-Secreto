const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export async function submitSuggestion(suggestion) {
    const response = await fetch(`${API_URL}/api/suggestions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(suggestion),
    })

    if (!response.ok) throw new Error('Não foi possível enviar a indicação')
    return response.json()
}
