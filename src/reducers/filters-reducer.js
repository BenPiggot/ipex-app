import { UPDATE_FILTER_OPTION, REMOVE_SELECTED_OPTION } from '../constants';
import isEmpty from 'lodash.isempty';
import intersection from 'lodash.intersection';
import values from 'lodash.values';

function handleFilterUpate(state, data) {
  const option = state.categories[data.filterName].find(opt => opt.name === data.optionName) 
  const newState = updateFilterOption(state, data)
  const availableOptions = isEmpty(state.selected) ? 
    option['filters'] : 
    intersection(option['filters'], ...values(state.selected))

  const newestState = updateOtherFilters(newState, availableOptions)
  return newestState;
}

function handleRemoveOption(state, data) {
  const option = state.categories[data.filterName].find(opt => opt.name === data.optionName) 
  const newState = removeSelectedOption(state, data)
  const availableOptions = intersection(...values(newState.selected))

  const newestState = updateOtherFilters(newState, availableOptions)
  return newestState;
}

function updateFilterOption(state, data) {
  const { filterName, optionName } = data;
  const optionToUpdate = state.categories[filterName].find(opt => opt.name === optionName)
  const updateIndex = state.categories[filterName].findIndex(opt => opt.name === optionName)
  const updatedOption = {...optionToUpdate, chosen: !optionToUpdate.chosen }
  const filterToUpdate = state.categories[filterName].filter(opt => opt.name !== optionName)
  const newFilter = Object.assign([], filterToUpdate)
  newFilter.splice(updateIndex, 0, updatedOption)
  const newCategories = { ...state.categories, [filterName]: newFilter }
  const newSelected = {...state.selected, [updatedOption.id]: updatedOption.filters }
  return { ...state, categories: newCategories, selected:  newSelected }
}

function removeSelectedOption(state, data) {
  const { filterName, optionName } = data;
  const optionToUpdate = state.categories[filterName].find(opt => opt.name === optionName)
  const updateIndex = state.categories[filterName].findIndex(opt => opt.name === optionName)
  const updatedOption = {...optionToUpdate, chosen: !optionToUpdate.chosen }
  const filterToUpdate = state.categories[filterName].filter(opt => opt.name !== optionName)
  const newFilter = Object.assign([], filterToUpdate)
  newFilter.splice(updateIndex, 0, updatedOption)
  const newCategories = { ...state.categories, [filterName]: newFilter }
  const newSelected = Object.assign({}, state.selected)
  delete newSelected[updatedOption.id]
  return { ...state, categories: newCategories, selected:  newSelected }  
}

function updateOtherFilters(state, filters) {
  for (const filter in state.categories) {
    state.categories[filter].forEach(option => {
      if (isEmpty(state.selected)) {
        option.active = true
      }
      else if (filters.includes(option.id)) {
        option.active = true
      }
      else {
        option.active = false
      }
    })
  }

  return Object.assign({}, state);
}

export default function(state = {}, action) {
  switch(action.type) {
    case UPDATE_FILTER_OPTION:
      return handleFilterUpate(state, action.data)
    case REMOVE_SELECTED_OPTION:
      return handleRemoveOption(state, action.data);
    default:
      return state;
  }
}
