import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './../components/Footer';
import SingleItin from '../components/SingleItin';

import { getFavorites } from '../actions/favActions';
import { getUserById } from '../actions/authActions';

import './views.css';

function Favorites() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const favorite = useSelector((state) => state.favorite);
  const [selectedItin, setSelectedItin] = useState('');

  useEffect(() => {
    dispatch(getUserById(userId));
    dispatch(getFavorites(userId));
  }, [dispatch, userId]);

  return (
    <div>
      <div className='title'>
        {auth.user ? <h3>{auth.user.name}'s Dashboard</h3> : ''}
        <br />
        <h6>Favorite itineraries:</h6>

        {favorite.favorites.map((itinerary, index) => (
          <SingleItin
            key={index}
            itin={itinerary}
            selectedItin={selectedItin}
            handleSelection={setSelectedItin}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Favorites;
