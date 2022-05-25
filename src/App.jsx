import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Footer from './components/Footer'
import { Header } from './components/Header'
import MainPage from './components/MainPage'
import ProductDetail from './components/ProductDetail'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/product/detail/:id" element={<ProductDetail />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
