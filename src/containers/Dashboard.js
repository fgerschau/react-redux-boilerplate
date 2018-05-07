import Dashboard from 'components/Dashboard';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Dashboard);
