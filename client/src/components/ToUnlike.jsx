import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites, removeLikes } from '../actions/favActions';
import { FaHeart } from 'react-icons/fa';

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
      <FaHeart className='bluehighlight' />
    </button>
  );
}

export default ToUnlike;
