import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { render } from 'react-dom';
import App from './App';
import ProductsPage from './ProductsPage';

const root = document.getElementById('root');

const RouteContainer = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } >
      <IndexRoute component={ ProductsPage }/>
    </Route>
  </Router>
)

render(RouteContainer, root);
