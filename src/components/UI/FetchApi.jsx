import { useState } from 'react';

import dummyMovies from '../FetchApi/dummyMovies';
import MovieList from '../FetchApi/MoviesList';

const FetchApi = () => {

  //State to save fetched data
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //function to fetch data from backend using Async Wait
  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);     //Clear previous errors (if was)
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      
      //Must have for error generate if wront responce - in Axios (3th party tool) we don't need to do it
      if (!response.ok){
        console.log(response.status);
        throw new Error('Bad response from server !!! ' + response.status);
      }
      
      const data = await response.json();     //Parse response body

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
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);  //Stop loading in both cases
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
      {!isLoading && !error && movies.length===0 && <p>Movies not found.</p>}
      {!isLoading && error && <p>{error}</p>}
    </>
  );
};

export default FetchApi;
