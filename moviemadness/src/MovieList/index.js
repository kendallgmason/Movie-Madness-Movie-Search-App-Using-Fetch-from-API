import React, { useState, useEffect } from "react";

export const MovieFetch = ({ movieTitle, setSearch }) => {
	const [movie, setMovie] = useState();

	useEffect(() => {
		async function getData() {
			const response = await fetch(
				`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&s=${movieTitle}`
			);
			const data = await response.json();
			setMovie(data.Search);
			console.log(movie)
		}

		getData();
	}, [movieTitle]);

	return (
		<div class="flex items-center justify-center">
			<ul class="gridlayout">
				{movie &&
					movie.map((movie) => (
						<li onClick={()=> setSearch(movie.Title)} key={movie.imdbID}>
							<div class="flex justify-center h-full w-48">
								<div class="card">
									<a href="#!">
										<img
											class="object-scale-down p-2"
											src={(movie.Poster === "N/A") ? "https://plchldr.co/i/500x500?bg=111111" :
											movie.Poster}
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
