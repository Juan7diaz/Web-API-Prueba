import { Th, Thead, Tr } from '@chakra-ui/react'

export const TableHead = ({ data = [] }) => {
  // arrTitle contiene las key que devuelve la data
  const arrTitle = Object.keys(data[0])

  // para poder colocarlo en el head de la tabla
  return (
    <Thead>
      <Tr>
        <Th>See More</Th>
        {arrTitle.map((item) => (
          <Th key={item}>{item}</Th>
        ))}
      </Tr>
    </Thead>
  )
}
