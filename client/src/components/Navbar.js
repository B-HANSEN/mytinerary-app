// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import { Link } from 'react-router-dom'

// export default function Navbar() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   function handleClick(event) {
//     setAnchorEl(event.currentTarget);
//   }

//   function handleClose() {
//     setAnchorEl(null);
//   }

//   return (
//     <div>
//       <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
//         Menu
//       </Button>
//       <Menu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <Link to="/">
//         <MenuItem onClick={handleClose}>Home
//         </MenuItem>
//         </Link>

//         <Link to="/createaccount">
//         <MenuItem onClick={handleClose}>Create Account
//         </MenuItem>
//         </Link>

//         {/* <Link to="/login">
//         <MenuItem onClick={handleClose}>Login
//         </MenuItem>
//         </Link> */}

//         <Link to="/cities">
//         <MenuItem onClick={handleClose}>Cities
//         </MenuItem>
//         </Link>

//       </Menu>
//     </div>
//   );
// }