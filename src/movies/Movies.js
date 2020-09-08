import React, { useState } from 'react';
import './Movies.scss';

function Movies({ movies }) {
    const [expandedId, setExpandedId] = useState(-1);

    const handleClick = (index) => {
        console.log(index);
        setExpandedId(expandedId === index ? -1 : index);
    };

    return (
        <div className='card-list'>
            {movies.map((movie, index) => (
                <div className='card'>
                    <button key={movie.id} onClick={() => handleClick(index)}>
                        <div className='card-poster'>
                            <img
                                className='movie-poster'
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt=''
                            />
                        </div>
                        {expandedId === index && (
                            <div className='card-content'>
                                <h1 className='movie-title'>{movie.title}</h1>
                                <h2 className='movie-release'>
                                    {movie.release_date}
                                </h2>
                                <p className='movie-overview'>
                                    {movie.overview}
                                </p>
                            </div>
                        )}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Movies;
