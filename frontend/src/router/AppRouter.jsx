import { Route, Routes, Navigate } from 'react-router-dom'
import { OrdersPage } from '../pages/OrdersPage'
import { ProductsPage } from '../pages/ProductsPage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/orders' element={<OrdersPage />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/*' element={<Navigate to='/products' />} />
    </Routes>
  )
}
