import { getUsers } from '../../services/users'
import { DrawerSelect } from './DrawerSelect'
import { getProducts } from '../../services/products'
import { getRandomNumber } from '../../helpers/getRandomNumber'
import { ModalLayout } from '../../layout/ModalLayout'
import { Stack, Box, FormLabel, Input, useToast } from '@chakra-ui/react'
import { useForm } from '../../hooks/useForm'
import { validateOrder } from '../../helpers/validateOrder'
import { createOrders } from '../../services/orders'

export const DrawerOrder = ({ loadOrders }) => {
  const { onInputChange, product, user, orderNumber, quantity } = useForm({
    quantity: 1,
    orderNumber: getRandomNumber(8),
    product: '',
    user: '',
  })

  const toast = useToast()

  const handleSubmit = () => {
    const errors = validateOrder({ quantity, orderNumber, product, user })
    const hasErros = Object.entries(errors).length !== 0
    if (!hasErros) {
      createOrders({ user, product, quantity, orderNumber })
      loadOrders()
      toast({
        title: 'New order created',
        description: 'A new order has been successfully added to the list',
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
    } else {
      console.error(errors)
      toast({
        title: 'Error when creating a new order',
        description: errors.product || errors.user || errors.quantity,
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
            <DrawerSelect
              onInputChange={onInputChange}
              placeholder='select a product'
              label='Select the product to order'
              name='product'
              getData={getProducts}
            />
          </Box>
          <Box>
            <DrawerSelect
              placeholder='select a user'
              onInputChange={onInputChange}
              label='Select a user'
              name='user'
              getData={getUsers}
            />
          </Box>
          <Box>
            <FormLabel>Enter the amount</FormLabel>
            <Input
              type='number'
              placeholder='enter the amount'
              name='quantity'
              value={quantity}
              onChange={onInputChange}
            />
          </Box>
          <Box>
            <FormLabel>order number (autogenerated)</FormLabel>
            <Input
              isDisabled
              type='number'
              name='orderNumber'
              value={orderNumber}
              onChange={onInputChange}
            />
          </Box>
        </Stack>
      </ModalLayout>
    </>
  )
}
