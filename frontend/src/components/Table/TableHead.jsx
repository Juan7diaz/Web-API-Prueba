import { Th, Thead, Tr } from '@chakra-ui/react'

export const TableHead = ({ data = [] }) => {
  const arrTitle = Object.keys(data[0])
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
