import React from 'react';
import ActivitySlider from './activitySlider.js';
import { connect } from 'react-redux';
import { getItineraries } from '../actions/itActions';
import './singleItin.css';
import PropTypes from 'prop-types';
import ToLike from "./ToLike";
import ToUnlike from "./ToUnlike";
import { loadUser } from '../actions/authActions';


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
        reload: false
      };
    
    handleToggleClick = this.handleToggleClick.bind(this);

    handleToggleClick() {
      this.setState(state => ({
        showActivities: !state.showActivities
      }));
    }

    render () {
      console.log(this.props)

        return (
            <div className="textAndLink">
                <div className="allDetailsIt">
                    <div className="profilePic">
                        <img className="prof" src= { this.props.itin.profilePic } alt="prof1" />
                        <h6 className="username"> { this.props.itin.username }</h6>
                    </div>

                    <div className="overview">   
                        <h5 className="titleIt">{this.props.itin.title}</h5>

                        { this.props.auth.user ?  this.props.auth.user.favorites.includes(this.props.itin._id)
                        ? (<ToUnlike
                            itinId= { this.props.itin._id } cityId={this.props.itin.cityId}
                            />)
                        : (<ToLike
                            itinId= { this.props.itin._id } cityId={this.props.itin.cityId}  
                          />) : null 
                        }

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
  auth: state.auth,
  city: state.city
})

export default connect (mapStateToProps, { getItineraries, loadUser }) (SingleItin)