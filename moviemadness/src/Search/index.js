const Search = ({ inputListener, searchButton }) => {
	return (
		<div class="mx-auto max-w-3xl flex flex-col rounded-lg shadow-lg bg-secondary-200 text-xl">
			<input
				class="text-center p-5 mb-5 rounded-lg m-4"
				placeholder="Search Movies.."
				type="text"
				onChange={inputListener}
			></input>
			<button
				class="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 p-5 mb-5 m-4"
				onClick={searchButton}
			>
				Click Here To Search
			</button>
		</div>
	);
};

export default Search;
