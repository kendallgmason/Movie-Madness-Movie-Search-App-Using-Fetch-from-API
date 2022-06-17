import React, {useState, useEffect} from 'react';

export const MovieFetch = ({movieTitle}) => {
    const [movie, setMovie]= useState("");
//    const [movies, setMovies]= useState();

    useEffect (()=> {
        async function getData(){ 
                const response = await fetch(`https://www.omdbapi.com/?apikey=3b2a6fcc&s=${movieTitle}`)
                const data = await response.json();
                setMovie(data.Search);
        };
        
        getData();
        
    }, [movieTitle])

    console.log(movie)
    return (
        <div className="container">
            <h1>{movie[0].Title}</h1>
            <img src={movie[0].Poster} alt="movie details"/>
            <h3>{movie[0].Actors}</h3> 
            <h3>Released: {movie[0].Year}, Runtime: {movie.Runtime}</h3>
            <p>{movie[0].Plot}</p>
            <h2>{movie[0].imdbRating}</h2>
            
            <ul>
            {movie && movie.map((movie) => (<li>{movie.Title}</li>
            ))}
            </ul>  

        </div>
    )}



export default MovieFetch;
//hello