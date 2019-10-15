import React from 'react'
import { connect } from 'react-redux';
import Footer from './../components/Footer';
import SingleItin from '../components/SingleItin'

import { getFavorites } from '../actions/favActions';
import { getUserById } from '../actions/authActions';

import PropTypes from 'prop-types';
import './views.css';


class Favorites extends React.Component {
  state = {
    favorites: [],
    itineraries: [],
    selectedItin: ""
  }

  componentDidMount() {
      console.log(this.props.match.params.userId);
      
    this.props.getUserById(this.props.match.params.userId) // get user for title
    this.props.getFavorites(this.props.match.params.userId) // get the itineraries by userID to show favorites
  }

  handleSelection = (id) => {
    this.setState({ selectedItin: id })
  }

  render () {
      const { user } = this.props.auth;
      console.log(this.props.auth);
      console.log(this.props);
      
    return (
      <div>
        <div className="title">
            { user ? <h3>{ user.name }'s Dashboard</h3> : "" }
            <br />
            <h6>Favorite itineraries:</h6>

            {this.props.favorite.favorites.map((itinerary, index) => 
                <SingleItin
                  key={ index }
                  itin={ itinerary }
                  selectedItin= { this.state.selectedItin }
                  handleSelection={ this.handleSelection }
                />
              )
            }
        </div>
      
        <Footer />
      </div>
    )                  
  }
}

Favorites.propTypes = {
    getUserById: PropTypes.func.isRequired,
    getFavorites: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    favorite: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    favorite: state.favorite,
    auth: state.auth
})

export default connect (mapStateToProps, { getFavorites, getUserById }) (Favorites)