import { LinkBox, Tbody, Td, Tr, IconButton } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { InfoIcon } from '@chakra-ui/icons'

// eslint-disable-next-line react/prop-types
export const TableBodyProduct = ({ data = [] }) => {
  return (
    <Tbody>
      {data.map((item) => (
        <LinkBox as={Tr} key={item.id}>
          <Td>
            <Link to={`/products/${item.id}`}>
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
          <Td>{item.name}</Td>
          <Td>{item.code}</Td>
          <Td>{item.price}</Td>
        </LinkBox>
      ))}
    </Tbody>
  )
}

PropTypes.TableBodyProduct = {
  data: PropTypes.array.isRequired,
}
