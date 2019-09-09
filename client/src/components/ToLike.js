import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFavorites, addToFavorites, addLikes } from '../actions/favActions';
import { loadUser } from '../actions/authActions';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon } from "mdbreact";


class ToLike extends Component {
    state = {
        liked: false,
        likes: 0
    }

    handleLikes = () => {
        addToFavorites = () => {
            console.log('itinId', this.props.itinId)
            console.log('user._id', this.props)
            this.props.addToFavorites(this.props.itinId, this.props.auth.user._id)
        }
        addLikes = () => {
            // this.props.addLikes(this.props.itinerary.rating)
            this.props.addLikes(this.state.likes)
            this.setState ({ count: this.state.likes + 1 }) 
        };  
    }

    render() {
        return (
            <button 
                liked={ this.state.liked }
                onClick={ this.handleLikes }
            >
            <MDBIcon far icon="heart" />
            </button>
        )
    }
};

ToLike.propTypes = {
    addToFavorites: PropTypes.func.isRequired,
    getFavorites: PropTypes.func.isRequired,
    addLikes: PropTypes.func,
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
    addToFavorites,
    getFavorites,
    loadUser,
    addLikes
}) (ToLike)