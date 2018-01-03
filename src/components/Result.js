import React, { Component } from 'react';

import './Result.scss';

const Result = (props) => {
  const src = props.image ? props.image : 'http://via.placeholder.com/150x150'
  return (
    <div className="grid-x result">
      <div className="small-2 columns">
        <img src={src} />
      </div>
      <div className="small-4 columns result-details">
        <h5>{props.name}</h5>
      </div>
    </div>
  )
}

export default Result;
