import React from 'react';
import { connect } from 'react-redux';
import './singleItin.css';
import PropTypes from 'prop-types';

import ToLike from "./ToLike";
import ToUnlike from "./ToUnlike";
import Comments from "./Comments";
import ActivitySlider from './activitySlider';
import { loadUser } from '../actions/authActions';


// stateless comp always receive props
function Activities(props) {
  if (props.more !== props.itinId) {
    return null;
  }
  return (
    <div className="activitySlider">
     <ActivitySlider itinId={ props.itinId } />
    </div>
  );
}

class SingleItin extends React.Component {
      state = {
        showActivities: false,
        itineraries: [],
        itinerary: {},
        comments: [],
        comment: {},
        reload: false
      };

    handleToggleActivities = () => {
      this.props.handleSelection(this.props.itin._id)
      this.setState({
        showActivities: !this.state.showActivities
      });
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

                {/* if user is authenticated, check if itinerary is included in his favorites */}
                        { this.props.auth.user 
                          ? this.props.auth.user.favorites
                              .includes(this.props.itin._id)
                                ? (<ToUnlike
                                    itinId= { this.props.itin._id }
                                    cityId= { this.props.itin.cityId } 
                                    />)
                                : (<ToLike
                                    itinId= { this.props.itin._id }
                                    cityId= { this.props.itin.cityId }  
                                    />)
                          : null 
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

                <Activities more={ this.props.selectedItin } itinId={ this.props.itin._id } />

                { this.props.selectedItin === this.props.itin._id             
                    ? <Comments itinId={ this.props.itin._id }  />
                    : null
                }

                <button className="view_close" onClick={ this.handleToggleActivities }>
                    { this.props.selectedItin === this.props.itin._id
                      ? 'Check another itinerary'
                      : 'View activities'
                    }
                </button>

                   
            </div>
        )
    }
}

SingleItin.propTypes = {
  city: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  itinerary: state.itinerary,
  auth: state.auth,
  city: state.city
})

export default connect (mapStateToProps, {
  loadUser }) (SingleItin)