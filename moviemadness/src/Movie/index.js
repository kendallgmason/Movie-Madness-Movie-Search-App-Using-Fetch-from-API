import { useState, useEffect } from "react";

export const Movie = ({ movieTitle }) => {
	const [movie, setMovie] = useState();

	useEffect(() => {
		async function getData() {
			const response = await fetch(
				`https://www.omdbapi.com/?apikey=3b2a6fcc&t=${movieTitle}`
			);
			const data = await response.json();
			setMovie(data);
		}

		getData();
	}, [movieTitle]);

	console.log(movie);
	return (
		<div class="flex justify-center mb-10">
			<div class="flex flex-col md:flex-row md:max-w-l rounded-lg bg-white shadow-lg">
				<img
					class=" w-full h-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
					src={movie && movie.Poster}
					alt={movie && movie.Title}
				/>
				<div class="p-6 flex flex-col justify-start">
					<h5 class="text-gray-900 text-xl font-medium mb-2">
						{movie && movie.Title}
					</h5>
					<p class="text-gray-700 text-base mb-4">
						Plot: {movie && movie.Plot}
					</p>
					<p class="text-gray-600 text-xs">Starring: {movie && movie.Actors}</p>
					<p class="text-gray-600 text-xs">
						Year: {movie && movie.Year}, Runtime: {movie && movie.Runtime}
					</p>
					<p>IMDBRating: {movie && movie.imdbRating}</p>
				</div>
			</div>
		</div>
	);
};

export default Movie;
