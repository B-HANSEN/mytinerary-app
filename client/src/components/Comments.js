import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getComments } from '../actions/commentsActions';

// import icon & styles
import './components.css';

class Comments extends Component { 
    state = {
        comments: [],
        comment: {},
        users: [],
        user: {}
    }

    componentDidMount() {
        this.props.getComments(this.props.userId) // load comments related to userId; but need it for all users
    }

    // TODO: put into a form component from Material UI...
    render() {
      console.log(this.props)
      console.log(this.props.auth)
      console.log(this.props.username)
      return (

        <div className="">
            <h6 className="username"> { this.props.username }</h6>
            <p className=""> { this.props.comments }</p>
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