import axios from 'axios'

const API = import.meta.env.VITE_API_URL || ''

export const getProducts = async () => await axios.get(`${API}products`)
