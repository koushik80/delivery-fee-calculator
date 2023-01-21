import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './components/cart/Cart'
import { productData } from './__mock__/data'

const Navbar = lazy(() => import('./components/common/Navbar'))
const Calculator = lazy(() => import('./components/calculator/Calculator'))
const Footer = lazy(() => import('./components/common/Footer'))

function App() {
  const products = JSON.stringify(productData)

  useEffect(() => {
    sessionStorage.setItem('products', products)
  }, [products])


  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  )
}

export default App


