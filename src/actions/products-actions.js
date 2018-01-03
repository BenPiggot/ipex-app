import { GET_PRODUCTS, CLEAR_PRODUCT_LIST } from '../constants';
import * as Api from '../api';

export const getProducts = (filters) => {
  return dispatch => {
    Api.getProducts(filters).then(products => {
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