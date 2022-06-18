const Search = ({inputListener, searchButton}) => {
   
    return (
        <div class="flex flex-col rounded-lg shadow-lg bg-gray-300 text-xl">
            <input class="text-center p-5 mb-5" placeholder="Search Movies.." type="text" onChange={inputListener}></input>
            <button class="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 p-5 mb-5" onClick={searchButton }>Click Here To Search</button>
        </div>
    )
}

export default Search;