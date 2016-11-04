import React from 'react';
import { Link }  from 'react-router';


export default class Nav extends React.Component {
  render() {
    return (
        <nav>
          <ul className="list-reset">
            <li><Link to="/" >Index</Link></li>
            <li><a href="https://twitter.com/mmaatter">Twitter</a></li>
            <li><a href="https://github.com/mattcass">Github</a></li>
          </ul>
        </nav>
    )
  }
}
