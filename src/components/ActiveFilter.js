import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ActiveFilter.css';

class ActiveFilter extends Component {
  render() {
    return (
      <div className="active-filter-container">
        { this.props.name }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filter
  }
}

export default connect(mapStateToProps)(ActiveFilter);
