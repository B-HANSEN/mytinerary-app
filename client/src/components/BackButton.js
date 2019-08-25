import React from "react";
import { withRouter } from "react-router-dom";

const Back = ({ history }) => (
  <button onClick={history.goBack}>
      <i class="material-icons">
        arrow_back_ios
      </i>
  </button>
);

export default withRouter(Back);