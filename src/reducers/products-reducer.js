import { GET_PRODUCTS, CLEAR_PRODUCT_LIST } from '../constants';


export default function(state = [], action) {
  switch(action.type) {
    case GET_PRODUCTS:
      return action.products;
    case CLEAR_PRODUCT_LIST:
      return [];
    default:
      return state;
  }
}