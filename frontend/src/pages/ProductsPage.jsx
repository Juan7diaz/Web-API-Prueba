import { useState, useEffect } from 'react'
import { getProducts } from '../services/products'
import { TableGeneric } from '../components/Table/TableGeneric'
import { DrawerProduct } from '../components/Drawer/DrawerProduct'
import { TableBodyProduct } from '../components/Table/TableBodyProduct'

export const ProductsPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const response = await getProducts()
      setProducts(response)
    }
    loadProducts()
  }, [])

  const caption = 'List of products available for order'

  return (
    <>
      {products.length > 0 ? (
        <>
          <DrawerProduct />
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
