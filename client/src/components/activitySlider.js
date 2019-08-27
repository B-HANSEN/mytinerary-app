import React from "react";
import { connect } from 'react-redux';
import Slider from "react-slick";

import { getActivities } from '../actions/itActions';
import PropTypes from 'prop-types';

import './components.css';


class ActivitySlider extends React.Component { 
  state = {
    settings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    },
    activities: [],
    activity: {},
    style: {
      width: '250px'
    }
  }

  componentDidMount() {
          this.props.getActivities(this.props.itinID) // load single city and all its activities related to all itinIds
      }
  
  render() {
    console.log(this.props);
    return (
      <div>
      
        <h2>Activities</h2>
        <Slider {...this.state.settings} style={this.state.style}>
                
      {this.props.activity.activities.map(activity => 
        <div className="">
            <img className="actPic" src={ activity.actPic } alt="actPic" />
            <h5 className="">{ activity.actPlace }</h5>
        </div>   
      )}

         

        </Slider>
      </div>
    );
  }
}

ActivitySlider.propTypes = {
  getActivities: PropTypes.func.isRequired,
  activity: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  activity: state.activity
})

// export ActivitySlider;
export default connect (mapStateToProps, { getActivities }) (ActivitySlider)