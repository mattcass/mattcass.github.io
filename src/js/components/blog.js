import React from 'react';
import ReactMarkdown from 'react-markdown';

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
          <ReactMarkdown source={ this.state.contents } />
        </article>
      </div>
    )
  }
}

