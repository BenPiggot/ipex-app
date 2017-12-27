import React, { Component } from 'react';
import { connect } from 'react-redux';

import ActiveFilter from '../components/ActiveFilter';
import Filter from '../components/Filter';

import './AppContainer.scss';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFilter: 'type'
    }
  }

  setActiveFilter = (name) => {
    this.setState({ activeFilter: name })
  }

  renderFilters() {
    return Object.keys(this.props.filters).map(name => {
      return (
        <Filter setActiveFilter={this.setActiveFilter} name={name} />
      )
    })
  }

  renderActiveFilter() {
    return Object.keys(this.props.filters).map(name => {
      return (
        <ActiveFilter name={name} />
      )
    })
  }

  render() { 
    return (
      <div>
        <div className="selected-header">SELECTED FILTERS</div>
        <div className="filter-header-container">
          {this.renderFilters()}
        </div>
        <div className="filter-by-header">FILTER OPTIONS</div>
        <div className="active-filter-container">
          {this.renderActiveFilter()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters.categories,
    products: state.products
  }
}

export default connect(mapStateToProps)(AppContainer);
