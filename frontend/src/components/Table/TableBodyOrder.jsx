import { Tbody, Td, Tr } from '@chakra-ui/react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export const TableBodyOrder = ({ data = [] }) => {
  return (
    <Tbody>
      {data.map((item) => (
        <Tr key={item.orderNumber}>
          <Td>{item.orderNumber}</Td>
          <Td>{item.userId}</Td>
          <Td>{item.userName}</Td>
          <Td>{item.address}</Td>
          <Td>{item.phoneNumber}</Td>
          <Td>{item.productId}</Td>
          <Td>{item.productName}</Td>
          <Td>{item.price}</Td>
          <Td>{item.quantity}</Td>
        </Tr>
      ))}
    </Tbody>
  )
}

PropTypes.TableBodyOrder = {
  data: PropTypes.array.isRequired,
}
