import { Table, TableCaption, TableContainer } from '@chakra-ui/react'
import { TableHead } from './TableHead'

export const TableGeneric = ({ children, data = [], caption }) => {
  // crea el cascaron para la tabla
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
