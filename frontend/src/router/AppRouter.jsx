import { Route, Routes, Navigate } from 'react-router-dom'
import { OrdersPage } from '../pages/OrdersPage'
import { ProductsPage } from '../pages/ProductsPage'
import { ShowMore } from '../pages/ShowMore'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/orders' element={<OrdersPage />} />
      <Route path='orders/:orderid' element={<ShowMore />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='products/:productid' element={<ShowMore />} />
      <Route path='/*' element={<Navigate to='/products' />} />
    </Routes>
  )
}
