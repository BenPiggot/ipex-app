import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateFilterOption } from '../actions/filters-actions';

import './ActiveFilter.css';

class ActiveFilter extends Component {
  handleClick = (option) => {
    if (option.active) {
      this.props.updateFilterOption(this.props.name, option.name)
    }
  }

  render() {
    return (
      <div className="active-filter-container">
        <h4>{ this.props.name }</h4>
        {
          this.props.filters[this.props.name].map(option => {
            const color = option.active ? 'red' : 'black';
            return (
              <div 
                className="filter-option-text"
                style={{ color: color }} 
                onClick={() => this.handleClick(option)}
              >
                { option.name }
              </div>
            )
          })
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(ActiveFilter);
