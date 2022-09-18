import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const colors = {
  background: '#FFE789',
  text: '#f0f',
}

const theme = extendTheme({ config, colors })

export default theme
