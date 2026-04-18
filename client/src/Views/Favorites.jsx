import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './../components/Footer';
import SingleItin from '../components/SingleItin';

import { getFavorites } from '../actions/favActions';
import { getUserById } from '../actions/authActions';
import { getCities } from '../actions/citiesActions';
import ScrollUpButton from '../components/ScrollUpButton';

import './views.css';

function Favorites() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const favorite = useSelector((state) => state.favorite);
  const cities = useSelector((state) => state.city.cities);
  const [selectedItin, setSelectedItin] = useState('');

  useEffect(() => {
    dispatch(getUserById(userId));
    dispatch(getFavorites(userId));
    dispatch(getCities());
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
            cityName={cities.find((c) => c._id === itinerary.cityId)?.city}
          />
        ))}
      </div>

      <ScrollUpButton />
      <Footer />
    </div>
  );
}

export default Favorites;
