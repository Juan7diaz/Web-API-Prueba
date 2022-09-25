import { extendTheme } from '@chakra-ui/react'

// maneja el tema de la aplicación, se inicializa en modo oscuro

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const colors = {
  background: '#011627',
}

const theme = extendTheme({ config, colors })

export default theme
