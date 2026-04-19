import './singleItin.css';
import { AVATAR_PLACEHOLDER } from '../utils/placeholders';
import ToLike from './ToLike';
import ToUnlike from './ToUnlike';
import Comments from './Comments';
import ActivitySlider from './activitySlider';

function Activities({ more, itinId }) {
  if (more !== itinId) return null;
  return (
    <div className='activitySlider'>
      <ActivitySlider itinId={itinId} />
    </div>
  );
}

function SingleItin({ itin, selectedItin, handleSelection, cityName, isLiked }) {
  return (
    <div className='textAndLink'>
      <div className='allDetailsIt'>
        <div className='profilePic'>
          <img className='prof' src={itin.profilePic} alt={itin.username} onError={(e) => { e.target.src = AVATAR_PLACEHOLDER; }} />
          <h6 className='username'>{itin.username}</h6>
        </div>

        <div className='overview'>
          <h5 className='titleIt'>{itin.title}</h5>
          {cityName && <p className='cityName'>{cityName}</p>}

          <div className='details'>
            <ul>
              <li className='singleDetails'>
                Likes: {itin.rating}
                {isLiked !== undefined ? (
                  isLiked ? (
                    <ToUnlike itinId={itin._id} cityId={itin.cityId} />
                  ) : (
                    <ToLike itinId={itin._id} cityId={itin.cityId} />
                  )
                ) : null}
              </li>
              <li className='singleDetails'>Duration: {itin.duration} hrs</li>
              <li className='singleDetails'>Cost category: {itin.price}</li>
              <li className='singleDetails'>{itin.hashtag}</li>
            </ul>
          </div>
        </div>
      </div>

      <Activities more={selectedItin} itinId={itin._id} />

      {selectedItin === itin._id ? <Comments itinId={itin._id} /> : null}

      <button className='view_close' onClick={() => handleSelection(itin._id)}>
        {selectedItin === itin._id ? 'Check another itinerary' : 'View activities'}
      </button>
    </div>
  );
}

export default SingleItin;
