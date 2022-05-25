import axiosClient from '../../config/axios'
import {
  START_GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_UPDATE
} from '../types/productTypes'

export function getProductsAction() {
  return async (dispatch) => {
    dispatch(getProducts())

    try {
      const response = await axiosClient.get('/products')
      dispatch(getProductsSuccess(response.data))
    } catch (error) {
      dispatch(getProductsError())
    }
  }
}

const getProducts = () => ({
  type: START_GET_PRODUCT,
  payload: true
})

const getProductsSuccess = products => ({
  type: GET_PRODUCT_SUCCESS,
  payload: products
})

const getProductsError = () => ({
  type: GET_PRODUCT_ERROR,
  payload: true
})



export function getProductoUpdateAction(id) {
  return async (dispatch) => {
    dispatch(getProducts())

    try {
      const response = await axiosClient.get(`/products/${id}`)
      dispatch(getProductoUpdate(response.data))
    } catch (error) {
      dispatch(getProductsIdError())
    }
  }
}

const getProductoUpdate = products => ({
  type: GET_PRODUCT_UPDATE,
  payload: products
})

const getProductsIdError = () => ({
  type: GET_PRODUCT_ERROR,
  payload: true
})
