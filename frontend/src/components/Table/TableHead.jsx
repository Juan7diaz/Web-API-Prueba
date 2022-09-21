import { Th, Thead, Tr } from '@chakra-ui/react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export const TableHead = ({ data = [] }) => {
  const arrTitle = Object.keys(data[0])
  return (
    <Thead>
      <Tr>
        {arrTitle.map((item) => (
          <Th key={item}>{item}</Th>
        ))}
      </Tr>
    </Thead>
  )
}

PropTypes.TableHead = {
  data: PropTypes.array.isRequired,
}
