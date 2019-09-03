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
        itineraries: []
      }

      componentDidMount() {
        this.props.getUserById(this.props.match.params.userId) // get user for title
        this.props.getFavorites(this.props.match.params.userId) // get the itineraries by userID to show favorites
      }

  render () {
    return (
      <div>
        <div className="title">
            {/* <h3>{ this.props.user.user.name }'s Dashboard</h3> */}
            <h3>User's Dashboard</h3>
             
            {this.props.favorite.favorites.map((favorite, index) => 
                <SingleItin  key={index} fav={ favorite } />
            )}
        </div>
      
        <Footer />
      </div>
    )
  }
}

Favorites.propTypes = {
    getUserById: PropTypes.func.isRequired,
    getFavorites: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    favorite: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    favorite: state.favorite,
    user: state.user  
})

export default connect (mapStateToProps, { getFavorites, getUserById }) (Favorites)