import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reduxPromise from 'redux-promise';
import reducer from 'reducers';

function configureStore(initialState = {}) {
  const enhancer = applyMiddleware(
    reduxPromise,
    thunkMiddleware,
  );

  const store = createStore(reducer, initialState, enhancer);

  return store;
}

export default configureStore;
