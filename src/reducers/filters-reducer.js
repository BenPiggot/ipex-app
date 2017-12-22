import { UPDATE_FILTER_OPTION } from '../constants';

function updateFilterOption(state, data) {
  const { filterName, optionName } = data;
  const optionToUpdate = state[filterName].find(opt => opt.name === optionName)
  const updateIndex = state[filterName].findIndex(opt => opt.name === optionName)
  const updatedOption = {...optionToUpdate, active: !optionToUpdate.active }
  const filterToUpdate = state[filterName].filter(opt => opt.name !== optionName)
  const newFilter = Object.assign([], filterToUpdate)
  newFilter.splice(updateIndex, 0, updatedOption)
  return { ...state, [filterName]: newFilter }
}

export default function(state = {}, action) {
  switch(action.type) {
    case UPDATE_FILTER_OPTION:
      return updateFilterOption(state, action.data)
    default:
      return state;
  }
}