import React from 'react'
import useCountdown from './useCountDown'
import '../styles/Products.scss'
import { useNavigate } from 'react-router-dom'

const Products = (props) => {
  const ran = Math.random() * (3 - 0.5) + 0.5
  const endTime = new Date().getTime() + 60000 * ran 
  const [timeLeft] = useCountdown(endTime)

  const minutes = String(Math.floor(timeLeft / 60000) % 60).padStart(2, 0)
  const seconds = String(Math.floor(timeLeft / 1000) % 60).padStart(2, 0)

  const history = useNavigate()

  const handleUpdateProduct = (product) => {
    history(`/product/detail/${product.id}`)
  }

  return (
    <div className="product__main-container">
      <div className="product__main-container-img">
        <img src={props.img} alt="product" />
      </div>
      <div className="product__main-title">
        <p>{props.title}</p>
      </div>
      <div className="product__main-count">
        <p>
          Time: {minutes}:{seconds}
        </p>
        {minutes === '00' && seconds === '00' ? (
          <button type="button" className="product__main-button-disable" >Go To Details</button>
        ) : (
          <button
            type="button"
            className="product__main-button-enable"
            onClick={() => handleUpdateProduct(props.producto)}>
            Go To Details
          </button>
        )}
      </div>
    </div>
  )
}

export default Products
