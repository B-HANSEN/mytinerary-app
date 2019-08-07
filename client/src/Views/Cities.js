import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCities } from '../actions/citiesActions';
import Search from '../components/Search';

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
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/itineraries/cityId' />
    }
  }

  render () {
    console.log("Hello World", this.props.city.cities);
    
// show cities that match with what has been input in searchfield
    let filteredCities = this.props.city.cities.filter((city)  => {
      return city.city.toLowerCase().includes(this.state.searchfield.toLowerCase())
      }
    )

// loop through filteredCities and show each city from DB
    let mappedCities = filteredCities.map(city =>
        <p key = { city._id }>
          {this.renderRedirect()}
          <button className="cityIts" onClick={this.setRedirect}>
            <img src={ city.img } alt="titlePic" />
            <br />
            { city.city }, { city.country }
          </button>
        </p>
    ) 

    return (
      <div>
        <h1>Cities</h1>
         {/* pass down to component */}
          <Search handleInput={this.handleInput}/>
          <ul> 
          { mappedCities }
          </ul>  
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