import React from 'react'

const fetchRequest = (movieTitle) => {

    useEffect (()=> {
        async function getData(){
            const response = await fetch(`https://www.omdbapi.com/?apikey=3b2a6fcc&t=${movieTitle}`)
            const data = await response.json();
            if (data.Response === 'False') {
                console.log(`Movie not found`)
            }; 
            return data
          
        };
    }, [movieTitle])
    
    return (
        <div>
            
        </div>
    )
}

export default fetchRequest
