import React from 'react';
import './App.css';
import AppProvider from './context/AppProvider';
import NavBar from './components/navbar/NavBar';
import Feed from './components/feed/Feed';
import SearchBar from './components/searchBar/SearchBar';

function App() {
  return (
    <AppProvider>
      <div className="container">
        <NavBar />
        <SearchBar />
        <Feed />
      </div>
    </AppProvider>
  );
}

export default App;
