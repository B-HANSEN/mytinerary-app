import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

// import icon
import home from '../images/homeIcon.png';


class BackHome extends Component { 
state = { redirect: false }

// link to home page
setRedirect = () => {
  this.setState({ redirect: true })
}
renderRedirect = () => {
  if (this.state.redirect) {
    return <Redirect to='/' />
  }
}

render() {
    return (
        <button onClick={ this.setRedirect }>
            <img className="home" src={ home } alt="titlePic" />
            { this.renderRedirect() }
            {/* moved the renderRedirect into the button and removed the root-div */}
        </button>
    )
  }
}

export default BackHome;