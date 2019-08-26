import React from "react";
import Slider from "react-slick";


export default class ActivitySlider extends React.Component { 
  state={
    settings : {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    },
    style: {
      width: '300px'
    }
  }
  render() {
    
    return (
      <div>
        <h2>Single Item</h2>
        <Slider {...this.state.settings} style={this.state.style} >
        <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          
        </Slider>
      </div>
    );
  }
}
