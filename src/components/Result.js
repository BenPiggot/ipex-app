import React, { Component } from 'react';

import './Result.scss';

const Result = (props) => {
  const src = props.image ? props.image : 'http://via.placeholder.com/150x150'
  return (
    <div className="grid-x result">
      <div className="small-2 columns">
        <img src={src} />
      </div>
      <div className="small-6 columns result-details">
        <h5>{props.name}</h5>
        <p>{props.description}</p>
      </div>
      <div className="small-2 columns">
        <div className="row result-links">
          <i className="fi-download"></i>
          <span>CATALOG</span>
        </div>
        <div className="row result-links">
          <i className="fi-download"></i>
          <span>MANUAL</span>
        </div>
        <div className="row result-links">
          <i className="fi-download"></i>
          <span>2D DRAWING</span>
        </div>
        <div className="row result-links">
          <i className="fi-download"></i>
          <span>3D DRAWING</span>
        </div>
      </div>
      <div class="small-2 columns result-buttons">
        <div className="row">
          <button className="button secondary small result-btn">
            FREE SAMPLE
          </button>
        </div>
        <div className="row">
          <button className="button secondary small result-btn">
            PRODUCT INQUIRY
          </button>
        </div>
        <div className="row">
          <a href="#">SAVE TO MY LIST</a>
        </div>
      </div>
    </div>
  )
}

export default Result;
