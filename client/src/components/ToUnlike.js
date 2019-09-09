import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFromFavorites, getFavorites } from '../actions/favActions';
import { loadUser } from '../actions/authActions';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon } from "mdbreact";


class ToUnlike extends Component {
    state = {
        liked: true
    }
    removeFromFavorites = () => {
        console.log('itinId', this.props.itinId)
        console.log('user._id', this.props.auth.user._id)
    
     this.props.removeFromFavorites(this.props.itinId, this.props.auth.user._id)
    }

    render() {
        return (
            <button
                liked={ this.state.liked }
                onClick={ this.removeFromFavorites }
            >
            <MDBIcon icon="heart" />
            </button>
        )
    }
};

ToUnlike.propTypes = {
    removeFromFavorites: PropTypes.func.isRequired,
    getFavorites: PropTypes.func.isRequired,
    loadUser: PropTypes.func.isRequired,
    itinerary: PropTypes.object.isRequired,
    user: PropTypes.object
  }

const mapStateToProps = (state) => ({
    itinerary: state.itinerary,
    auth: state.auth,
    favorite: state.favorite
})

export default connect (mapStateToProps, {
    removeFromFavorites,
    getFavorites,
    loadUser
}) (ToUnlike)