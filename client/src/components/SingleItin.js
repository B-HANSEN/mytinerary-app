import React from 'react';
import ActivitySlider from './activitySlider.js';
import { connect } from 'react-redux';
import { getItineraries } from '../actions/itActions';
import './singleItin.css';
import PropTypes from 'prop-types';
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";


function Activities(props) {
  if (!props.more) {
    return null;
  }
  return (
    <div className="activitySlider">
     <ActivitySlider  itinID={ props.props.itin._id } />
    </div>
  );
}

class SingleItin extends React.Component {
      state = {
        showActivities: false,
        liked: false
      };
    
    handleToggleClick = this.handleToggleClick.bind(this);

    handleToggleClick() {
      this.setState(state => ({
        showActivities: !state.showActivities
      }));
    }


    // handle favorites
    handleLike = () => {
      this.setState(prevState => ({
        likes: prevState.likes + 1,
      }));
    }

    toggleLike = () => {
      this.setState({
        liked: !this.state.liked
      });
    };

    render () {
        return (
            <div className="textAndLink">
                <div className="allDetailsIt">
                    <div className="profilePic">
                        <img className="prof" src= { this.props.itin.profilePic } alt="prof1" />
                        <h6 className="username"> { this.props.itin.username }</h6>
                    </div>

                    <div className="overview">   
                        <h5 className="titleIt">{this.props.itin.title}</h5>

                        <LikeButton itinId={ this.props.itin._id }/>
                        <DislikeButton itinId={ this.props.itin._id }/>

                               
                        <div className="details">
                          <ul>
                            <li className="singleDetails">Likes: {this.props.itin.rating} </li>
                            <li className="singleDetails">Duration: {this.props.itin.duration} hrs </li>
                            <li className="singleDetails">Cost category: {this.props.itin.price} </li>
                            <li className="singleDetails"> {this.props.itin.hashtag} </li>
                          </ul>

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