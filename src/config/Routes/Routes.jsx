import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from 'screens';
import App from 'containers/App';

const Routes = () => (
  <Switch>
    <Route
      path="/"
      render={() => (
        <App>
          <Route path="/dashboard" component={Dashboard} />
        </App>
      )}
    />
  </Switch>
);

export default Routes;
