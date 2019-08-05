import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCities } from '../actions/citiesActions';
import Search from '../components/Search';
// import { set } from 'mongoose';

class Cities extends Component { 
  state = {
    cities: [],
    searchfield: "",
    filteredCities: []
    // this.handleInput = this.handleInput.bind(this)
  }

  componentDidMount() {
    this.props.getCities();
  }

  handleInput = (e) => {
    console.log(e.target.value)
    this.setState({ searchfield: e.target.value })
  }

  render () {
    console.log("Hello World", this.props.city.cities);
    
    let filteredCities = this.props.city.cities.filter((city)  => {
      return city.city.toLowerCase().includes(this.state.searchfield.toLowerCase())
      }
    )

    // filteredCities = this.props.city.cities.map(city => 
    //   <li key = { city._id } > { city.country }: { city.city } </li>
    //   ) 



    return (
      <div>
        <h1>Cities</h1>
         {/* pass down to component */}
          <Search handleInput={this.handleInput}/>
          <ul> {  filteredCities.map(city => 
        <li key = { city._id }> { city.country }: { city.city } </li>
        )  } </ul>  
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