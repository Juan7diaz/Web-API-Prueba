import { useState, useEffect } from 'react'
import { getOrders } from '../services/orders'
import { TableGeneric } from '../components/Table/TableGeneric'
import { TableBodyOrder } from '../components/Table/TableBodyOrder'
import { DrawerOrder } from '../components/Drawer/DrawerOrder'

export const OrdersPage = () => {
  const [orders, setOrders] = useState([])

  // Trae los datos de los pedidos de la api y al guarda en <orders>
  const loadOrders = async () => {
    const response = await getOrders()
    setOrders(response)
  }
  useEffect(() => {
    loadOrders()
  }, [])

  const caption = 'List of all orders placed'

  // Muestra solo la tabla si existen pedidos
  // TODO: hacer que cuando los datos sean 0, muestre que no hay nada
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
