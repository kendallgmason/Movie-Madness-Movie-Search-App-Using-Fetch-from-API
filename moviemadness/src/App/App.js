import React, { useState } from 'react';
import Search from '../Search';
import Movie from '../Movie';
import MovieList from '../MovieList'

import './App.css';


function App() {

  const [input, setInput] = useState();
   const [search, setSearch] = useState();
   
   function inputListener(e) {
       setInput(e.target.value); 
   }

   function searchButton() {
       setSearch(input);
   }
  
  return (
    <div className="App">
    <Movie movieTitle={search} />
    <Search inputListener={inputListener} searchButton={searchButton}/>
    <MovieList movieTitle={search} />
    </div>
  );
}

export default App;
