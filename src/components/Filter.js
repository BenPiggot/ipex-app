import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateFilterOption, removeSelectedOption } from '../actions/filters-actions';

import './Filter.scss';

class Filter extends Component {
  handleClick = (optionName) => {
    this.props.removeSelectedOption(this.props.name, optionName)
  }

  render() {
    return (
      <div className="filter-header">
        <h4 onClick={() => this.props.setActiveFilter(this.props.name)}>
          {this.props.name}
        </h4>
        <div className="active-options">
        {
          this.props.filters[this.props.name].map(option => {
            if (option.chosen) {
              return (
                <div className="selected-option">
                  {option.name}
                  {" "}
                  <span onClick={() => this.handleClick(option.name)}>
                    X
                  </span>
                </div>
              )
            }
          })
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.filters.categories)
  return {
    filters: state.filters.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilterOption(filterName, optionName) {
      dispatch(updateFilterOption(filterName, optionName))
    },
    removeSelectedOption(filterName, optionName) {
      dispatch(removeSelectedOption(filterName, optionName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
