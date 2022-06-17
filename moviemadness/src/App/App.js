import React, { useState } from 'react';
import Search from '../Search';
import MovieFetch from '../Fetch';
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
    <MovieFetch movieTitle={search} />
    <Search inputListener={inputListener} searchButton={searchButton}/>
    </div>
  );
}

export default App;
