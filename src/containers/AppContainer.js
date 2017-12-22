import React, { Component } from 'react';
import { connect } from 'react-redux';

import ActiveFilter from '../components/ActiveFilter';
import Filter from '../components/Filter';

import './AppContainer.css';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFilter: ''
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
    if (this.state.activeFilter) {
      return (
        <ActiveFilter name={this.state.activeFilter} />
      )
    }
  }

  render() { 
    return (
      <div>
        {this.renderFilters()}
        {this.renderActiveFilter()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    products: state.products
  }
}

export default connect(mapStateToProps)(AppContainer);
