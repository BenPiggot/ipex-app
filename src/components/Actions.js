import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts, clearProductList } from '../actions/products-actions';

import './Actions.scss';

class Actions extends Component {
  handleGetClick = () => {
    const filters = Object.keys(this.props.filters.selected)
    console.log(filters)
    this.props.getProducts(filters)
  }

  handleClearClick = () => {
    this.props.clearProductList()
  }

  render() {
    return (
      <div className="filter-actions">
        <button className="button large warning clear-button" onClick={this.handleClearClick}>Clear Products</button>
        <button className="button large get-button" onClick={this.handleGetClick}>Select Products</button>
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
    getProducts(filters) {
      dispatch(getProducts(filters))
    },
    clearProductList() {
      dispatch(clearProductList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
