import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts, clearProductList } from '../actions/products-actions';

import './Actions.scss';

class Actions extends Component {
  handleGetClick = () => {
    this.props.getProducts()
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

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts() {
      dispatch(getProducts())
    },
    clearProductList() {
      dispatch(clearProductList())
    }
  }
}

export default connect(null, mapDispatchToProps)(Actions);
