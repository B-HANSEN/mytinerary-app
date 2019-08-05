import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import titlePic from '../images/barcelona.jpeg';
import SingleIt from '../components/SingleIt'
import './MYtinerary.css';
import { getItineraries } from '../actions/itActions';


class MYtinerary extends React.Component {
  state = {
    itineraries: [],
    redirect: false 
  }

  componentDidMount() {
    this.props.getItineraries();
  }

  setRedirect = () => {
    this.setState({ redirect: true })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/cities' />
    }
  }
  render () {
    return (
      <div className="title">
          <img className="titlePic" src={titlePic} alt="titlePic" />
          <h3>Available MYtineraries:</h3>
          
          <div>
            <SingleIt/>
            <SingleIt/>
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
  itinerary: state.itinerary
})

export default connect (mapStateToProps, { getItineraries }) (MYtinerary)