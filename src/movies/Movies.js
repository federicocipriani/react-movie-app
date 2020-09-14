import React, { useState, useEffect } from 'react';
import './Movies.scss';

function Movies({ movies }) {
    const [expandedId, setExpandedId] = useState(-1);

    const handleClick = (index) => {
        console.log(index);
        setExpandedId(expandedId === index ? -1 : index);
    };

    const poster = 'movie-poster';
    const poster_active = 'movie-poster active';
    const content = 'card-content';
    const content_active = 'card-content active';

    return (
        <div className='card-list'>
            {movies.map((movie, index) => (
                <div className='card-container' key={movie.id}>
                    <button
                        className='button'
                        onClick={() => handleClick(index)}></button>
                    <img
                        className={
                            expandedId === index ? poster_active : poster
                        }
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt=''
                    />
                    <div
                        className={
                            expandedId === index ? content_active : content
                        }>
                        <h2 className='movie-title'>{movie.title}</h2>
                        <p className='movie-release'>{movie.release_date}</p>
                        <p className='movie-overview'>{movie.overview}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Movies;
