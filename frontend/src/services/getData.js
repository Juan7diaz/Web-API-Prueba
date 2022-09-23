import axios from 'axios'
const BASE_URL = 'http://127.0.0.1:8000/api'

export const getData = async (path) => {
  try {
    const response = await axios.get(`${BASE_URL}${path}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
