/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import M from 'materialize-css';
import gambarcarousel from '../img/ctrlxautomation.jpg'

export class Carousel extends Component {
  componentDidMount() {
    const slider = document.querySelectorAll('.slider');
      M.Slider.init(slider, {
        indicators: false,
        height: 500,
        transition: 600,
        interval: 3000
      });
  }

  render() {
    return (
      <div className="slider">
        <ul className="slides">
          <li>
            <a class="carousel-item"><img src={gambarcarousel}/></a>
            <div className="caption right-align">
              <h2><b>ctrlX AUTOMATION</b></h2>
              <h4 className="light grey-text text-lighten-3"><i>We Move You Win!</i></h4>
            </div>
          </li>
        </ul>
      </div>      
    );
  }
}

export default Carousel;