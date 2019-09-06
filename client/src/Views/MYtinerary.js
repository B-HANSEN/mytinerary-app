import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import BackButton from './../components/BackButton.js';
import Footer from './../components/Footer'

import SingleItin from '../components/SingleItin'
import { getItineraries } from '../actions/itActions';
import { getCityById } from '../actions/citiesActions';

import PropTypes from 'prop-types';
import './views.css';

// second Itinerary’s like request to fail
// this line below import statements:
// const shouldFail = id => [2].includes(id);


// define the request that the app will send after click on heart icon
// function likeItineraryRequest(itinId, like) {
//   console.log(`HTTP /like_tweet/${itinId}?like=${like} (begin)`);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldSucceed = !shouldFail(itinId);
//       console.log(
//         `HTTP /like_itinerary/${itinId}?like=${like} (${
//           shouldSucceed ? 'success' : 'failure'
//         })`
//       );
//       shouldSucceed ? resolve() : reject();
//     }, 1000);
//   });
// }


class MYtinerary extends React.Component {
      state = {
        itineraries: [],
        redirect: false,
        isLiked: false
      }

      componentDidMount() {
        console.log(this.props);
        this.props.getCityById(this.props.match.params.cityId) // load single city page showing cityPic
        this.props.getItineraries(this.props.match.params.cityId) // load all itineraries related to this city
      }

      // link back to Cities page
      setRedirect = () => {
        this.setState({ redirect: true })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/cities' />
        }
      } 

    render () {
      console.log(this.props);
      const { itineraries, favorites } = this.state;
    
    
      return (
        <div>
          <div className="title">
              <img className="titlePic" src={ this.props.city.city.img } alt="titlePic" />
              <h3>{ this.props.city.city.city }</h3>
              <h3>Available MYtineraries:</h3>
              <div>
                {this.props.itinerary.itineraries.map((itinerary, index) => 
                // {this.props.itinerary.itineraries.map((itinerary) => 
                
                <SingleItin
                    key={ index }
                    // key={ itinerary.id } 
                    itin={ itinerary }
                   // isLiked={ favorites.includes(itinerary.id) }
                    // onClickLike={itinId => likeItineraryRequest(itinId, true)}
                    // replace the previous onClickLike statement with this:
                    onClickLike = { this.onClickLike }
                  />
                )}
              </div>
          </div>
        
          {/* link back to Cities page */}  
          <div className="center">     
              { this.renderRedirect() }
                  <button className="otherCity" onClick={ this.setRedirect }>Choose another city...
                  </button>
          </div>

        
          {/* navigation buttons */}  
          <div className="navbuttons">
              <BackButton />
              <Footer />
              <button className="dummyButton"></button>
          </div>

        </div>
      );
  };
};

MYtinerary.propTypes = {
  getItineraries: PropTypes.func.isRequired,
  getCityById: PropTypes.func.isRequired,
  itinerary: PropTypes.object.isRequired,
  city: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  itinerary: state.itinerary,
  city: state.city
});

export default connect (mapStateToProps, { getItineraries, getCityById }) (MYtinerary)