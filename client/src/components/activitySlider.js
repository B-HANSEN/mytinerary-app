import React from "react";
import { connect } from 'react-redux';
import Slider from "react-slick";

import PropTypes from 'prop-types';
import { getActivities } from '../actions/itActions';
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
    console.log("acttivity", this.props)
          this.props.getActivities(this.props.itinId) // load activities related to itinId received from parent component
      }
                                 
  render() {
    console.log(this.props);
    return (
      <div>
      
        <h2>Activities</h2>
        <Slider {...this.state.settings} style={ this.state.style }>
                
      {this.props.activity.activities.map((activity, index) => 
        <div className="actPicnPlace" key={ index }>
            <img className="actPic"  src={ activity.actPic } alt="actPic" />
            <p className="actPlace">{ activity.actPlace }</p>
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

export default connect (mapStateToProps, { getActivities }) (ActivitySlider)