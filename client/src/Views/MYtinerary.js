import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import BackButton from './../components/BackButton.js';
import BackHome from '../components/BackHome'

import SingleItin from '../components/SingleItin'
import { getItineraries } from '../actions/itActions';
import { getCityById } from '../actions/citiesActions';

import './views.css';


class MYtinerary extends React.Component {
  state = {
    itineraries: [],
    redirect: false 
  }

  componentDidMount() {
    console.log(this.props);
    
    // this.props.getItineraries()  // required, because SingleCity sub-component already imported??
    this.props.getItineraries(this.props.match.params.cityId) // load all itineraries related to this city
    this.props.getCityById(this.props.match.params.cityId) // load city page showing cityPic
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

  render () {
    console.log(this.props);
    return (
      <div>
        <div className="title">
            <img className="titlePic" src={ this.props.city.city.img } alt="titlePic" />
            <h3>Available MYtineraries:</h3>
            
            <div>
              <SingleItin />
              <SingleItin />
              <SingleItin />
            </div>
            
        </div>

        <div>     
            { this.renderRedirect() }
                <button className="otherCity" onClick={ this.setRedirect }>Choose another city...
                </button>
        </div> 

        {/* navigation buttons */}  
        <div className="navbuttons">
            <BackButton />
            <BackHome />
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