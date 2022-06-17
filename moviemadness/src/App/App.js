import React, { useState } from 'react';
import Search from '../Search';
import MovieFetch from '../Fetch';
import './App.css';


function App() {

  const [input, setInput] = useState();
   const [search, setSearch] = useState();
   
   function inputListener(e) {
       setInput(e.target.value);
       console.log(input);
   }

   function searchButton() {
       setSearch(input);
       console.log(search);
   }
  
  return (
    <div className="App">
    <MovieFetch />
    <Search inputListener={inputListener} searchButton={searchButton}/>
    </div>
  );
}

export default App;
