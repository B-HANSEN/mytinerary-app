import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";


import { getCities } from '../actions/citiesActions';
import BackHome from '../components/BackHome'
import Search from '../components/Search';

import './views.css';


class Cities extends Component { 
  state = {
    cities: [],
    searchfield: "",
    images: [],
    filteredCities: [],
    redirect: false 
  }

  componentDidMount() {
    this.props.getCities();
  }

  handleInput = (e) => {
    console.log(e.target.value)
    this.setState({ searchfield: e.target.value })
  }

  // link to single city's itineraries page
  setRedirect = () => {
    this.setState({ redirect: true })
  }
  renderRedirect = (id) => {
    console.log(this.props)
      this.props.location.push('/itineraries/' + id)
      return <Redirect to={'/itineraries/' + id} />
  }

  render () {
    console.log("Hello World", this.props.city.cities);
    
// show cities that match with what has been input in searchfield
    let filteredCities = this.props.city.cities.filter((city) => {
      return city.city.toLowerCase().includes(this.state.searchfield.toLowerCase())
      }
    )

// loop through filteredCities and show each city from DB
    let mappedCities = filteredCities.map(city =>
        <p key = { city._id }>
          <Link to={ "/itineraries/" + city._id }>
            { city.city }
          </Link> 
        </p>
    ) 

    return (
      <div className="cities">
        <h4>Cities</h4>
        
        {/* pass down to component */}
          <Search handleInput={ this.handleInput }/>
          
        {/* list of cities */}
          <a className="new"> 
            { mappedCities }
          </a>

        {/* navigation buttons */}
          <div>
            <BackHome />
            <ScrollUpButton AnimationDuration={1000}>
              </ScrollUpButton> 
          </div>

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