// Import CSS
import '../css/master.scss';

// Import React
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';

// Define root element
const app = document.getElementById('app');

// Import Components
import Index from './components/index.js';
import Blog from './components/blog.js';
import Writing from './components/writing.js';
import NotFound from './components/404.js';

// Routing
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={Writing} />
      <Route path="/blog(/:article)" component={Blog} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
app);
