import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
    import { getCities } from '../actions/citiesActions';
    // import { set } from 'mongoose';

class Cities extends Component { 
  state = {
    cities: []
  }

  componentDidMount() {
    this.props.getCities();
  }

  render () {
    console.log("Hello World", this.props.city.cities);
    const cities = this.props.city.cities.map(city => 
      <li key = { city._id } > { city.country }: { city.city } </li>
      ) 

    return (
      <div>
        <h1>Cities</h1>
          <ul> {cities}</ul>
      </div>
    )
  };  
}

Cities.propTypes = {
  getCities: PropTypes.func.isRequired,
  city: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    city: state.city
})

export default connect (mapStateToProps, { getCities }) (Cities)