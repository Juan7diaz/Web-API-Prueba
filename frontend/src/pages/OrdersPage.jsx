import { useState, useEffect } from 'react'
import { getOrders } from '../services/orders'
import { TableGeneric } from '../components/Table/TableGeneric'
import { TableBodyOrder } from '../components/Table/TableBodyOrder'
import { DrawerOrder } from '../components/Drawer/DrawerOrder'

export const OrdersPage = () => {
  const [orders, setOrders] = useState([])

  const loadOrders = async () => {
    const response = await getOrders()
    setOrders(response)
  }
  useEffect(() => {
    loadOrders()
  }, [])

  const caption = 'List of all orders placed'

  return (
    <>
      {orders.length > 0 ? (
        <>
          <DrawerOrder loadOrders={loadOrders} />
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
