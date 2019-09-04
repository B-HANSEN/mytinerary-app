import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';

export class Logout extends Component {
  state = {
    redirect: false 
  };
 
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  setRedirect = () => {
     this.setState({ redirect: true })
  }
  renderRedirect = () => {
    if(this.state.redirect) {
      return <Redirect to='/' />
    }
  } 


  // setRedirect = () => { this.setState({ redirect: true }) }
  // renderRedirect = () => {
  //     this.props.location.replace('/') 
  //     return <Redirect to={ '/' } />
  // }

  // renderRedirect = () => {
  //   this.props.history.push("/");
  // }

test = () => {
  console.log("iiss");
  
}

  render() {
    return (
      <Fragment>

      { this.renderRedirect() }
        {/* <NavLink onClick={this.props.logout}> */}
        <NavLink to={'/'} >
        
          Logoutsss
        </NavLink>

        {/* <NavItem>
          <NavLink to={ '/' }></NavLink>
        </NavItem> */}

      </Fragment>
    );
  }
}

export default connect(null, { logout }) (Logout);