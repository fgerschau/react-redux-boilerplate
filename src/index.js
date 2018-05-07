import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import { BrowserRouter } from 'react-router-dom';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';
import 'toastr/build/toastr.min.css';
import 'toastr/build/toastr.min';
import Routes from './config/Routes';
import registerServiceWorker from './registerServiceWorker';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

require('admin4b/dist/admin4b.min.css');
require('admin4b/dist/admin4b.min');

ReactDOM.render(
  /* eslint-disable react/jsx-filename-extension */
  <div className="app">
    <div className="app-body">
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </div>
  </div>,
  document.getElementById('root'),
);

registerServiceWorker();
