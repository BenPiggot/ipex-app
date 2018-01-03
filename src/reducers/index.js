import { combineReducers } from 'redux'; 
import CategoriesReducer from './categories-reducer';
import FiltersReducer from './filters-reducer';
import ProductsReducer from './products-reducer';

const reducers = combineReducers({
  categories: CategoriesReducer,
  filters: FiltersReducer,
  products: ProductsReducer
});

export default reducers;
