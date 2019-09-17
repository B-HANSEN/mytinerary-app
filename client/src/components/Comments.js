import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { getComments } from '../actions/itActions';
import './components.css';

class Comments extends Component { 
    state = {
        comments: [],
        comment: {}
    }

    componentDidMount() {
      console.log(this.props)
// relates to routes.api: router.get('/:singleItinId', (req,res) => ...
// relates to itActions: axios.get("/api/comments/" + itinId)
        this.props.getComments(this.props.itinId)   // load comments related to itinId
    }

    // TODO: put into a form component from Material UI...
    render() {
      console.log(this.props)
      return (

        <div>
          {this.props.comment.comments.map((comment, index) =>
            <div key= { index }>
              <p className="">{ comment.user.username }</p>
              <img className=""  src={ comment.user.profilePic } alt="actPic" />
              <p className="">{ comment.text }</p>
            </div>
          )}
        </div>
      )
    }
}

Comments.propTypes = {
    getComments: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired
  }
  
  const mapStateToProps = (state) => ({
    comment: state.comment
  })
  
  export default connect (mapStateToProps, { getComments }) (Comments)