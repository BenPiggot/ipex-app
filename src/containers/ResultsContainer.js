import React, { Component } from 'react';
import { connect } from 'react-redux';
import Result from '../components/Result';

import './ResultsContainer.scss';

class ResultsContainer extends Component {
  render() {
    return (
      <div className="results-container">
        {
          this.props.products ? 
          this.props.products.map(p => {
            return ( 
              <Result {...p} />
            )
          }) : null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(ResultsContainer);
