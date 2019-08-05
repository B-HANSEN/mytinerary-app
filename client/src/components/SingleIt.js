import React from 'react';
// import PropTypes from 'prop-types';
import './singleIt.css';
import prof1 from '../images/GaudiLover.png';

function Activities(props) {
    if (!props.more) {
      return null;
    }
  
    return (
      <div className="activities">
        Show all activity's images here!
      </div>
    );
  }

  class SingleIt extends React.Component {
      state = {showActivities: false};
      handleToggleClick = this.handleToggleClick.bind(this);

    handleToggleClick() {
      this.setState(state => ({
        showActivities: !state.showActivities
      }));
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
                    <Activities more={this.state.showActivities} />
                    <button onClick={this.handleToggleClick}>
                    {this.state.showActivities ? 'Close' : 'View all'}
                    </button>
                </div>
            </div>
        )
    }
}

// SingleIt.propTypes = {
//     name: React.PropTypes.string
//   }

export default SingleIt;