import React from 'react';
import { connect } from 'react-redux';
import Footer from './../components/Footer';
import SingleItin from '../components/SingleItin';

import { getFavorites } from '../actions/favActions';
import { getUserById } from '../actions/authActions';

import PropTypes from 'prop-types';
import { withRouter } from '../utils/withRouter';
import './views.css';

class Favorites extends React.Component {
  state = {
    favorites: [],
    itineraries: [],
    selectedItin: '',
  };

  componentDidMount() {
    this.props.getUserById(this.props.params.userId);
    this.props.getFavorites(this.props.params.userId);
  }

  handleSelection = (id) => {
    this.setState({ selectedItin: id });
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <div className='title'>
          {user ? <h3>{user.name}'s Dashboard</h3> : ''}
          <br />
          <h6>Favorite itineraries:</h6>

          {this.props.favorite.favorites.map((itinerary, index) => (
            <SingleItin
              key={index}
              itin={itinerary}
              selectedItin={this.state.selectedItin}
              handleSelection={this.handleSelection}
            />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}

Favorites.propTypes = {
  getUserById: PropTypes.func.isRequired,
  getFavorites: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  favorite: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  favorite: state.favorite,
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps, { getFavorites, getUserById })(Favorites));
