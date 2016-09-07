import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router';

export default class Blog extends React.Component {
  constructor() {
    super();
    this.state = { contents: ''  };
  }
 
  componentDidMount() {
    const contents = require('html!markdown!../../md/' + this.props.params.article + '.md');
    this.setState({ contents })
  }

  render() {
    return (
      <div>
        <article className="mt4 mb4">
          <ReactMarkdown source={ this.state.contents } escapeHhml="true" />
        </article>

        <Link to="/" className="mb4 block">
          <span className="pr1">&#8592;</span> Back
        </Link>
      </div>
    )
  }
}

