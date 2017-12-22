import { UPDATE_FILTER_OPTION } from '../constants';

export const updateFilterOption = (filter, option) => ({
  type: UPDATE_FILTER_OPTION,
  data: {
    filterName: filter,
    optionName: option
  }
})