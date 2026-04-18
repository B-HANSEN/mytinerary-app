import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites, removeLikes } from '../actions/favActions';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon } from 'mdbreact';

function ToUnlike({ itinId, cityId }) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const decreaseFavorites = () => {
    dispatch(removeFromFavorites(itinId, auth.user._id));
    dispatch(removeLikes(itinId, -1, cityId));
  };

  return (
    <button
      onClick={decreaseFavorites}
      aria-label='Remove from favorites'
      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
    >
      <MDBIcon icon='heart' className='bluehighlight' />
    </button>
  );
}

export default ToUnlike;
