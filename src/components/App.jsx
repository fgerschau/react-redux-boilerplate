import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  componentWillMount() {
    this.props.loadUserFromToken();
  }

  render() {
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  loadUserFromToken: PropTypes.func.isRequired,
  authWithSpotify: PropTypes.func.isRequired,
};

export default App;
