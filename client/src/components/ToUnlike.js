import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFromFavorites, removeLikes } from '../actions/favActions';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon } from "mdbreact";


class ToUnlike extends Component {

    decreaseFavorites = () => {
            console.log('itinId', this.props.itinId)
            console.log('user._id', this.props.auth.user._id)

            this.props.removeFromFavorites(this.props.itinId, this.props.auth.user._id)
            this.props.removeLikes(this.props.itinId, -1, this.props.cityId)
    }
    
    render() {
        return (
            <button onClick={ this.decreaseFavorites } >
            <MDBIcon icon="heart" />
            </button>
        )
    }
};

ToUnlike.propTypes = {
    itinerary: PropTypes.object.isRequired,
    user: PropTypes.object
  }

const mapStateToProps = (state) => ({
    itinerary: state.itinerary,
    auth: state.auth
})

export default connect (mapStateToProps, {
    removeFromFavorites,
    removeLikes
}) (ToUnlike)