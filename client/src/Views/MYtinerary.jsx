import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './../components/Footer';
import { FaArrowUp } from 'react-icons/fa';

function ScrollUpButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label='Scroll to top'
      style={{
        position: 'fixed',
        bottom: '60px',
        right: '20px',
        background: '#3f51b5',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FaArrowUp />
    </button>
  );
}

import SingleItin from '../components/SingleItin';
import { getItineraries } from '../actions/itActions';
import { getCityById } from '../actions/citiesActions';

import './views.css';

function MYtinerary() {
  const { cityId } = useParams();
  const dispatch = useDispatch();
  const { itineraries } = useSelector((state) => state.itinerary);
  const { city } = useSelector((state) => state.city);
  const [selectedItin, setSelectedItin] = useState('');

  useEffect(() => {
    dispatch(getCityById(cityId));
    dispatch(getItineraries(cityId));
  }, [dispatch, cityId]);

  return (
    <div>
      <div className='title'>
        <img className='titlePic' src={city.img} alt={city.city} />
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
