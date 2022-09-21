import { useRef } from 'react'
import { Stack, Box, FormLabel, Input } from '@chakra-ui/react'
import { ModalLayout } from '../../layout/ModalLayout'
import { useForm } from '../../hooks/useForm'
// import { getProduct } from '../../services/products'

export const DrawerProduct = () => {
  const firstField = useRef()

  const { onInputChange, formState } = useForm({
    name: '',
    price: '',
    code: '',
  })

  console.log(formState)

  return (
    <>
      <ModalLayout title='Add a new product'>
        <Stack spacing='24px'>
          <Box>
            <FormLabel>Product name</FormLabel>
            <Input
              ref={firstField}
              placeholder='enter the product name'
              name='name'
              value={formState.name}
              onChange={onInputChange}
            />
          </Box>
          <Box>
            <FormLabel>Product code</FormLabel>
            <Input
              ref={firstField}
              placeholder='enter the product code'
              name='code'
              value={formState.code}
              onChange={onInputChange}
            />
          </Box>
          <Box>
            <FormLabel>Price of the product</FormLabel>
            <Input
              type='number'
              placeholder='enter the price'
              name='price'
              value={formState.price}
              onChange={onInputChange}
            />
          </Box>
        </Stack>
      </ModalLayout>
    </>
  )
}
