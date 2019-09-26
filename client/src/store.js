import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

// allows dispatch asynchronous actions
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  // replace enhancer by compose(middleware)
  compose(
    applyMiddleware(...middleware)
    // comment devtools out when for production:
    // ,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;