
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const MovieCards = () => {
  const [movies, setMovies] = useState([]);
 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
           `https://api.themoviedb.org/3/discover/movie?api_0ff0fd4930847733705b99150a2ba85c`,
          {
            params: {
              api_key: `0ff0fd4930847733705b99150a2ba85c`, 
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    console.log(movies);
  }, []);
 
 

  return (
    
   <div className="row">
       
      {movies.map((movie) => (
        
        <div className=" col-12 col-sm-6 col-md-4 col-lg-3" style={{marginTop:"100px"}}>
        <div className="movie-cards">
       
        <div key={movie.id} className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}/>
          <div className="card-body">
            
            <h5 className="card-title">{movie.title}</h5>
            <h6>Average Rating: {movie.vote_average}</h6>
            <p>Release Date: {movie.release_date}</p>
            <p className="card-text">{movie.overview}</p>

          </div>
          
        </div>
        </div>
        </div>
       
          ))
}  
 </div>
    
  );
};

export default MovieCards;