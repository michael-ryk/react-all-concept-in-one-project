import { useState } from 'react';

import dummyMovies from '../FetchApi/dummyMovies';
import MovieList from '../FetchApi/MoviesList';

const FetchApi = () => {
  const [movies, setMovies] = useState();

  //function to fetch data from backend
  function fetchMoviesHandler() {
    fetch('https://swapi.dev/api/films/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //Transfrom received object to have properties that component expect
        const transformedArray = data.results.map(item => {
          return {
            id: item.episode_id,
            title: item.title,
            openingText: item.opening_crawl,
            releaseDate: item.release_date
          }
        });

        setMovies(transformedArray);
      });

  }

  return (
    <>
      <h1>Fetch API</h1>
      <button onClick={fetchMoviesHandler}>Fetch data from Server</button>
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default FetchApi;
