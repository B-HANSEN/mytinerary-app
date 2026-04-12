import { NavLink } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/authActions';

function Logout() {
  const dispatch = useDispatch();
  return (
    <>
      <NavLink to={'/'} onClick={() => dispatch(logout())}>Logout</NavLink>
    </>
  );
}

export default Logout;
