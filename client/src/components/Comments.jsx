import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../actions/itActions';
import { AVATAR_PLACEHOLDER } from '../utils/placeholders';
import './singleItin.css';

function Comments({ itinId }) {
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comment);

  useEffect(() => {
    dispatch(getComments(itinId));
  }, [dispatch, itinId]);

  return (
    <div>
      <h5 className='commentsTitle'>User comments:</h5>
      {comment.comments.map((comment, index) => (
        <div key={index} className='commentsBlock'>
          <div className='userNamePic'>
            <img
              className='profForComments'
              src={comment.user.profilePic}
              alt={comment.user.username}
              onError={(e) => { e.target.src = AVATAR_PLACEHOLDER; }}
            />
            <p className='usernameForComments'>{comment.user.username}</p>
          </div>
          <p className='commentsText'>{comment.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Comments;
