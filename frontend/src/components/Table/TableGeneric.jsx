import { Table, TableCaption, TableContainer } from '@chakra-ui/react'
import { TableHead } from './TableHead'

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
