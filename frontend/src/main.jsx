import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'
import theme from './style/theme'
import { BrowserRouter } from 'react-router-dom'

import ShoppyApp from './ShoppyApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <ShoppyApp />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
