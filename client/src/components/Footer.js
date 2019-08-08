import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
// import { Link } from 'react-router-dom'

// import icon
import home from '../images/homeIcon.png';


class Footer extends Component { 
  state = {
    redirect: false
    // handleClick = handleClick.bind(this)
  }

// link to home page
setRedirect = () => {
  this.setState({ redirect: true })
}
renderRedirect = () => {
  if (this.state.redirect) {
    return <Redirect to='/' />
  }
}


// handleClick: function () {

// }



render() {
    return (
        <div className="footer">
            {this.renderRedirect()}
            <button onClick={this.setRedirect}>
              <img className="home" src={ home } alt="titlePic" />
            </button>

            {/* <Link to="/">
              <button onClick={this.handleClick}>
                <img className="home" src={ home } alt="titlePic" />
              </button>
            </Link> */}

        </div>
    )
  }
}

export default Footer;