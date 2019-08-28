import React from "react";
import { connect } from 'react-redux';
import Slider from "react-slick";

import { getActivities } from '../actions/itActions';
import PropTypes from 'prop-types';

import './components.css';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "lightgrey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "lightgrey" }}
      onClick={onClick}
    />
  );
}


class ActivitySlider extends React.Component { 
  state = {
    settings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    },
    activities: [],
    activity: {},
    style: {
      width: '300px'
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
        <Slider {...this.state.settings} style={ this.state.style }>
                
      {this.props.activity.activities.map((activity, index1, index2) => 
        <div className="actPicnPlace">
            <img className="actPic" key={ index1 } src={ activity.actPic } alt="actPic" />
            <p className="actPlace" key={ index2 }>{ activity.actPlace }</p>
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