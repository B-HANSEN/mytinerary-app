import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { getComments } from '../actions/itActions';
import './singleItin.css';

class Comments extends Component { 
    state = {
        comments: [],
        comment: {}
    }

    componentDidMount() {
      console.log(this.props)
        this.props.getComments(this.props.itinId)   // load comments related to itinId, receive props from SingleItin-component
    }

    // TODO: put into a form component from Material UI...
    render() {
      console.log(this.props)
      return (

        <div>
          <h5 className="comments">User comments:</h5>
          {this.props.comment.comments.map((comment, index) =>
            <div key= { index }>
                <div className="floatleft">
                  <img className="profForComments"  src={ comment.user.profilePic } alt="actPic" />
                  <p>{ comment.user.username }</p>
                </div>
                <p className="commentsText">{ comment.text }</p>
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