import { useEffect, useState } from "react"
import Home from "./pages/Home"
import ProductsPage from "./pages/ProductsPage"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { AppContext } from "./context/AppContext"
import axios from "axios"
import NewsLetter from "./components/NewsLetter"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductPage from "./pages/ProductPage"

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  const [successOpen, setSuccesOpen] = useState(false)
  function addToCart(product, addedQuantity) {
    const checkProductInCart = cart.find(item => item.id === product.id)
    if (checkProductInCart) {
      setCart((prevCart) => prevCart.map((item) => item.id === product.id ?
        { ...item, quantity: item.quantity + addedQuantity } : item
      ))
    }
    else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: addedQuantity }])
    }
    setSuccesOpen(true)
    setTimeout(() => {
      setSuccesOpen(false)
    }, 3000)
  }

  function reduceCartQuantity(product) {
    setCart(prevCart => prevCart.map(item => (item.id === product.id && product.quantity > 1) ? {
      ...item, quantity: item.quantity - 1
    } : item))
  }
  function removeItem(product) {
    setCart(prevCart => prevCart.filter(item => item.id !== product.id))
  }

  function cartLength() {
    let counter = 0;

    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }
  async function fetchProducts() {
    const { data } = await axios.get('https://ecommerce-samurai.up.railway.app/product')
    const productsData = data.data;
    setProducts(productsData)
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <AppContext.Provider value={{ products, addToCart, cart, reduceCartQuantity, removeItem, cartLength, successOpen }}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path='/product/:id' element={<ProductPage />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </Router>
    </AppContext.Provider>
  )
}

export default App
