import { useState, useEffect } from 'react'
import { getProducts } from '../services/products'
import { TableGeneric } from '../components/Table/TableGeneric'
import { DrawerProduct } from '../components/Drawer/DrawerProduct'
import { TableBodyProduct } from '../components/Table/TableBodyProduct'

export const ProductsPage = () => {
  const [products, setProducts] = useState([])

  // Trae los datos de los productos de la api y al guarda en <products>
  const loadProducts = async () => {
    const response = await getProducts()
    setProducts(response)
  }
  useEffect(() => {
    loadProducts()
  }, [])

  const caption = 'List of products available for order'

  // Muestra solo la tabla si existen productos
  // TODO: hacer que cuando los datos sean 0, muestre que no hay nada
  return (
    <>
      {products.length > 0 ? (
        <>
          <DrawerProduct loadProducts={loadProducts} />
          <TableGeneric data={products} caption={caption}>
            <TableBodyProduct data={products} />
          </TableGeneric>
        </>
      ) : (
        <p>cargando...</p>
      )}
    </>
  )
}
