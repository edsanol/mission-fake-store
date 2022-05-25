import {
  START_GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_UPDATE,
} from '../types/productTypes'

const initialState = {
  products: [],
  error: null,
  loading: false,
  productoeditar: [],
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GET_PRODUCT:
      return {
        ...state,
        loading: action.payload,
      }
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        products: action.payload,
        productoeditar: []
      }
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case GET_PRODUCT_UPDATE:
      return {
        ...state,
        loading: false,
        productoeditar: action.payload,
      }
    default:
      return state
  }
}
