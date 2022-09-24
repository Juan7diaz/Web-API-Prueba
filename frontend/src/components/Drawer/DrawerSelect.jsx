import { useEffect, useState } from 'react'
import { Select, FormLabel } from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
export const DrawerSelect = ({ onInputChange, name, label, getData, placeholder }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const response = await getData()
      setData(response)
    }
    loadData()
  }, [])

  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Select placeholder={placeholder} name={name} onChange={onInputChange}>
        {data.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </Select>
    </>
  )
}
