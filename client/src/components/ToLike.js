import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFavorites, addToFavorites, addLikes } from '../actions/favActions';
import { loadUser } from '../actions/authActions';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon } from "mdbreact";


// reclassify as functional component??
class ToLike extends Component {
    state = {}

    increaseFavorites = () => {
            console.log('itinId', this.props.itinId)
            console.log('user._id', this.props)
            console.log(this.props.cityId);
            console.log(this.props);
            
            this.props.addToFavorites(this.props.itinId, this.props.auth.user._id)
            this.props.addLikes(this.props.itinId, 1, this.props.cityId)
    }

    render() {
        return (
            <button
                onClick={ this.increaseFavorites }
            >
            <MDBIcon far icon="heart" />
            </button>
        )
    }
};

ToLike.propTypes = {
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
    addToFavorites,
    // remove get Fav and load User
    getFavorites,
    loadUser,
    addLikes
}) (ToLike)