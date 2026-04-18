import { useDispatch, useSelector } from 'react-redux';
import { likeItinerary } from '../actions/favActions';
import { FaRegHeart } from 'react-icons/fa';

function ToLike({ itinId, cityId }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user._id);

  return (
    <button
      onClick={() => dispatch(likeItinerary(itinId, userId, cityId))}
      aria-label='Add to favorites'
      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
    >
      <FaRegHeart className='bluehighlight' />
    </button>
  );
}

export default ToLike;
