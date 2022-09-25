import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/api/orders/'

// trae un array de pedidos
export const getOrders = async () => {
  try {
    const response = await axios.get(BASE_URL)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

// traer un pedido por id
export const getOrder = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

// crear un pedido
export const createOrders = async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}`, user)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
