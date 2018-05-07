import axios from 'axios';
import config from 'config';

export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';
export const RESET_USER = 'RESET_USER';

export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

export const GET_FROM_TOKEN = 'GET_FROM_TOKEN';
export const GET_FROM_TOKEN_FAILURE = 'GET_FROM_TOKEN_FAILURE';
export const GET_FROM_TOKEN_SUCCESS = 'GET_FROM_TOKEN_SUCCESS';
export const RESET_TOKEN = 'RESET_TOKEN';

export const signIn = async (form) => {
  try {
    const request = await axios.post(`${config.API_URL}/login`, form);

    if (request && request.data && request.data.token) {
      sessionStorage.setItem('jwtToken', request.data.token);
    }

    return {
      type: SIGNIN_USER,
      payload: request,
    };
  } catch (e) {
    return {
      type: SIGNIN_USER,
      payload: { error: e },
    };
  }
};

export const signInSuccess = user => ({
  type: SIGNIN_USER_SUCCESS,
  payload: user,
});

export const signInFailure = error => ({
  type: SIGNIN_USER_FAILURE,
  payload: error,
});

export const getFromToken = async (storageToken) => {
  const options = {
    method: 'GET',
    url: `${config.API_URL}/user/from-token?token=${storageToken}`,
    headers: {
      Authorization: `${storageToken}`,
    },
  };

  try {
    const request = await axios(options);

    if (request && request.data && request.data.token) {
      sessionStorage.setItem('jwtToken', request.data.token);
    } else {
      throw new Error('Authentication failed. Try to log in again.');
    }

    return {
      type: GET_FROM_TOKEN,
      payload: request,
    };
  } catch (e) {
    return {
      type: GET_FROM_TOKEN_FAILURE,
      payload: { error: e },
    };
  }
};

export const getFromTokenFailure = error => ({
  type: GET_FROM_TOKEN_FAILURE,
  payload: error,
});

export const getFromTokenSuccess = user => ({
  type: GET_FROM_TOKEN_SUCCESS,
  payload: user,
});

export const resetToken = () => ({ type: RESET_TOKEN });

export const signUp = async (form) => {
  try {
    const request = await axios.post(`${config.API_URL}/signup`, form);

    if (!request || !request.data || !request.data.user || !request.data.user.token) {
      throw new Error('Authentication failed. Try to log in again.');
    }

    sessionStorage.setItem('jwtToken', request.data.user.token);
    return {
      type: SIGNUP_USER,
      payload: request,
    };
  } catch (e) {
    return {
      type: SIGNUP_USER,
      payload: { error: e },
    };
  }
};

export const signUpSuccess = user => ({
  type: SIGNUP_USER_SUCCESS,
  payload: user,
});

export const signUpFailure = user => ({
  type: SIGNUP_USER_FAILURE,
  payload: user,
});
