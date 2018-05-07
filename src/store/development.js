import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';
import reducer from '../reducers';

function configureStore(initialState = {}) {
  const customCreateStore = compose(
    applyMiddleware(
      promise,
      thunkMiddleware,
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )(createStore);

  const store = customCreateStore(reducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('reducers'); // eslint-disable-line
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export default configureStore;
