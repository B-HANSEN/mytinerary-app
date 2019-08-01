import React, { Component } from 'react';
import axios from 'axios';
// import { set } from 'mongoose';


class Cities extends Component { 
  state = {
    cities: []
  }

  componentDidMount() {
    axios.get("/api/cities")
      .then(res => {
        const cities = res.data;
        this.setState({ cities })
      })
  }

  render () {
    console.log("Hola", this.state.cities);
  // displays a list of countries/cities as a bullet list:
    const cities = this.state.cities.map(city => 
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

// Cities.propTypes = {
//   getItems: PropTypes.func.isRequired,
//   item: PropTypes.object.isrequired
// }


// const mapStateToProps = (state) => ({
//     city: cityReducer
// })


export default  Cities