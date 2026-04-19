import { NavLink } from 'reactstrap';
import { useAppDispatch } from '../../hooks';
import { logout } from '../../actions/authActions';

function Logout() {
  const dispatch = useAppDispatch();
  return (
    <>
      <NavLink to={'/'} onClick={() => dispatch(logout())}>
        Logout
      </NavLink>
    </>
  );
}

export default Logout;
