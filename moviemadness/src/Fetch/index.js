import React, {useState, useEffect} from 'react';

export const MovieFetch = ({movieTitle}) => {
    const [image, setImage]= useState("");
    const [rating, setRating]= useState("");


    useEffect (()=> {
        async function getData(){
            const response = await fetch(`https://www.omdbapi.com/?apikey=3b2a6fcc&t=${movieTitle}`)
            const data = await response.json();
            if (data.Response === 'False') {
                console.log(`Movie not found`)
            }; 
            setImage(data.Poster);
            setRating (data.imdbRating);
          
        };
        getData();
    }, [movieTitle])


    return (
        <div className="movies">
            <img src={image} alt="movie details"/>
            <p>IMDB rating: {rating} </p>
           
        </div>
    )}



export default MovieFetch;
