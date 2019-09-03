import React from 'react'
import { connect } from 'react-redux';
import Footer from './../components/Footer';
import SingleItin from '../components/SingleItin'

import { getItineraries } from '../actions/itActions';

import PropTypes from 'prop-types';
import './views.css';


class Favorites extends React.Component {
      state = {
        favorites: [],
        itineraries: []
      }

      componentDidMount() {
        console.log(this.props);
          this.props.getItineraries(this.props.match.params.userId) // get the itineraries by userID
      }

  render () {
    return (
      <div>
        <div className="title">
            <h3>{ this.user }'s Dashboard</h3>
             
            {this.props.itinerary.itineraries.map((itinerary, index) => 
                <SingleItin  key={index} itin={ itinerary } />
            )}
        </div>
      
        <Footer />

      </div>
    )
  }
}

Favorites.propTypes = {
  getItineraries: PropTypes.func.isRequired,
  itinerary: PropTypes.object.isRequired,
  favorite: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  itinerary: state.itinerary,
  favorite: state.favorite
})

export default connect (mapStateToProps, { getItineraries }) (Favorites)