import React, { useState } from 'react';
import Search from '../Search';
import Movie from '../Movie';
import MovieList from '../MovieList'
import Title from '../Title'
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
    <Title/>
    <Movie movieTitle={search} />
    <Search inputListener={inputListener} searchButton={searchButton}/>
    <MovieList movieTitle={search} setSearch={setSearch} />
    </div>
  );
}

export default App;
