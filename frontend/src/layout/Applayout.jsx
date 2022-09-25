import { Box, Tabs, TabList, Tab } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const AppLayout = ({ children }) => {
  return (
    <Box bg='background' ml='5%' mr='5%' mt='2rem' mb='2rem' p='2rem' borderRadius='md'>
      <Tabs size='md' variant='enclosed'>
        <TabList>
          <Link to='/products'>
            <Tab>Products</Tab>
          </Link>
          <Link to='/orders'>
            <Tab>Orders</Tab>
          </Link>
        </TabList>
      </Tabs>
      <Box pt='0.5rem'>{children}</Box>
    </Box>
  )
}
