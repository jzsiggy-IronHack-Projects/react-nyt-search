import React , { Component } from 'react';
import AppContext from '../../context/AppContext';

class SearchBar extends Component {

  render () {
    return (
      <AppContext.Consumer>
        {
          (context) => {
            return (
              <form onSubmit={context.handleSearch}>
                <input className="search-bar" value={context.state.keyword} onChange={context.handleKeywordChange}/>
                <button onClick={context.handleSearch}>Submit</button>
              </form>
            )
          }
        }
      </AppContext.Consumer>
    );
  };
};

export default SearchBar;