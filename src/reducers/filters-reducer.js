import { UPDATE_FILTER_OPTION } from '../constants';

function handleFilterUpate(state, data) {
  const option = state[data.filterName].find(opt => opt.name === data.optionName)
  const newState = updateOtherFilters(state, option['filters'])
  const newestState = updateFilterOption(newState, data)
  return newestState;
}

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

function updateOtherFilters(state, otherFiltersObject) {
  for (const filter in otherFiltersObject) {
    const optionsArray = otherFiltersObject[filter]
    state[filter].forEach(option => {
      if (optionsArray.includes(option.name)) {
        option.active = !option.active
      }
    })
  }

  return Object.assign({}, state);
}

export default function(state = {}, action) {
  switch(action.type) {
    case UPDATE_FILTER_OPTION:
      return handleFilterUpate(state, action.data)
    default:
      return state;
  }
}
