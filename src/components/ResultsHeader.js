import React, { Component } from 'react';

import './ResultsHeader.scss';

class ResultsHeader extends Component {
  render() {
    return (
      <div className="grid-x results-header">
        <div className="small-6 columns results-length">{this.props.resultsLength} results</div>
        <div className="small-6 columns view-changer">
          <div className="view-text">VIEW:</div>
          <div className="view-text">
            <div className="row">
              <i className="fi-list medium"></i>
            </div>
            <div className="row" style={{ marginTop: '-10px'}}>
              LIST
            </div>
          </div>
          <div className="view-text">
            <div className="row">
              <i className="fi-thumbnails medium"></i>
            </div>
            <div className="row" style={{ marginTop: '-10px'}}>
              GRID
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ResultsHeader;
