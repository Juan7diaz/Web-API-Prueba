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
    errors.idProduct = 'Product id must be greater than 0'
  }

  if (!isIdUserValid) {
    errors.idUser = 'User id must be greater than 0'
  }

  return errors
}
