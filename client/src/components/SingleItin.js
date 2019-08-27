import React from 'react';
import ActivitySlider from './activitySlider.js';
import { connect } from 'react-redux';

import { getItineraries } from '../actions/itActions';

import './singleItin.css';
import PropTypes from 'prop-types';
import prof1 from '../images/GaudiLover.png';


function Activities(props) {
  if (!props.more) {
    return null;
  }
  return (
    <div className="">
     <ActivitySlider itinID={props.props.itin._id} />
    </div>
  );
}

class SingleItin extends React.Component {
      state = {
        showActivities: false
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
                        <h3 className="titleIt">{this.props.itin.title}</h3>
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
 
                <Activities more={ this.state.showActivities } props={this.props}/>

                <button className="view_close" onClick={ this.handleToggleClick }>
                  { this.state.showActivities ? 'Close' : 'View all' }
                </button>
            </div>
        )
    }
}

SingleItin.propTypes = {
  getItineraries: PropTypes.func.isRequired,
  itinerary: PropTypes.object.isRequired,
  city: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  itinerary: state.itinerary,
  city: state.city
})

// export SingleItin;
export default connect (mapStateToProps, { getItineraries }) (SingleItin)