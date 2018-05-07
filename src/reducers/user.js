import {
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILURE,
  GET_FROM_TOKEN,
  GET_FROM_TOKEN_SUCCESS,
  GET_FROM_TOKEN_FAILURE,
  RESET_TOKEN,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
} from 'actions/users';

const DEFAULT_STATE = {
  user: null,
  status: null,
  error: null,
  loading: false,
};

export default (state = DEFAULT_STATE, action) => {
  let error;
  switch (action.type) {
    case SIGNIN_USER:
      return {
        ...state, user: null, status: 'signin', error: null, loading: true,
      };

    case SIGNIN_USER_SUCCESS:
      return {
        ...state, user: action.payload.user, status: 'authenticated', error: null, loading: false,
      };

    case SIGNIN_USER_FAILURE:
      error = action.payload.data || { message: action.payload.message };
      return {
        ...state, user: null, status: 'signin', error, loading: false,
      };

    case GET_FROM_TOKEN:
      return {
        ...state, user: null, status: 'storage', error: null, loading: true,
      };

    case GET_FROM_TOKEN_FAILURE:
      error = action.payload.error || { message: action.payload.message };
      return {
        ...state, user: null, status: 'storage-failure', error, loading: false,
      };

    case GET_FROM_TOKEN_SUCCESS:
      return {
        ...state, user: action.payload, status: 'authenticated', error: null, loading: false,
      };

    case RESET_TOKEN:
      return {
        ...state, user: null, status: 'storage', error: null, loading: false,
      };

    case SIGNUP_USER:
      return {
        ...state, user: null, status: 'signup', error: null, loading: true,
      };

    case SIGNUP_USER_SUCCESS:
      return {
        ...state, user: action.payload.user, status: 'authenticated', error: null, loading: false,
      };

    case SIGNUP_USER_FAILURE:
      error = action.payload.errors || { message: action.payload.message };

      return {
        ...state, user: null, status: 'signup', error, loading: false,
      };

    default:
      return state;
  }
};
