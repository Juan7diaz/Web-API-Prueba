import { Table, TableCaption, TableContainer } from '@chakra-ui/react'
import { TableHead } from './TableHead'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export const TableGeneric = ({ children, data = [], caption }) => {
  return (
    <TableContainer>
      <Table variant='simple'>
        <TableCaption>{caption && caption}</TableCaption>
        <TableHead data={data} />
        {children}
      </Table>
    </TableContainer>
  )
}

PropTypes.TableGeneric = {
  products: PropTypes.array.isRequired,
}
