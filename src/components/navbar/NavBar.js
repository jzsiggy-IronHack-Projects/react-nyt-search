import React , { Component } from 'react';
import AppContext from '../../context/AppContext';
import SearchBar from '../navbar/NavBar';

class NavBar extends Component {

  render () {
    return (
      <AppContext.Consumer>
        {
          (context) => {
            return (
              <div className="navbar">
                <button onClick={
                  () => {
                    context.refreshArticles('top');
                  }
                }>
                  Top
                </button>

                <button onClick={
                  () => {
                    context.refreshArticles('email');
                  }
                }>
                  Email
                </button>
              </div>
            );
          }
        }
      </AppContext.Consumer>
    );
  };
};

export default NavBar;