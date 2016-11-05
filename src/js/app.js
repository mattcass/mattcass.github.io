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

appHistory.listen(location => {
  // Use setTimeout to make sure this runs after React Router's own listener
  setTimeout(() => {
    // Keep default behavior of restoring scroll position when user:
    // - clicked back button
    // - clicked on a link that programmatically calls `history.goBack()`
    // - manually changed the URL in the address bar (here we might want
    // to scroll to top, but we can't differentiate it from the others)
    if (location.action === 'POP') {
      return;
    }
    // In all other cases, scroll to top
    window.scrollTo(0, 0);
  });
});

// Import Components
import Index from './components/index.js';
import Blog from './components/blog.js';
import Writing from './components/writing.js';
import NotFound from './components/404.js';

// Routing
ReactDOM.render(
  <Router history={appHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={Writing} />
      <Route path="/blog(/:article)" component={Blog} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
app);
