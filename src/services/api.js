import axios from 'axios'

const API_URL = '/api'

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000
})

export const fetchLessons = async () => {
  try {
    const response = await api.get('/lessons')
    return response.data
  } catch (error) {
    console.error('Failed to fetch lessons:', error)
    return []
  }
}

export const speakText = (text, accent = 'en') => {
  try {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = accent === 'us' ? 'en-US' : 'en-GB'
    utterance.rate = 0.8
    window.speechSynthesis.speak(utterance)
  } catch (error) {
    console.error('Failed to speak text:', error)
  }
}

export default api
