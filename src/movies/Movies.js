import React from 'react';
import './Movies.css';

function Movies({ movies }) {
    return (
        <div className='card-list'>
            {movies.map((movie) => (
                <div className='card' key={movie.id}>
                    <div className='card-poster'>
                        <img
                            className='movie-poster'
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt=''
                        />
                    </div>
                    <div className='card-content'>
                        <h1 className='movie-title'>{movie.title}</h1>
                        <h2 className='movie-release'>{movie.release_date}</h2>
                        <p className='movie-overview'>{movie.overview}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Movies;
