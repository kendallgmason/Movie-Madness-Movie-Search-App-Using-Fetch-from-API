import React, {useState, useEffect} from 'react';

export const MovieFetch = ({movieTitle}) => {
    const [movie, setMovie]= useState("");
   const [movies, setMovies]= useState();

    useEffect (()=> {
        async function getData(){
            const response = await fetch(`https://www.omdbapi.com/?apikey=3b2a6fcc&t=${movieTitle}`)
            const data = await response.json();
            
            if (data.Response === 'False') {
                console.log(`Movie not found`)
            };

            // setMovies(data) 
            // console.log(data.Search[0])
            setMovie(data);
          
        };
        
        getData();
        // console.log(movies)
    }, [movieTitle])


    return (
        <div className="container">
             <h1>{movie.Title}</h1>
            <img src={movie.Poster} alt="movie details"/>
            <h3>{movie.Actors}</h3> 
            <h3>Released: {movie.Year}, Runtime: {movie.Runtime}</h3>
            <p>{movie.Plot}</p>
            <h2>{movie.imdbRating}</h2>
            
            {/* <ul>
            {movies.Search.map((movie) => (<li>{movie.Title}</li>
            ))}
            </ul>   */}

            {/* {console.log(movies.Search)}  */}
        </div>
    )}



export default MovieFetch;
//hello