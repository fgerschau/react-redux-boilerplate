import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { RESET_TOKEN } from 'actions/users';
import UserReducer from './user';

const appReducer = combineReducers({
  user: UserReducer,
  form: formReducer,
});

const rootReducer = (state, action) => {
  if (action.type === RESET_TOKEN) {
    /* eslint-disable no-param-reassign */
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
