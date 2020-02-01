import React , { Component } from 'react';
import AppContext from './AppContext';
import axios from 'axios';

class AppProvider extends Component {
  state = {
    articlesToDisplay : [],
    keyword : '',
  };

  handleKeywordChange = (e) => {
    this.setState({
      keyword : e.target.value,
    });
  };

  handleSearch = (e) => {
    e.preventDefault();
    return axios.post(`http://localhost:5000/search-results`, {
      keyword : this.state.keyword,
    })
    .then( result => {
      result.data.forEach(article => {
        article['title'] = article.headline.main;
      });

      this.setState({
        articlesToDisplay : result.data,
        keyword : '',
      });
    });
  }

  refreshArticles = (endpoint) => {
    return axios.get(`http://localhost:5000/${endpoint}`)
    .then( result => {
      this.setState({
        articlesToDisplay : result.data,
      });
    });
  };

  async componentDidMount () {
    this.refreshArticles('');
  };

  render () {
    const contextValues = {
      state : this.state,
      refreshArticles : this.refreshArticles,
      handleKeywordChange : this.handleKeywordChange,
      handleSearch : this.handleSearch,
    };
    return (
      <AppContext.Provider value={contextValues}>
        {this.props.children}
      </AppContext.Provider>
    );
  };
};

export default AppProvider;