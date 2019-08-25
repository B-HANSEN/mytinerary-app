import React from "react";
import { withRouter } from "react-router-dom";

const BackButton = ({ history }) => (
  <button onClick={history.goBack}>
      <i className="material-icons">
        arrow_back_ios
      </i>
  </button>
);

export default withRouter(BackButton);