import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div className='article'>
        {
        this.props.thumbnail ?
        <img src={this.props.thumbnail} />
        :
        ''
        }
        <div>
          <h2>{this.props.title}</h2>
          <p>{this.props.abstract}</p>
        </div>
      </div>
    );
  };
};

export default Article;