import { LinkBox, Tbody, Td, Tr, IconButton } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export const TableBodyOrder = ({ data = [] }) => {
  return (
    <Tbody>
      {data.map((item) => (
        <LinkBox as={Tr} key={item.id}>
          <Td>
            <Link to={`/orders/${item.id}`}>
              <IconButton
                aria-label='add product'
                variant='outline'
                colorScheme='blue'
                fontSize='10px'
                size='sm'
                icon={<InfoIcon />}
              />
            </Link>
          </Td>
          <Td>{item.id}</Td>
          <Td>{item.orderNumber}</Td>
          <Td>{item.userId}</Td>
          <Td>{item.userName}</Td>
          <Td>{item.address}</Td>
          <Td>{item.phoneNumber}</Td>
          <Td>{item.productId}</Td>
          <Td>{item.productName}</Td>
          <Td>{item.price}</Td>
          <Td>{item.quantity}</Td>
        </LinkBox>
      ))}
    </Tbody>
  )
}
