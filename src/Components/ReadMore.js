import React, { useState,useEffect } from 'react';
import axios from 'axios';


const ReadMore = () => {
  const [movies, setMovies] = useState([]);
  
  const [showFullOverview, setShowFullOverview] = useState(false);
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
           `https://api.themoviedb.org/3/discover/movie?api_key=0ff0fd4930847733705b99150a2ba85c`,
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
  const toggleOverview = () => {
    setShowFullOverview(!showFullOverview);
  };

  return (
   
       <>
       <div className="row">
       
       {movies.map((movie) => (
         
         <div className=" col-2" style={{marginTop:"100px"}}>
         <div className="movie-cards">
        
         <div key={movie.id} className="card">
           <img
             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
             alt={movie.title}
           />
           <div className="card-body">
             
             <h5 className="card-title">{movie.title}</h5>
             
             {movie && (
        <div>
          <h6>
          
            Average Rating: {showFullOverview ? movie.vote_average :`${movie.vote_average}`}
            </h6>
            <a href='#' onClick={toggleOverview}>
              {showFullOverview ? 'Read Less' : 'Read More'}
            </a>
             <p>Release Date: { showFullOverview ? movie.release_date : `${movie.release_date}`}</p>
          <p>
            {showFullOverview
              ? movie.overview
              : `${movie.overview.slice(0, 50)}...`}
            
          </p>
        </div>
      )}
 
           </div>
           
         </div>
         </div>
         </div>
        
           ))
 }  
  </div>
 
       </>
  )
}

export default ReadMore;

