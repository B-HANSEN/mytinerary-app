import React from 'react';
import { Redirect } from 'react-router-dom'

// import icons
import logo from '../images/MYtineraryLogo.png';
import arrow from '../images/circled-right-2.png';

class Home extends React.Component {
    state = {
      redirect: false
    }
    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }
    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/login' />
      }
    }
    render () {
      return (
          <div className="logo">
            <img className="companyLogo" src={logo} alt="logo" />
            <p>Find your perfect trip, designed by insiders <br /> who know and love their cities</p>
            <h2>Start browsing</h2>
            
            <div>
              {this.renderRedirect()}
              <button onClick={this.setRedirect}><img className="arrow" src={arrow}  alt="arrow" />
              </button>
            </div>
            
            
            <p className="bold">Want to build your own itinerary?</p>
            <div className="links"></div>
          </div>
      )
    }
}

export default Home