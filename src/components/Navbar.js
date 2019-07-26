import React from 'react'

// import hamburger menu
import { slide as Menu } from 'react-burger-menu'


// class Navbar extends React.Component {
//     showSettings (event) {
//       event.preventDefault();
//     }

//     render () {
//       return (
//         <Menu>
//           <a id="home" className="menu-item" href="/">Home</a>
//           <a id="createAccount" className="menu-item" href="../Views/createaccount">Create Account</a>
//           <a id="login" className="menu-item" href="../Views/login">Login></a>/a>
//           <a id="mytinerary" className="menu-item" href="../Views/mytinerary">MYtinerary</a>
//           <a id="cities" className="menu-item" href="../Views/cities">Cities</a>
//           <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
//         </Menu>
//       );
//     }
//   }

// export default Navbar

export default props => {
    return (
      // Pass on our props
      <Menu {...props}>
        <a className="menu-item" href="/">Home</a>
        <a className="menu-item" href="/createaccount">Create Account</a>
        <a className="menu-item" href="/login">Login</a>
        <a className="menu-item" href="/mytinerary">MYtinerary</a>
        <a className="menu-item" href="/cities">Cities</a>
      </Menu>
    );
  };