import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux';

// import components & styles
import RegisterModal from './../components/auth/RegisterModal';
import LoginModal from './../components/auth/LoginModal';
// import CreateItinerary from  './CreateItinerary';
import Footer from './../components/Footer'
import logo from '../files/images/MYtineraryLogo.png';
import arrow from '../files/images/circled-right-2.png';
import './views.css';


class Home extends React.Component {
    state = {
      redirectCities: false
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
                  <button 
                    onClick={ this.setRedirectCities }>
                      <img className="arrow" src={arrow}  alt="arrow" />
                  </button>
            </div>
            
            <p className="bold">Want to build your own itinerary?</p>
            <div className="links">

             <button onClick={ () => this.setState({ showModal: true }) }>
                { isAuthenticated 
                  ? <Link to="/CreateItinerary" className="bluehighlight">Create your own itinerary here...</Link>
                  : <LoginModal open={this.state.showModal}></LoginModal> 
                }
             </button>

             <button onClick={ () => this.setState({ showModal: true }) }>
                { isAuthenticated
                  ? null
                  : <RegisterModal open={this.state.showModal}></RegisterModal>
                }
              </button> 


            </div>
          
            <div>
            <Footer />
            </div>

          </div>
         
      )
    }
}


const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, {  }) (Home);