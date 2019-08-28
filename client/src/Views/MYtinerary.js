import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import BackButton from './../components/BackButton.js';
import Footer from './../components/Footer'
// import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";

import SingleItin from '../components/SingleItin'
import { getItineraries } from '../actions/itActions';
import { getCityById } from '../actions/citiesActions';

import PropTypes from 'prop-types';
import './views.css';


class MYtinerary extends React.Component {
      state = {
        itineraries: [],
        redirect: false 
      }

      componentDidMount() {
        console.log(this.props);
        this.props.getCityById(this.props.match.params.cityId) // load single city page showing cityPic
        this.props.getItineraries(this.props.match.params.cityId) // load all itineraries related to this city
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
            <h3>{ this.props.city.city.city }</h3>
            <h3>Available MYtineraries:</h3>
            
            <div>
              {this.props.itinerary.itineraries.map((itinerary, index) => 
                <SingleItin  key={index} itin={ itinerary } />
              )}

              {/* <ScrollUpButton ShowAtPosition={50} ToggledStyle={{right: 50}} AnimationDuration={1000} >
              </ScrollUpButton>  */}
            </div>
           
        </div>
      
        {/* link back to Cities page */}  
        <div>     
            { this.renderRedirect() }
                <button className="otherCity" onClick={ this.setRedirect }>Choose another city...
                </button>
        </div> 

       

        {/* navigation buttons */}  
        <div className="navbuttons">
            <BackButton />
            {/* <BackHome /> */}
            <Footer />

           
        </div>

      </div>
    )
  }
}


MYtinerary.propTypes = {
  getItineraries: PropTypes.func.isRequired,
  getCityById: PropTypes.func.isRequired,
  itinerary: PropTypes.object.isRequired,
  city: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  itinerary: state.itinerary,
  city: state.city
})

export default connect (mapStateToProps, { getItineraries, getCityById }) (MYtinerary)