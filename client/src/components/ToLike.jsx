import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, addLikes } from '../actions/favActions';
import { FaRegHeart } from 'react-icons/fa';

function ToLike({ itinId, cityId }) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const increaseFavorites = () => {
    dispatch(addToFavorites(itinId, auth.user._id));
    dispatch(addLikes(itinId, 1, cityId));
  };

  return (
    <button
      onClick={increaseFavorites}
      aria-label='Add to favorites'
      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
    >
      <FaRegHeart className='bluehighlight' />
    </button>
  );
}

export default ToLike;
