import { UPDATE_FILTER_OPTION, REMOVE_SELECTED_OPTION } from '../constants';

export const updateFilterOption = (filter, option) => ({
  type: UPDATE_FILTER_OPTION,
  data: {
    filterName: filter,
    optionName: option
  }
})

export const removeSelectedOption = (filter, option) => ({
  type: REMOVE_SELECTED_OPTION,
  data: {
    filterName: filter,
    optionName: option
  }
})