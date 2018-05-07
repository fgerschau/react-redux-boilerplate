import React, { Fragment, Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Bars extends Component {
  componentWillMount() {
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.resetMe();
    this.props.history.push('/');
  }

  render() {
    return (
      <Fragment>
        <div className="app-sidebar sidebar-dark sidebar-slide-left">
          <div className="text-right">
            <button type="button" className="btn btn-sidebar" data-dismiss="sidebar">
              <span className="x" />
            </button>
          </div>
          <div className="sidebar-header">
            <p className="username"> {this.props.user && this.props.user.user ? this.props.user.user.name : 'Unknown'} </p>
          </div>
          <div className="sidebar-nav">
            <div className="sidebar-nav-group">
              <Link to="/dashboard" className="sidebar-nav-link">
                <i className="fa fa-tachometer" /> {'Dashboard'}
              </Link>
            </div>
          </div>
          <div className="sidebar-footer">
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <a
              onClick={this.logout}
              data-toggle="tooltip"
              data-original-title="Logout"
              href="#"
            >
              <i className="fa fa-power-off" />
            </a>
          </div>
        </div>
        <div className="app-content">
          <nav className="navbar navbar-expand navbar-light bg-white">
            <button type="button" className="btn btn-sidebar" data-toggle="sidebar">
              <i className="fa fa-bars" />
            </button>
            <div className="navbar-brand">
              Playlisting
            </div>
          </nav>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

Bars.propTypes = {
  children: PropTypes.node.isRequired,
  user: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  }),
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  resetMe: PropTypes.func.isRequired,
};

Bars.defaultProps = {
  user: {
    user: {
      name: 'Unknown',
      email: 'Unknown',
    },
  },
};

const BarsWithRouter = withRouter(Bars);

export default BarsWithRouter;
