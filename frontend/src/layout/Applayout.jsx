import { Box } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const AppLayout = ({ children }) => {
  return (
    <Box bg='background' ml='5%' mr='5%' mt='10rem' p='2rem' borderRadius='md'>
      {children}
    </Box>
  )
}

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
