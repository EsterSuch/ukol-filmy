import React from 'react';
import { render } from 'react-dom';
import './style.css';


import Header from './components/Header';
import MovieList from './components/MovieList';


const App = () => (
  <>
    <div className="App">
      <Header />
      <MovieList />
    </div>
  </>
);

render(<App />, document.querySelector('#app'));