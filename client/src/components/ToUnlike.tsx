import { useAppDispatch, useAppSelector } from '../hooks';
import { unlikeItinerary } from '../actions/favActions';
import { FaHeart } from 'react-icons/fa';

interface ToUnlikeProps {
  itinId: string;
  cityId: string;
}

function ToUnlike({ itinId, cityId }: ToUnlikeProps) {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.user!._id);

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
