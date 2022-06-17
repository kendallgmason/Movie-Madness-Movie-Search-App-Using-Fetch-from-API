import React, {useState, useEffect} from 'react';

export const MovieFetch = (movieTitle) => {
    const [movie, setMovie]= useState(null);
   

    useEffect (()=> {
        async function getData(){
            const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=e068227f&=?Batman`)
            const data = await response.json();
            // setDataMovie(data);
            if (data.Response === 'False') {
                console.log(`Movie not found`)
            }; 
            setMovie(data.Search);
            console.log(movie);
            console.log(data.Poster);
        };
        getData();
    }, [])

    return (
        <div className="movies">
            
        </div>
    )}


export default MovieFetch;
