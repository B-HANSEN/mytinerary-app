import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { userInfo } from 'os';

export default class LikeButton extends Component {
  state = {
    isLiked:   userInfo.favorites.includes....
    if true, full heart


    // isLoading: false,
    // count: 0
  };

  /*
  // theoretically, should API exist...
  handleLikeClick = async () => {
    try {
      this.setState({
        isLoading: !this.state.isLoading
      })
      let backendURL = 'api/like';
      let method = this.state.isLiked ? 'DELETE' : 'POST';
      let response = await axios.method(backendURL);
      this.setState({
        isLiked: !this.props.isLiked,
        buttonText: response.data.data.text,
        isLoading: !isLoading
      })
      
    } catch (err) { console.log(err) }
  };
  */

 incrementMe = () => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }
  state not needed
  --> count itinerary array
  itinID required
  +1  and -1
  include Redux to keep state, in reducer: consider CRUD


  decrementMe


  handleLikeClick = () => {
    this.setState({
      isLoading: !this.state.isLoading
    });
  }
    // mimicking asynchronous API call/delay...
//     setTimeout(() => {
//       this.setState({
//         isLiked: !this.state.isLiked,
//         isLoading: !this.state.isLoading
//       });
//     }, Math.random() * (3000 - 750) + 750);
//   };

    render() {
        let buttonSpecs = this.state.isLiked
        ?   <i class="material-icons">favorite</i>
        :   <i class="material-icons">favorite_border</i>

ternaqry but not toggle function

        return (
        <button
            isLiked={this.state.isLiked}
            onClick={this.handleLikeClick}
            onClick={this.incrementMe}
            // style={{ color: buttonSpecs.textColor, backgroundColor: buttonSpecs.background }}
        >Likes: { this.state.count }
        </button>
        )
    }
};

LikeButton.propTypes = {
  isLiked: PropTypes.bool
};