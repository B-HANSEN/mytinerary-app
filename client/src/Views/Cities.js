import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCities } from '../actions/citiesActions';
import Search from '../components/Search';
import Footer from './../components/Footer'

import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import './views.css';

class Cities extends Component { 
  state = {
    cities: [],
    searchfield: "",
    images: [],
    filteredCities: [],
    redirect: false 
  }

  componentDidMount() {
    this.props.getCities();
  }

  handleInput = (e) => {
    console.log(e.target.value)
    this.setState({ searchfield: e.target.value })
  }

  // link to single city's itineraries page
  setRedirect = () => {
    this.setState({ redirect: true })
  }
  renderRedirect = (id) => {
    console.log(this.props)
      this.props.location.push('/itineraries/' + id)
      return <Redirect to={'/itineraries/' + id} />
  }

  render () {
    console.log("Hello World", this.props.city.cities);
    
// show cities that match with what has been input in searchfield
    let filteredCities = this.props.city.cities.filter((city) => {
      return city.city.toLowerCase().includes(this.state.searchfield.toLowerCase())
      }
    ) 

    let mappedCities = filteredCities.map(city => {
      return (
        <Col key={ city._id } xs="6" md="4">
          <h5>
            <Button color="warning" block>
              <Link to={ "/itineraries/" + city._id }>
                { city.city }
              </Link> 
            </Button>
          </h5>
        </Col>
      )
    })

    return (

      <div className="cities">
        <h4>Cities</h4>
        
        {/* pass down to component */}
        <Search handleInput={ this.handleInput }/>

        <Container fluid className="cityList">
          <Row>
            { mappedCities }
          </Row>
        </Container>

        {/* navigation buttons */}
          {/* <div className="navbuttons"> */}
            {/* <button className="dummyButton"></button> */}
            <Footer />
          {/* </div> */}

      </div>
    )
  };  
}

Cities.propTypes = {
  getCities: PropTypes.func.isRequired,
  city: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    city: state.city
})

export default connect (mapStateToProps, { getCities }) (Cities)