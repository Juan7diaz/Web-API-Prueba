import { Tbody, Td, Tr } from '@chakra-ui/react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export const TableBodyProduct = ({ data = [] }) => {
  return (
    <Tbody>
      {data.map((item) => (
        <Tr key={item.id}>
          <Td>{item.id}</Td>
          <Td>{item.name}</Td>
          <Td>{item.price}</Td>
          <Td>{item.code}</Td>
        </Tr>
      ))}
    </Tbody>
  )
}

PropTypes.TableBodyProduct = {
  data: PropTypes.array.isRequired,
}
