import { useRef } from 'react'
import { Stack, Box, FormLabel, Input } from '@chakra-ui/react'
import { ModalLayout } from '../../layout/ModalLayout'

export const DrawerOrder = () => {
  const firstField = useRef()

  return (
    <>
      <ModalLayout title='Add a new order'>
        <Stack spacing='24px'>
          <Box>
            <FormLabel htmlFor='username'>Product code</FormLabel>
            <Input
              ref={firstField}
              id='username'
              placeholder='Please enter user name'
              type='number'
            />
          </Box>
        </Stack>
      </ModalLayout>
    </>
  )
}
