import { useState, useEffect } from 'react'
import { Box, Text, SimpleGrid } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { getData } from '../services/getData'

export const ShowMore = () => {
  const { pathname } = useLocation()
  const [data, setData] = useState({})

  useEffect(() => {
    const loadData = async () => {
      const response = await getData(pathname)
      setData(response)
    }
    loadData()
  }, [])

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
