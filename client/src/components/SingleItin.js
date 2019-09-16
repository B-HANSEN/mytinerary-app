import React from 'react';
import ActivitySlider from './activitySlider.js';
import { connect } from 'react-redux';
import { getItineraries } from '../actions/itActions';
import './singleItin.css';
import PropTypes from 'prop-types';
import ToLike from "./ToLike";
import ToUnlike from "./ToUnlike";
import Comments from "./Comments";
import { loadUser } from '../actions/authActions';


// Why !props, should be other way around??
// stateless comp always receive props
function Activities(props) {
  if (!props.more) {
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
        showComments: false,
        reload: false
      };
    
    handleToggleActivities = () => {
      this.setState(state => ({
        showActivities: !state.showActivities
      }));
    }

    handleToggleComments = () => {
      this.setState(state => ({
        showComments: !state.showComments
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

                {/* if user is authenticated, check if itinerary is included in his favorites */}
                        { this.props.auth.user ? this.props.auth.user.favorites.includes(this.props.itin._id)
                        ? (<ToUnlike
                            itinId= { this.props.itin._id }
                            cityId={ this.props.itin.cityId } 
                            />)
                        : (<ToLike
                            itinId= { this.props.itin._id }
                            cityId={ this.props.itin.cityId }  
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

                <Activities more={ this.state.showActivities } itinId={this.props.itin._id} />


{/* only when showActivities is true, show comments */}

                <Comments user={this.props.auth.user} />
                { this.state.showActivities
                  ? (<button className="view_close" onClick={ this.handleToggleComments }>
                      { this.state.showComments ? 'Hide comments' : 'View comments' }
                    </button>)
                  : null
                }
                

                <button className="view_close" onClick={ this.handleToggleActivities }>
                    { this.state.showActivities ? 'Close' : 'View activities' }
                </button>

            </div>
        )
    }
}


SingleItin.propTypes = {
// TODO: check if getItineraries can be removed
  // getItineraries: PropTypes.func.isRequired,
  city: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  city: state.city
})

export default connect (mapStateToProps, { getItineraries, loadUser }) (SingleItin)