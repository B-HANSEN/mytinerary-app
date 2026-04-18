import { useDispatch, useSelector } from 'react-redux';
import { unlikeItinerary } from '../actions/favActions';
import { FaHeart } from 'react-icons/fa';

function ToUnlike({ itinId, cityId }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user._id);

  return (
    <button
      onClick={() => dispatch(unlikeItinerary(itinId, userId, cityId))}
      aria-label='Remove from favorites'
      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
    >
      <FaHeart className='bluehighlight' />
    </button>
  );
}

export default ToUnlike;
