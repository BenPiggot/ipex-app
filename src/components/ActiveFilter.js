import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateFilterOption } from '../actions/filters-actions';

import './ActiveFilter.scss';

class ActiveFilter extends Component {
  handleClick = (option) => {
    if (option.active) {
      this.props.updateFilterOption(this.props.name, option.name)
    }
  }

  render() {
    return (
      <div className="filter-column">
        <h4>{ this.props.name }</h4>
        {
          this.props.filters[this.props.name].map(option => {
            const active = option.active ? ' active' : '';
            return (
              <div 
                className={`filter-option-text${active}`}
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
    filters: state.filters.categories
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
