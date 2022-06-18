import React, { useState, useEffect } from "react";

export const MovieFetch = ({ movieTitle }) => {
	const [movie, setMovie] = useState();

	useEffect(() => {
		async function getData() {
			const response = await fetch(
				`https://www.omdbapi.com/?apikey=3b2a6fcc&s=${movieTitle}`
			);
			const data = await response.json();
			setMovie(data.Search);
		}

		getData();
	}, [movieTitle]);

	console.log(movie);
	return (
		<div>
			<ul class="grid grid-cols-2 md:grid-cols-5 sm:grid-col-3 p-8 gap-8">
				{movie &&
					movie.map((movie) => (
						<li key={movie.imdbID}>
							<div class="flex justify-center h-full w-48">
								<div class="transition-transform transform hover:scale-105 cursor-pointer duration-300 ease-in-out rounded-lg shadow-lg bg-gray-300 max-w-sm">
									<a href="#!">
										<img
											class="object-scale-down"
											src={movie.Poster}
											alt={movie.Title}
										/>
									</a>
									<div class="p-6">
										<h5 class="text-gray-900 text-xl font-medium mb-2">
											{movie.Title}
										</h5>
										<p class="text-gray-700 text-base mb-4">
											{movie.Year}
										</p>
									</div>
								</div>
							</div>
						</li>
					))}
			</ul>
		</div>
	);
};

export default MovieFetch;
