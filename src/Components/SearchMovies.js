import React, { useState } from 'react';
import axios from 'axios';


const SearchMovies= () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=0ff0fd4930847733705b99150a2ba85c &query=${query}`
      );
      setMovies(response.data.results.slice(0,10));
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className="row">
        <div className='col-sm-12'>
    <div className='d-flex align-items-center justify-content-center'>
      <input className="form-control me-2 w-50" 
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a movie..."/>
      <button  className="btn btn-outline-danger text-white" onClick={handleSearch}>Search</button>
      </div>

      <div>
        {movies.map((movie) => (
          <div className='col-12 col-sm-6 col-md-4 col-lg-3' >
        
          
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <img
              src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              alt={`${movie.title} poster`}/>
              </div>
            </div>
        ))}
        
      </div>
    </div>

    </div>
  );
};

export default SearchMovies


    
    