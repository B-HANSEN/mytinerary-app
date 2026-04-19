import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import Footer from './../components/Footer';
import SingleItin from '../components/SingleItin';
import ScrollUpButton from '../components/ScrollUpButton';
import { getItineraries } from '../actions/itActions';
import { getCityById } from '../actions/citiesActions';
import { IMG_PLACEHOLDER } from '../utils/placeholders';
import './views.css';

function MYtinerary() {
  const { cityId } = useParams<{ cityId: string }>();
  const dispatch = useAppDispatch();
  const { itineraries } = useAppSelector((state) => state.itinerary);
  const { city } = useAppSelector((state) => state.city);
  const userFavorites = useAppSelector((state) => state.auth.user?.favorites ?? []);
  const [selectedItin, setSelectedItin] = useState('');

  useEffect(() => {
    if (cityId) {
      dispatch(getCityById(cityId));
      dispatch(getItineraries(cityId));
    }
  }, [dispatch, cityId]);

  return (
    <div>
      <div className='title'>
        <img
          className='titlePic'
          src={city.img}
          alt={city.city}
          onError={(e) => { e.currentTarget.src = IMG_PLACEHOLDER; }}
        />
        <h3>{city.city}</h3>

        {itineraries.length === 0 ? (
          <p>
            There is no itineraries yet. <br /> Please check back later or create your own
            itinerary.
          </p>
        ) : (
          <div>
            <h5>Available MYtineraries:</h5>
            {itineraries.map((itinerary, index) => (
              <SingleItin
                key={index}
                itin={itinerary}
                selectedItin={selectedItin}
                handleSelection={setSelectedItin}
                isLiked={userFavorites.includes(itinerary._id)}
              />
            ))}
          </div>
        )}

        <div className='center'>
          <Link className='otherCity' to={'/cities'}>
            Choose another city...
          </Link>
        </div>
        <ScrollUpButton />
      </div>

      <Footer />
    </div>
  );
}

export default MYtinerary;
