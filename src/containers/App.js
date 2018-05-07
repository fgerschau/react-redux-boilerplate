import { connect } from 'react-redux';
import App from 'components/App';
import { getFromToken, getFromTokenFailure, resetToken, getFromTokenSuccess } from '../actions/users';

const mapDispatchToProps = dispatch => ({
  loadUserFromToken: async () => {
    const token = sessionStorage.getItem('jwtToken');
    if (!token) {
      return null;
    }

    const response = await dispatch(getFromToken(token));

    if (!response || !response.payload || !response.payload.data || response.payload.error) {
      sessionStorage.removeItem('jwtToken');
      return dispatch(getFromTokenFailure(response.payload));
    }

    const user = response.payload.data;
    return dispatch(getFromTokenSuccess(user));
  },
  resetMe: () => {
    sessionStorage.removeItem('jwtToken');
    dispatch(resetToken());
  },
});

export default connect(null, mapDispatchToProps)(App);
