import { Stack, Box, FormLabel, Input } from '@chakra-ui/react'
import { ModalLayout } from '../../layout/ModalLayout'
import { useForm } from '../../hooks/useForm'
import { createProduct } from '../../services/products'
import { useNavigate } from 'react-router-dom'
import { validateProduct } from '../../helpers/ValidateProduct'

export const DrawerProduct = () => {
  const navigate = useNavigate()

  const { onInputChange, name, price, code } = useForm({
    name: '',
    price: '',
    code: '',
  })

  const handleSubmit = () => {
    const errors = validateProduct({ name, price, code })
    const hasErros = Object.entries(errors).length === 0
    if (hasErros) {
      createProduct({ name, code, price })
      navigate('/') // solución temporal para que cargue el nuevo producto
    } else {
      console.error(errors)
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
