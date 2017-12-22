import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateFilterOption } from '../actions/filters-actions';

import './Filter.css';

class Filter extends Component {
  handleClick = (optionName) => {
    this.props.updateFilterOption(this.props.name, optionName)
  }

  render() {
    return (
      <div className="filter-header">
        <div onClick={() => this.props.setActiveFilter(this.props.name)}>
          {this.props.name}
        </div>
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
  return {
    filters: state.filters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilterOption(filterName, optionName) {
      dispatch(updateFilterOption(filterName, optionName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
