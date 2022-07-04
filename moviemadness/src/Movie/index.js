import { useState, useEffect } from "react";

export const Movie = ({ movieTitle }) => {
	const [movie, setMovie] = useState();
	useEffect(() => {
		async function getData() {
			const response = await fetch(
				`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}=${movieTitle}`
			);
			const data = await response.json();
			setMovie(data);
		}

		getData();
	}, [movieTitle]);

	return (
		<div class="mx-auto flex justify-center mb-10 max-w-4xl">
			<div class="flex flex-col md:flex-row md:max-w-l rounded-lg bg-white shadow-lg">
				<img
					class="mx-auto w-1/2 h-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg p-2 m-4"
					src={movie && movie.Poster}
					alt={movie && movie.Title}
				/>
				<div class="p-6 flex flex-col justify-start">
					<h5 class="text-gray-900 text-xl font-medium mb-2 p-2">
						{movie && movie.Title}
					</h5>
					<p class="text-gray-700 text-base mb-4 p-2">
						Plot: {movie && movie.Plot}
					</p>
					<p class="text-gray-600 text-s mb-4 p-2">Starring: {movie && movie.Actors}</p>
					<p class="text-gray-600 text-s mb-4 p-2">
						Year: {movie && movie.Year}, Runtime: {movie && movie.Runtime}
					</p>
					<p class="capsule text-gray-700 text-base mb-4 p-2">Rating: {movie && movie.imdbRating}/10</p>
				</div>
			</div>
		</div>
	);
};

export default Movie;
