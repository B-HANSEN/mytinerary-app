import React, { Component } from 'react';
// import { set } from 'mongoose';




class Cities extends Component { 

  state={
    cities:[]
  }
  componentDidMount() {


// or do the fetch here?

// fetch API is a promise-based API returning a response object.
// to get actual JSON content, invoke json() method of response object


        fetch("/api/cities")
        .then(response => response.json())
        .then(result => this.setState({cities:result}))
        
        .catch(e => console.log(e));
    
  }

  render () {
    console.log("Hola", this.state.cities);
    
  // displays a list of countries/cities as a bullet list:
    const cities = this.state.cities.map(city => 
      <li key={city._id }>{city.country}: {city.city}</li>) 
  
    return (
      <div>
          <h1>Cities</h1>
         <ul> {cities}</ul>
         <ul>{this.state.cities.map(city => 
      <li key={city._id }>{city.country}: {city.city}</li>) }</ul>
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


// ********** Resource: https://reactjs.org/docs/lists-and-keys.html **********
// function fetchCities(props) {
//   const cities = props.cities;
//   const listItems = cities.map((city) =>
//     <li key= {} >{city}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const cities = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={cities} />,
//   document.getElementById('root')
// );