import { useState } from 'react';

import dummyMovies from '../FetchApi/dummyMovies';
import MovieList from '../FetchApi/MoviesList';

const FetchApi = () => {

  //State to save fetched data
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //function to fetch data from backend using Async Wait
  async function fetchMoviesHandler() {
    setIsLoading(true);
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();
        
    //Transfrom received object to have properties that component expect
    const transformedArray = data.results.map(item => {
      return {
        id: item.episode_id,
        title: item.title,
        openingText: item.opening_crawl,
        releaseDate: item.release_date
      }
    });

    //Put transformed array to state
    setMovies(transformedArray);
    setIsLoading(false);

  }

  // Example of fetch without Async Wait - we don't use it
  function fetchMoviesWithoutAsyncWait() {
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

        //Put transformed array to state
        setMovies(transformedArray);
      });
  }

  return (
    <>
      <h1>Fetch API</h1>
      <button onClick={fetchMoviesHandler}>Fetch data from Server</button>
      {isLoading && <p>Loading...</p>}
      {!isLoading && movies.length>0 && <MovieList movies={movies} />}
      {!isLoading && movies.length===0 && <p>Movies not found.</p>}
    </>
  );
};

export default FetchApi;
