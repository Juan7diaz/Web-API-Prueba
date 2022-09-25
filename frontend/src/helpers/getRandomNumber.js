// devuelve un numero aleatorio con la cantidad de digitos que se le pase por parametro
export const getRandomNumber = (cant) => {
  return Math.floor(Math.random() * Math.pow(10, cant))
}
