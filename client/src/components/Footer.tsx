import { Link } from 'react-router-dom';

// import icon & styles
import home from '../files/images/homeIcon.png';
import './components.css';

const Footer = () => (
  <div className='footerContainer'>
    <Link className='footer' to='/'>
      <img src={home} alt='Home' />
    </Link>
  </div>
);

export default Footer;
