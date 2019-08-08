import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import SingleCity from '../components/SingleCity'
import { getItineraries } from '../actions/itActions';
import { getCityById } from '../actions/citiesActions';

import './MYtinerary.css';
// import titlePic from '../images/barcelona.jpeg';


class MYtinerary extends React.Component {
  state = {
    itineraries: [],
    redirect: false 
  }

  componentDidMount() {
    console.log(this.props);
    
    this.props.getItineraries()
    this.props.getCityById(this.props.match.params.cityId)
  }

  // link back to Cities page
  setRedirect = () => {
    this.setState({ redirect: true })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/cities' />
    }
  }


  // So all you have to do is have <img src={this.props.imagePath} /> in your render

  
  render () {
    console.log(this.props);
    
    
    return (
      <div className="title">
          <img className="titlePic" src={this.props.city.city.img} alt="titlePic" />
          <h3>Available MYtineraries:</h3>
          
          <div>
            <SingleCity/>
            <SingleCity/>
            <SingleCity/>
          </div>
          
          <div>     
          {this.renderRedirect()}
              <button className="otherCity" onClick={this.setRedirect}>Choose another city...
              </button>
          </div> 

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  itinerary: state.itinerary,
  city: state.city
})

export default connect (mapStateToProps, { getItineraries, getCityById }) (MYtinerary)