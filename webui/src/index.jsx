import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import reducer from './reducer';
import App from './App.jsx';

const store = createStore(reducer);

if (module.hot) {
  module.hot.accept();
}


const appDiv = document.createElement('div');
appDiv.setAttribute('id', 'app')
document.body.appendChild(appDiv);

render((
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
), document.getElementById('app'))