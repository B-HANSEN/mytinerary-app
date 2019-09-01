// import React from 'react';
// import SignupForm from './../components/SignupForm';
// import { connect } from 'react-redux';
// import { userSignupRequest, isUserExists } from '../../actions/signupActions';
// import { addFlashMessage } from '../../actions/flashMessages.js';

// class SignupPage extends React.Component {
//   render() {
//     const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
//     return (
//       <div className="row">
//         <div className="col-md-4 col-md-offset-4">
//           <SignupForm
//             isUserExists={isUserExists}
//             userSignupRequest={userSignupRequest}
//             addFlashMessage={addFlashMessage} />
//         </div>
//       </div>
//     );
//   }
// }

// // this component expects this function to be passed
// SignupPage.propTypes = {
//   userSignupRequest: React.PropTypes.func.isRequired,
//   addFlashMessage: React.PropTypes.func.isRequired,
//   isUserExists: React.PropTypes.func.isRequired
// }

// // use connect HOC (higher-order component) to provide the functions from Redux
// // connect()-function takes 2 parameters:
// // 1) "mapStateToProps" which provides data from Redux (takes state and returns object) & 
// // 2) "mapDispatchToProps" which specify action creators wrapped in dispatch
// export default connect(null, { userSignupRequest, addFlashMessage, isUserExists })(SignupPage);