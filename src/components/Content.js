import React, { Component } from 'react';
import './Content.css';
import WhatIs from './WhatIs.js';
import Volunteer from './Volunteer.js';
import Sponsors from './Sponsors.js';

export default class Content extends Component
{
  render()
  {
    return(
      <div>
        <div className="blue-bar-2">
        </div>
        <div className="content">
          <WhatIs />
          <Volunteer />
          <Sponsors />
        </div>
      </div>
    );
  }
}
