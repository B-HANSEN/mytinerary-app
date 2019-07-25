import React, { Component } from 'react';
// use React slick:
import Slider from "react-slick";
// Import css files:
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Popular extends Component {
    render () {
            var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            rows: 2,
            slidesPerRow: 2
            };
        return (
            <div className="popular">
                <h3>Popular MYtineraries:</h3>
                <Slider {...settings}>
                    <div className="pictures"><img src="http://placekitten.com/g/400/200" alt="dummy"/></div>
                    <div className="pictures"><img src="http://placekitten.com/g/400/200" alt="dummy"/></div>
                    <div className="pictures"><img src="http://placekitten.com/g/400/200" alt="dummy"/></div>
                    <div className="pictures"><img src="http://placekitten.com/g/400/200" alt="dummy"/></div>
                    <div className="pictures"><img src="http://placekitten.com/g/400/200" alt="dummy"/></div>
                    <div className="pictures"><img src="http://placekitten.com/g/400/200" alt="dummy"/></div>
                    <div className="pictures"><img src="http://placekitten.com/g/400/200" alt="dummy"/></div>
                    <div className="pictures"><img src="http://placekitten.com/g/400/200" alt="dummy"/></div>
                    <div className="pictures"><img src="http://placekitten.com/g/400/200" alt="dummy"/></div>
                    <div className="pictures"><img src="http://placekitten.com/g/400/200" alt="dummy"/></div>
                    <div className="pictures"><img src="http://placekitten.com/g/400/200" alt="dummy"/></div>
                    <div className="pictures"><img src="http://placekitten.com/g/400/200" alt="dummy"/></div>
                    <div className="pictures"><img src="http://placekitten.com/g/400/200" alt="dummy"/></div>
                    <div className="pictures"><img src="http://placekitten.com/g/400/200" alt="dummy"/></div>
                    <div className="pictures"><img src="http://placekitten.com/g/400/200" alt="dummy"/></div>
                    <div className="pictures"><img src="http://placekitten.com/g/400/200" alt="dummy"/></div>
                </Slider>
            </div>
        );
    }
}           

export default Popular