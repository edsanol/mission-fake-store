import React, { useEffect } from 'react'
import '../styles/MainPage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsAction } from '../store/actions/productActions'
import Products from './Products'

const MainPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const setProducts = () => dispatch(getProductsAction())
    setProducts()
  }, [dispatch])

  let product = useSelector((state) => state.productos.products)
  // console.log(product)

  return (
    <>
      <main className="main__container">
        {product.map((producto) => (
          <Products
            key={producto.id}
            title={producto.title}
            img={producto.image}
            producto={producto}
          />
        ))}
      </main>
      
    </>
  )
}

export default MainPage
