// Import CSS
import '../css/master.scss';

// Import React
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, useRouterHistory  } from 'react-router';
import { createHashHistory } from 'history';

// Define root element
const app = document.getElementById('app');
// Set hash query param to false
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

// Import Components
import Index from './components/index.js';
import Blog from './components/blog.js';
import Writing from './components/writing.js';
import NotFound from './components/404.js';

// Routing
ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0,0)} history={appHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={Writing} />
      <Route path="/blog(/:article)" component={Blog} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
app);
