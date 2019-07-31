import React, { Component } from 'react';
import { connect } from 'react';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types'

const API = 'mongodb+srv://Bjoern2:test1234@cluster0-o5yth.mongodb.net/mytinerary-app?retryWrites=true&w=majority';


class Cities extends Component { 
  componentDidMount() {
    this.props.getItems();

// or do the fetch here?

// fetch API is a promise-based API returning a response object.
// to get actual JSON content, invoke json() method of response object
    getItems = () => {
      this.setState({...this.state, isFetching: true})
          fetch(API)
        .then(response => response.json())
        .then(result => this.setState({ cities: result, isFetching: false }))
        .catch(e => console.log(e));
    } 
  }

  render () {
  // displays a list of countries/cities as a bullet list:
    const cities = ({ cities }) =>
      cities.map(city => 
      <li key={_id }>{country}: {city}</li>) 
  
    return (
      <div>
          <h1>Cities</h1>
          {cities}
      </div>
    )
  };  
}

Cities.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isrequired
}


const mapStateToProps = (state) => ({
    item: itemReducer
})



export default connect (mapStateToProps, { getItems }  ) (Cities)


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