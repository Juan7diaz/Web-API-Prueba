import axios from 'axios'
const BASE_URL = 'http://127.0.0.1:8000/api'

// Función para obtener los datos de UN prodcuto o pedido, dependiendo de lo que nos pasen por parametro
export const getData = async (path) => {
  try {
    const response = await axios.get(`${BASE_URL}${path}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
