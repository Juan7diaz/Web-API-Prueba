import { useState, useEffect } from 'react'
import { Box, Text, SimpleGrid } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { getData } from '../services/getData'

export const ShowMore = () => {
  // nos obtienes la url donde nos encontramos actualmente
  const { pathname } = useLocation()

  const [data, setData] = useState({})

  // trae unicamente los datos un pedido o prodcuto dependiendo de la url donde se encuentre
  useEffect(() => {
    const loadData = async () => {
      const response = await getData(pathname)
      setData(response)
    }
    loadData()
  }, [])

  // pintamso los datos en una tarjeta
  return (
    <Box mt='2rem'>
      <SimpleGrid columns={2} spacing={5}>
        {Object.entries(data).map((item) => (
          <div key={item[0]}>
            <Text color='#62b3ed'>{item[0]}</Text>
            <Text>{item[1]}</Text>
          </div>
        ))}
      </SimpleGrid>
    </Box>
  )
}
