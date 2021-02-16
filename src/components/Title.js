import React, { Component } from 'react';
import './Title.css';

export default class Title extends Component
{

  render()
  {
    return (
      <div className="wrapper">
        <div className="blue-block-1">
        </div>
        <div className="title-wrapper">
          <div className="title">
            CLIMATEHACKS
          </div>
          <div className="date">
            Sat April 24-25 2021
          </div>
        </div>
        <div className="rotated">
        </div>
        <div className="blue-bar">
        </div>
      </div>
    )
  }
}
