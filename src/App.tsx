import { Suspense, lazy } from 'react'
import './App.css'

const Navbar = lazy(() => import('./components/common/Navbar'))
const Calculator = lazy(() => import('./components/calculator/Calculator'))
const Footer = lazy(() => import('./components/common/Footer'))


function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Navbar />
      <Calculator />
      <Footer />
    </Suspense>
  )
}

export default App
