import { Stack, Box, FormLabel, Input, useToast } from '@chakra-ui/react'
import { DrawerLayout } from '../../layout/DrawerLayout'
import { useForm } from '../../hooks/useForm'
import { createProduct } from '../../services/products'
import { validateProduct } from '../../helpers/ValidateProduct'

export const DrawerProduct = ({ loadProducts }) => {
  const { onInputChange, name, price, code } = useForm({
    name: '',
    price: '',
    code: '',
  })

  const toast = useToast()

  const handleSubmit = () => {
    // obetenmos las validaciones
    const errors = validateProduct({ name, price, code })
    const hasErros = Object.entries(errors).length !== 0

    // vemos si hacer la peticion post o lanzar un toast de error dependiendo de las validaciones
    // TODO: hacer que se cierre automaticamente cuando se haga el post
    if (!hasErros) {
      createProduct({ name, code, price })
      loadProducts() // todo: A veces actualiza, a veces no
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
      <DrawerLayout title='Add a new product' handleSubmit={handleSubmit}>
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
      </DrawerLayout>
    </>
  )
}
