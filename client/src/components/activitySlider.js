import React from "react";
import Slider from "react-slick";

import { getActivities } from '../actions/itActions';
import { getCityById } from '../actions/citiesActions';


class ActivitySlider extends React.Component { 
  state={
    settings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    },
    style: {
      width: '200px'
    }
  }

  componentDidMount() {
          this.props.getActivities(this.props.match.params.itinId) // load single city and all its activities related to all itinIds
          this.props.getCityById(this.props.match.params.cityId) // load single city page showing cityPic
      }
  
  render() {
    
    return (
      <div>
      
        <h2>Activities</h2>
        <Slider {...this.state.settings} style={this.state.style}>
                
        <div className="">
            <img className="" src={ this.props.activity.activity.actPic } alt="actPic" />
            <h5 className="">{ this.props.activity.activity.actPlace }</h5>
        </div>     

        </Slider>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  activity: state.itinerary,
  city: state.city
})

export default connect (mapStateToProps, { getActivities, getCityById }) (ActivitySlider)