import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/api/products/'

export const getProducts = async () => {
  try {
    const response = await axios.get(BASE_URL)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getProduct = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const createProduct = async (product) => {
  try {
    const response = await axios.post(`${BASE_URL}`, product)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
