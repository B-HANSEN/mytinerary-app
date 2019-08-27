import React from 'react'
import { Redirect } from 'react-router-dom'

// import components & styles
import BackHome from '../components/BackHome'
import './views.css';
import logo from '../files/images/MYtineraryLogo.png';
import arrow from '../files/images/circled-right-2.png';

class Home extends React.Component {
    state = {
      redirectLogin: false,
      redirectAccount: false,
      redirectCities: false
    }

    // Redirect for Login page
    setRedirectLogin = () => {
      this.setState({ redirectLogin: true })
    }
    renderRedirectLogin = () => {
      if (this.state.redirectLogin) {
        return <Redirect to='/login' />
      }
    }

    // Redirect for Account page
    setRedirectAccount = () => {
      this.setState({ redirectAccount: true })
      }
    renderRedirectAccount = () => {
      if (this.state.redirectAccount) {
        return <Redirect to='/createaccount' />
      }
    }

    // Redirect for Cities page
    // {/* TODO: redirect to itineraries */}
    setRedirectCities = () => {
      this.setState({ redirectCities: true })
      }
    renderRedirectCities = () => {
      if (this.state.redirectCities) {
        return <Redirect to='/cities' />
      }
    }

    render () {
      return (
          <div className="logo">
            <img className="companyLogo" src={logo} alt="logo" />
            <p>Find your perfect trip, designed by insiders <br /> who know and love their cities</p>
            <h2>Start browsing</h2>
            
            <div>
              { this.renderRedirectCities() }
                  <button 
                    onClick={ this.setRedirectCities }>
                      <img className="arrow" src={arrow}  alt="arrow" />
                  </button>
            </div>
            
            <p className="bold">Want to build your own itinerary?</p>
            <div className="links">
              { this.renderRedirectLogin() }
                  <button onClick={ this.setRedirectLogin }>Login
                  </button>

              { this.renderRedirectAccount() }
                  <button onClick={ this.setRedirectAccount }>Create Account
                  </button>

            </div>
          
            {/* home to disable to the home button on the home page? */}
            <div className="home-at-home">
            <BackHome />
            </div>

          </div>
         
      )
    }
}

export default Home