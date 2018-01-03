import { GET_PRODUCTS, CLEAR_PRODUCT_LIST } from '../constants';
import * as Api from '../api';

export const getProducts = () => {
  return dispatch => {
    Api.getProducts().then(products => {
      console.log(products)
      debugger
      dispatch({
        type: GET_PRODUCTS,
        products
      })
    })
  }
}

export const clearProductList = () => {
  return {
    type: CLEAR_PRODUCT_LIST
  }
}