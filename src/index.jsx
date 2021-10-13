import React from 'react';
import { render } from 'react-dom';
import './style.css';


import Header from './components/Header';
import MovieList from './components/MovieList';

import movies from './movies';

const App = () => (
  <>
    <div className="App">
      <Header />
      <MovieList plays={movies}/>
    </div>
  </>
);

render(<App />, document.querySelector('#app'));