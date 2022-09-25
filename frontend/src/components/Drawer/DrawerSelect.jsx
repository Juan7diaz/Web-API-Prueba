import { useEffect, useState } from 'react'
import { Select, FormLabel } from '@chakra-ui/react'

export const DrawerSelect = ({ onInputChange, name, label, getData, placeholder }) => {
  const [data, setData] = useState([])

  // traemos los datos ya sea de pedidos o productos segun la funcion que nos pase por props
  useEffect(() => {
    const loadData = async () => {
      const response = await getData()
      setData(response)
    }
    loadData()
  }, [])

  // hacemos un select y eviamos el id (del pedido o producto) con <onChange={onInputChange}>
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
