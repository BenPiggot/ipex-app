import { combineReducers } from 'redux'; 
import CategoriesReducer from './categories-reducer';
import FiltersReducer from './filters-reducer';

const reducers = combineReducers({
  categories: CategoriesReducer,
  filters: FiltersReducer
});

export default reducers;