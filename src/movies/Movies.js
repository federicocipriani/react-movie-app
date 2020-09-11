import React, { useState, useEffect } from 'react';
import './Movies.scss';

function Movies({ movies }) {
    const [expandedId, setExpandedId] = useState(-1);

    const handleClick = (index) => {
        console.log(index);
        setExpandedId(expandedId === index ? -1 : index);
    };

    const class_poster = 'movie-poster';
    const class_poster_active = 'movie-poster movie-poster-active';
    const class_content = 'card-content';
    const class_content_active = 'card-content card-content-active';

    return (
        <div className='card-list'>
            {movies.map((movie, index) => (
                <div className='card'>
                    <div className='card-poster'>
                        <button
                            className='clickable-area'
                            key={movie.id}
                            onClick={() => handleClick(index)}></button>
                        <img
                            className={
                                expandedId === index
                                    ? class_poster_active
                                    : class_poster
                            }
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt=''
                        />
                        <div
                            className={
                                expandedId === index
                                    ? class_content_active
                                    : class_content
                            }>
                            <h2 className='movie-title'>{movie.title}</h2>
                            <p className='movie-release'>
                                {movie.release_date}
                            </p>
                            <p className='movie-overview'>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Movies;
