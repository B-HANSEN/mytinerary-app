import React from 'react';
// import PropTypes from 'prop-types';
import './singleIt.css';
import prof1 from '../images/GaudiLover.png';

class SingleIt extends React.Component {

    state = { 
        itineraries: [],
        isopen: false
    }

    toggle = () => {
        this.setState( 
          { isopen: !this.state.isopen });
    }   
    render () {
        return (
            <div className="textAndLink">
                <div className="allDetailsIt">
                    <div className="profilePic">
                        <img className="prof" src={prof1} alt="prof1" />
                    </div>

                    <div className="overview">   
                        <h3 className="titleIt">Itinerary title</h3>
                        <h4 className="details">3 details</h4>
                        <h4 className="hash">hash-tags</h4>
                    </div>
                </div>

                <div>
                    <button onClick={this.toggle}>vvv View All vvv</button>
                    <h3 className="Activities" isopen="false">Activities</h3>
                </div>
            </div>
        )
    }
}

// SingleIt.propTypes = {
//     name: React.PropTypes.string
//   }

export default SingleIt;