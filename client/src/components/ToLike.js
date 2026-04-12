import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, addLikes } from '../actions/favActions';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon } from 'mdbreact';

function ToLike({ itinId, cityId }) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const increaseFavorites = () => {
    dispatch(addToFavorites(itinId, auth.user._id));
    dispatch(addLikes(itinId, 1, cityId));
  };

  return (
    <button
      onClick={increaseFavorites}
      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
    >
      <MDBIcon far icon='heart' className='bluehighlight' />
    </button>
  );
}

export default ToLike;
