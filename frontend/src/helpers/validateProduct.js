// validaciones para el formulario de prodcutos
export const validateProduct = ({ name, price, code }) => {
  const MAXIMUM_SIZE_ALLOWED = 20
  const DIGITS_MAXIMUM = 8

  const errors = {}

  const isNameValid = name.length <= MAXIMUM_SIZE_ALLOWED && name.length > 0
  const isCodeValid = code.length <= DIGITS_MAXIMUM && code.length > 0 && !isNaN(code)
  const isPriceValid = price > 0

  if (!isNameValid) {
    errors.name = 'Name must be less than 20 characters'
  }

  if (!isCodeValid) {
    errors.code = 'Code must be less than 8 digits'
  }

  if (!isPriceValid) {
    errors.price = 'Price must be greater than 0'
  }

  return errors
}
