import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import Footer from './../components/Footer';
import SingleItin from '../components/SingleItin';
import { getFavorites } from '../actions/favActions';
import { getUserById } from '../actions/authActions';
import { getCities } from '../actions/citiesActions';
import ScrollUpButton from '../components/ScrollUpButton';
import './views.css';

function Favorites() {
  const { userId } = useParams<{ userId: string }>();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const favorite = useAppSelector((state) => state.favorite);
  const cities = useAppSelector((state) => state.city.cities);
  const [selectedItin, setSelectedItin] = useState('');

  useEffect(() => {
    if (userId) {
      dispatch(getUserById(userId));
      dispatch(getFavorites(userId));
      dispatch(getCities());
    }
  }, [dispatch, userId]);

  return (
    <div>
      <div className='title'>
        {auth.user ? <h3>{auth.user.name}'s Dashboard</h3> : ''}
        <br />
        <h6>Favorite itineraries:</h6>

        {favorite.favorites.length === 0 ? (
          <div style={{ margin: '2rem', textAlign: 'center' }}>
            <p>No favourite itineraries yet.</p>
            <p style={{ marginBottom: '1.5rem' }}>Browse cities to find one you like!</p>
            <Link to='/cities' className='btn btn-outline-primary'>
              Browse cities
            </Link>
          </div>
        ) : (
          favorite.favorites.map((itinerary, index) => (
            <SingleItin
              key={index}
              itin={itinerary}
              selectedItin={selectedItin}
              handleSelection={setSelectedItin}
              cityName={cities.find((c) => c._id === itinerary.cityId)?.city}
              isLiked={true}
            />
          ))
        )}
      </div>

      <ScrollUpButton />
      <Footer />
    </div>
  );
}

export default Favorites;
