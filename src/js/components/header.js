import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
        <header className="mt4 mxw5">
          <h1 className="inline">
            <Link to="/">Matthew Casserly </Link>
          </h1>
          <p className="h1 serif inline"> 
            is a web developer currently working at
            <a href="http://www.freshtilledsoil.com"> Fresh Tilled Soil</a> in Boston, MA.
          </p>
          <blockquote className="m0 mt1">
            &quot;It was this realization that pushed me to search for a career that
            would require constant progression. Something which forced me to
            deal with difficult tasks and find solutions. To learn.&quot;
          </blockquote>
        </header>
    )
  }
}
