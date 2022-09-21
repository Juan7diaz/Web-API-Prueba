import { useState, useEffect } from 'react'
import { getOrders } from '../services/orders'
import { TableGeneric } from '../components/Table/TableGeneric'
import { DrawerOrder } from '../components/Drawer/DrawerOrder'
import { TableBodyOrder } from '../components/Table/TableBodyOrder'

export const OrdersPage = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const response = await getOrders()
      setOrders(response)
    }
    loadProducts()
  }, [])

  const caption = 'List of all orders placed'

  return (
    <>
      {orders.length > 0 ? (
        <>
          <DrawerOrder />
          <TableGeneric data={orders} caption={caption}>
            <TableBodyOrder data={orders} />
          </TableGeneric>
        </>
      ) : (
        <p>cargando...</p>
      )}
    </>
  )
}
