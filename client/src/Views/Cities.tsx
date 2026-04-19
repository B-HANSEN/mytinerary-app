import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getCities } from '../actions/citiesActions';
import Search from '../components/Search';
import Footer from './../components/Footer';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import './views.css';

function Cities() {
  const [searchfield, setSearchfield] = useState('');
  const dispatch = useAppDispatch();
  const { cities } = useAppSelector((state) => state.city);

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  const filteredCities = cities.filter((city) =>
    city.city.toLowerCase().includes(searchfield.toLowerCase())
  );

  return (
    <div className='cities'>
      <h4>Cities</h4>

      <Search handleInput={(e) => setSearchfield(e.target.value)} />

      <Container fluid className='cityList'>
        <Row>
          {filteredCities.map((city) => (
            <Col key={city._id} xs='6' md='4'>
              <h5>
                <Button color='warning' className='w-100'>
                  <Link to={'/itineraries/' + city._id}>{city.city}</Link>
                </Button>
              </h5>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Cities;
