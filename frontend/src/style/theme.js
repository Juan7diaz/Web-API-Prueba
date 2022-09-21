import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const colors = {
  background: '#011627',
}

const theme = extendTheme({ config, colors })

export default theme
