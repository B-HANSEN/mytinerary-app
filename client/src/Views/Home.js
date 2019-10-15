import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux';

// import components & styles
import RegisterModal from './../components/auth/RegisterModal';
import LoginModal from './../components/auth/LoginModal';
import { loginSocial } from './../actions/authActions';
import Footer from './../components/Footer'
import logo from '../files/images/MYtineraryLogo.png';
import arrow from '../files/images/circled-right-2.png';
import './views.css';
import GoogleLogin from 'react-google-login';
import PropTypes from 'prop-types';


class Home extends React.Component {
    state = {
      redirectCities: false
    }

    static propTypes = {
      auth: PropTypes.object.isRequired
    };
  

    responseGoogleSuccess = (response) => {
      console.log(response);
      this.props.loginSocial(
        { email: response.profileObj.email, name: response.profileObj.name }  
      );
    }
  
    responseGoogleFail = (response) => {
      console.log(response);
    }

    // Redirect for Cities page
    setRedirectCities = () => {
      this.setState({ redirectCities: true })
      }
    renderRedirectCities = () => {
      if (this.state.redirectCities) {
        return <Redirect to='/cities' />
      }
    }

    renderRedirect = () => {
      return <Redirect to='/' />
  }

    render () {
    const { isAuthenticated } = this.props.auth;
      return (
          <div className="logo">
            <img className="companyLogo" src={logo} alt="logo" />
            <p>Find your perfect trip, designed by insiders <br /> who know and love their cities</p>
            <h2>Start browsing</h2>
            
            <div>
              { this.renderRedirectCities() }
                  <Link to='/cities' onClick={ this.setRedirectCities }>
                      <img className="arrow" src={arrow}  alt="arrow" />
                  </Link>
            </div>
            
            <p className="bold">Want to build your own itinerary?</p>
            <div className="links">

              <Link to='#' onClick={ () => this.setState({ showModal: true }) }>
                    { isAuthenticated
                      ? null
                      : <RegisterModal open={this.state.showModal}></RegisterModal>
                    }
              </Link>

              <div className="login_section">
              <Link to='#' onClick={ () => this.setState({ showModal: true }) }>
                    { isAuthenticated
                      ? <Link to="/CreateItinerary" className="bluehighlight">Create your own itinerary here...</Link>
                      : <LoginModal open={this.state.showModal}></LoginModal> 
                    }
              </Link>

                    { isAuthenticated
                      ? null
                      : <GoogleLogin
                          clientId="207436970178-tt81pf2cbje3tfhb1q4esg4qe1fcjkod.apps.googleusercontent.com"
                          buttonText="Login with Google"
                          icon={true}
                          onSuccess={ this.responseGoogleSuccess }
                          onFailure={ this.responseGoogleFail }
                          cookiePolicy={ 'single_host_origin' }
                    /> }
                
              </div>

            </div>
          
            <div>
              <Footer />
            </div>

          </div>
      )
    }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { loginSocial }) (Home);