import { useAppDispatch, useAppSelector } from '../hooks';
import { likeItinerary } from '../actions/favActions';
import { FaRegHeart } from 'react-icons/fa';

interface ToLikeProps {
  itinId: string;
  cityId: string;
}

function ToLike({ itinId, cityId }: ToLikeProps) {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.user!._id);

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
