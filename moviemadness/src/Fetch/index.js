import React, {useState, useEffect} from 'react';

export const MovieFetch = ({movieTitle}) => {
    // const [image, setImage]= useState("");
    // const [rating, setRating]= useState("");
    const [movie, setMovie]= useState("");

    useEffect (()=> {
        async function getData(){
            const response = await fetch(`https://www.omdbapi.com/?apikey=3b2a6fcc&t=${movieTitle}`)
            const data = await response.json();
            if (data.Response === 'False') {
                console.log(`Movie not found`)
            }; 
            setMovie(data);
          
        };
        getData();
        console.log(movie)
    }, [movieTitle])


    return (
        <div className="movies">
            <h1>{movie.Title}</h1>
            <img src={movie.Poster} alt="movie details"/>
            <h3>{movie.Actors}</h3> 
            <h3>Released: {movie.Year}, Runtime: {movie.Runtime}</h3>
            <p>{movie.Plot}</p>
            <h2>{movie.imdbRating}</h2>
        </div>
    )}



export default MovieFetch;
