import React from 'react';
import { hashHistory }  from 'react-router';


export default class Nav extends React.Component {
  handleClick( e ) {
    e.preventDefault();
    this.hashHistory.pushState(null, '/');
   
    var element = document.getElementById('writing');
    element.scrollIntoView({ behavior: 'smooth' });
  
  }

  render() {
    return (
        <nav>
          <ul className="list-reset">
            <li><a href="#writing" onClick={ this.handleClick }>Writing</a></li>
            <li><a href="https://twitter.com/mmaatter">Twitter</a></li>
            <li><a href="https://github.com/mattcass">Github</a></li>
          </ul>
        </nav>
    )
  }
}
