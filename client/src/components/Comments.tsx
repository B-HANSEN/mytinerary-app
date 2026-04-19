import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getComments } from '../actions/itActions';
import { AVATAR_PLACEHOLDER } from '../utils/placeholders';
import './singleItin.css';

interface CommentsProps {
  itinId: string;
}

function Comments({ itinId }: CommentsProps) {
  const dispatch = useAppDispatch();
  const comment = useAppSelector((state) => state.comment);

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
              onError={(e) => { e.currentTarget.src = AVATAR_PLACEHOLDER; }}
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
