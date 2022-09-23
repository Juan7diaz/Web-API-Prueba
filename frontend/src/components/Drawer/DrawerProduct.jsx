import { useRef } from 'react'
import { Stack, Box, FormLabel, Input } from '@chakra-ui/react'
import { ModalLayout } from '../../layout/ModalLayout'
import { useForm } from '../../hooks/useForm'
import { createProduct } from '../../services/products'
import { useNavigate } from 'react-router-dom'

export const DrawerProduct = () => {
  const MAXIMUM_SIZE_ALLOWED = 20
  const DIGITS_MAXIMUM = 8
  const firstField = useRef()

  const navigate = useNavigate()

  const { onInputChange, name, price, code } = useForm({
    name: 'bolso juan veles',
    price: '',
    code: '',
  })

  const handleSubmit = () => {
    const isNameValid = name.length <= MAXIMUM_SIZE_ALLOWED && name.length > 0
    const isCodeValid = code.length <= DIGITS_MAXIMUM && code.length > 0 && !isNaN(code)
    if (isNameValid && isCodeValid) {
      console.log(createProduct({ name, code, price }).name)
      navigate('/') // solución temporal para que cargue el nuevo producto
    }
  }

  return (
    <>
      <ModalLayout title='Add a new product' handleSubmit={handleSubmit}>
        <Stack spacing='24px'>
          <Box>
            <FormLabel>Product name</FormLabel>
            <Input
              ref={firstField}
              placeholder='enter the product name'
              name='name'
              value={name}
              onChange={onInputChange}
            />
          </Box>
          <Box>
            <FormLabel>Product code</FormLabel>
            <Input
              ref={firstField}
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
