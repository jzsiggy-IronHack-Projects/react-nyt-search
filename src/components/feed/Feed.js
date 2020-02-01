import React , { Component } from 'react';
import Article from '../article/Article';
import AppContext from '../../context/AppContext';

class Feed extends Component {
  render () {
    return (
      <AppContext.Consumer>
        {
          (context) => {
            return context.state.articlesToDisplay.map(( article , index ) => {
              if (article.media) {
                return <Article
                title={article.title}
                abstract={article.abstract}
                thumbnail={article.media[0]['media-metadata'][0].url}
                key={index} />
              } else {
                return <Article
                title={article.title}
                abstract={article.abstract}
                key={index} />
              }
            });
          }
        }
      </AppContext.Consumer>
    );
  };
};

export default Feed;