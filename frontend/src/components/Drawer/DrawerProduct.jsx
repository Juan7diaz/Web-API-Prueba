import { Stack, Box, FormLabel, Input, useToast } from '@chakra-ui/react'
import { ModalLayout } from '../../layout/ModalLayout'
import { useForm } from '../../hooks/useForm'
import { createProduct } from '../../services/products'
import { validateProduct } from '../../helpers/ValidateProduct'

/* eslint-disable react/prop-types */
export const DrawerProduct = ({ loadProducts }) => {
  const { onInputChange, name, price, code } = useForm({
    name: '',
    price: '',
    code: '',
  })

  const toast = useToast()

  const handleSubmit = () => {
    const errors = validateProduct({ name, price, code })
    const hasErros = Object.entries(errors).length !== 0
    if (!hasErros) {
      createProduct({ name, code, price })
      loadProducts()
      toast({
        title: 'Created product',
        description: 'A new product has been added to the list.',
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
    } else {
      console.error(errors)
      toast({
        title: 'Error when adding a new product',
        description: errors.name || errors.price || errors.code,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
  }

  return (
    <>
      <ModalLayout title='Add a new product' handleSubmit={handleSubmit}>
        <Stack spacing='24px'>
          <Box>
            <FormLabel>Product name</FormLabel>
            <Input
              placeholder='enter the product name'
              name='name'
              value={name}
              onChange={onInputChange}
            />
          </Box>
          <Box>
            <FormLabel>Product code</FormLabel>
            <Input
              placeholder='enter the product code'
              name='code'
              value={code}
              onChange={onInputChange}
            />
          </Box>
          <Box>
            <FormLabel>Price of the product</FormLabel>
            <Input
              type='number'
              placeholder='enter the price'
              name='price'
              value={price}
              onChange={onInputChange}
            />
          </Box>
        </Stack>
      </ModalLayout>
    </>
  )
}
