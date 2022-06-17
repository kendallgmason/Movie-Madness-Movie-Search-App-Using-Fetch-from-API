import { useState } from "react";


const Search = ({inputListener, searchButton}) => {
   
    return (
        <div>
            <input type="text" onChange={inputListener}></input>
            <button onClick={searchButton }>Click Here</button>
        </div>
    )
}

export default Search;