import React, { Component } from 'react';
import { connect } from 'react-redux';

import ActiveFilter from '../components/ActiveFilter';

import './AppContainer.css';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFilter: ''
    }
  }

  handleClick = (name) => {
    this.setState({ activeFilter: name })
  }

  renderFilters() {
    return Object.keys(this.props.filters).map(name => {
      return (
        <div onClick={() => this.handleClick(name)} className="filter-header">{name}</div>
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
