import React, { useEffect } from 'react'
import '../styles/ProductDetail.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductoUpdateAction } from '../store/actions/productActions'

const ProductDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductoUpdateAction(id))
  }, [id, dispatch])

  let productDetail = useSelector((state) => state.productos.productoeditar)
  let rating = useSelector((state) => state.productos.productoeditar.rating)
  // console.log(productDetail)
  // console.log(rating)

  return (
    <>
      <div className="product-detail__container">
        <div className="product-detail__img">
          <img src={productDetail.image} alt="" />
        </div>
        <div className="product-detail__data">
          <h2>{productDetail.title}</h2>
          <div>
            <p className="tag">$ {productDetail.price}</p>
          </div>
          <div className="product-detail__category">
            <p>{productDetail.category}</p>
          </div>
          <div className="product-detail__description">
            <p>{productDetail.description}</p>
          </div>
          {rating ? (
            <div className="product-detail__rating">
              <p>Rating: {rating.rate}</p> <p>Count: {rating.count}</p>
            </div>
          ) : (
            <p>Cargando</p>
          )}
        </div>
      </div>
      
    </>
  )
}

export default ProductDetail
