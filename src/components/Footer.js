import React from 'react';
import home from '../images/homeIcon.png';

// import { makeStyles } from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles(theme => ({
//   link: {
//     margin: theme.spacing(1),
//   },
// }));

function Footer () {
    return (
      <div className="footer">
        <p className="bold">Want to build your own itinerary?</p>

        <div className="links">
          
        </div>
        <img className="home" src={home} alt="home" />
    </div>
    )
  }
  
  export default Footer;


  // <Typography>
  //           <Link href={dudUrl} className={classes.link}>
  //           Log in
  //           </Link>
  //           <Link href={dudUrl} className={classes.link}>
  //           Create account
  //           </Link>
  //         </Typography>