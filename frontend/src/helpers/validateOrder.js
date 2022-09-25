// validaciones para el formulario de pedidos
export const validateOrder = ({ quantity, orderNumber, product, user }) => {
  const errors = {}

  const isQuantityValid = parseInt(quantity) > 0
  const isOrderNumberValid = orderNumber > 0 && orderNumber <= 99999999
  const isIdProductValid = product > 0 && !isNaN(product)
  const isIdUserValid = user > 0 && !isNaN(user) && user.length > 0

  if (!isQuantityValid) {
    errors.quantity = 'Quantity must be greater than 0'
  }

  if (!isOrderNumberValid) {
    errors.orderNumber = 'Order number must be less than 8 digits'
  }

  if (!isIdProductValid) {
    errors.product = 'A product must be selected'
  }

  if (!isIdUserValid) {
    errors.user = 'A user must be selected'
  }

  return errors
}
