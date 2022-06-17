const Search = ({inputListener, searchButton}) => {
   
    return (
        <div>
            <input placeholder="Search Movies.." type="text" onChange={inputListener}></input>
            <button onClick={searchButton }>Click Here</button>
        </div>
    )
}

export default Search;