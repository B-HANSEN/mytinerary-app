import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFromFavorites, getFavorites } from '../actions/favActions';
import { loadUser } from '../actions/authActions';

class DislikeButton extends Component {
    state = {}
    removeFromFavorites = () => {
        console.log('itinId', this.props.itinId)
        console.log('user._id', this.props.auth.user._id)
    
     this.props.removeFromFavorites(this.props.itinId, this.props.auth.user._id)
    }

    render() {
        return (
            <button
                variant="primary"
                disliked={ !this.state.liked }
                onClick={ this.removeFromFavorites }
            >
            Unlike
            </button>
        )
    }
};

const mapStateToProps = (state) => ({
    itinerary: state.itinerary,
    auth: state.auth,
    favorite: state.favorite
})

export default connect (mapStateToProps, {
    removeFromFavorites,
    getFavorites,
    loadUser
}) (DislikeButton)