import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFavorites, removeFromFavorites, removeLikes } from '../actions/favActions';
import { loadUser } from '../actions/authActions';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon } from "mdbreact";


class ToUnlike extends Component {
    state = {
        liked: true,
        likes: 0
    }

    handleDislikes = () => {
        removeFromFavorites = () => {
            console.log('itinId', this.props.itinId)
            console.log('user._id', this.props.auth.user._id)
            this.props.removeFromFavorites(this.props.itinId, this.props.auth.user._id)
        }
        removeLikes = () => {
            this.props.removeLikes(this.state.likes)
            this.setState ({ count: this.state.likes - 1 }) 
        }; 
    }
    render() {
        return (
            <button
                liked={ this.state.liked }
                onClick={ this.handleDislikes }
            >
            <MDBIcon icon="heart" />
            </button>
        )
    }
};


ToUnlike.propTypes = {
    removeFromFavorites: PropTypes.func.isRequired,
    getFavorites: PropTypes.func.isRequired,
    removeLikes: PropTypes.func,
    loadUser: PropTypes.func.isRequired,
    itinerary: PropTypes.object.isRequired,
    user: PropTypes.object
  }

const mapStateToProps = (state) => ({
    itinerary: state.itinerary,
    auth: state.auth,
    favorite: state.favorite,
    likes: state.likes,
    liked: state.liked
})

export default connect (mapStateToProps, {
    removeFromFavorites,
    getFavorites,
    loadUser,
    removeLikes
}) (ToUnlike)