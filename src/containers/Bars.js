import Bars from 'components/Bars';
import { connect } from 'react-redux';
import { resetToken } from 'actions/users';

const mapDispatchToProps = dispatch => ({
  resetMe: () => {
    sessionStorage.removeItem('jwtToken');
    dispatch(resetToken());
  },
});

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Bars);
