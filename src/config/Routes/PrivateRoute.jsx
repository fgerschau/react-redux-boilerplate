import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: MyComponent, user, ...rest }) => (
  <Route
    {...rest}
    render={
      (props) => {
        if (user.loading) {
          return null;
        }

        if (user.status === 'authenticated') {
          return <MyComponent {...props} />;
        }

        return (<Redirect to={{
          pathname: '/dashboard', // TODO: here comes the login or signup route
          from: props.location.pathname,
        }}
        />);
      }
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  user: PropTypes.shape({}),
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
};

PrivateRoute.defaultProps = {
  user: {},
};

const mapStateToProps = state => ({
  user: state.user,
});

const PrivateRouteWithRouter = withRouter(PrivateRoute);

export default connect(mapStateToProps, null, null, { pure: false })(PrivateRouteWithRouter);
