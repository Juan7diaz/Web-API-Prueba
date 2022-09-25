import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/api/users/'

// estas funciones no se están usando actualmente

export const getUsers = async () => {
  try {
    const response = await axios.get(BASE_URL)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getUser = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const createUser = async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}`, user)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
