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

    // increase favorites
    // handleLike = () => {
    //   this.setState(prevState => ({
    //     likes: prevState.likes + 1,
    //   }));
    // }

    // toggleLike = () => {
    //   this.setState({
    //     liked: !this.state.liked
    //   });
    // };

    // ClickToAdd = () => {
    //   const addLike = {
    //     id: this.props.auth.user._id
    //  // as per Traversy: favId created by MongoDB, remove:
    //     // favId:  this.props.favorite._id
    //   }
    //   this.props.addToFavorites(addLike);
    //   // window.location.reload(false);
    //   this.setState({ reload: true })
    // }

    // ClickToRemove = () => {
    //   const deleteLike = {
    //     id: this.props.auth.user._id,
    //     favId:  this.props.favorite._id
    //   }
    //   this.props.removeFromFavorites(deleteLike);
    //   // window.location.reload(false);
    //   this.setState({ reload: true })
    // }

    render () {
      console.log(this.props)
      // this.ClickToAdd = this.ClickToAdd.bind(this)
      // this.ClickToRemove = this.ClickToRemove.bind(this)
        return (
            <div className="textAndLink">
                <div className="allDetailsIt">
                    <div className="profilePic">
                        <img className="prof" src= { this.props.itin.profilePic } alt="prof1" />
                        <h6 className="username"> { this.props.itin.username }</h6>
                    </div>

                    <div className="overview">   
                        <h5 className="titleIt">{this.props.itin.title}</h5>

                        { this.props.auth.user.favorites.includes(this.props.itin._id)
                        ? (<ToUnlike
                            itinId= { this.props.itin._id }
                            />)
                        : (<ToLike
                            itinId={ this.props.itin._id }
                          />)
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

// export SingleItin;
export default connect (mapStateToProps, { getItineraries, loadUser }) (SingleItin)