import React from 'react';
import Slider from './activitySlider.js';

import './singleCity.css';
import prof1 from '../images/GaudiLover.png';


function Activities(props) {
  if (!props.more) {
    return null;
  }
  return (
    <div className="activities">
     <Slider />
    </div>
  );
}

class SingleCity extends React.Component {
      state = {
        showActivities: false
        // ,
        // img: this.props.city.img
      };
      handleToggleClick = this.handleToggleClick.bind(this);

    handleToggleClick() {
      this.setState(state => ({
        showActivities: !state.showActivities
      }));
    }

    render () {
        return (
            <div className="textAndLink">
                <div className="allDetailsIt">
                    <div className="profilePic">
                        <img className="prof" src={prof1} alt="prof1" />
                    </div>

                    <div className="overview">   
                        <h3 className="titleIt">Itinerary title</h3>
                        <div className="details">
                          <div className="singleDetails">Likes</div>
                          <div className="singleDetails">Time</div>
                          <div className="singleDetails">Price</div>
                        </div>
                        <div className="details">
                          <div className="singleDetails">hash1</div>
                          <div className="singleDetails">hash2</div>
                          <div className="singleDetails">hash3</div>
                        </div>
                    </div>
                </div>

                <div>
                    <Activities more={this.state.showActivities} />
                    <button onClick={this.handleToggleClick}>
                    {this.state.showActivities ? 'Close' : 'View all'}
                    </button>
                </div>
            </div>
        )
    }
}

export default SingleCity;