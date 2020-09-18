import React, { useState, useEffect } from 'react';
import './Movies.scss';

function Movies({ movies }) {
    const [expandedId, setExpandedId] = useState(-1);

    const handleClick = (index) => {
        console.log(index);
        setExpandedId(expandedId === index ? -1 : index);
    };

    const poster = 'movie-poster-container';
    const poster_active = 'movie-poster-container active';
    const poster_pic = 'movie-poster';
    const poster_pic_active = 'movie-poster active';
    const ratings = 'movie-rating-container';
    const ratings_active = 'movie-rating-container active';
    const button = 'button';
    const button_active = 'button active';
    const content = 'card-content';
    const content_active = 'card-content active';

    return (
        <div className='card-list'>
            {movies.map((movie, index) => (
                <div className='card-container' key={movie.id}>
                    <button
                        className={
                            expandedId === index ? button_active : button
                        }
                        onClick={() => handleClick(index)}></button>
                    <div
                        className={
                            expandedId === index ? poster_active : poster
                        }>
                        <img
                            className={
                                expandedId === index ? poster_pic_active : poster_pic
                            }
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt=''
                        />
                        <div className={
                                expandedId === index ? ratings_active : ratings
                            }>
                            <div className='movie-rating'>
                                <div className='rating-background'></div>
                                <div className='movie-vote-wrapper'>
                                    <span className='movie-vote'>
                                        {movie.vote_average}
                                    </span>
                                    /10
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            expandedId === index ? content_active : content
                        }>
                        <h2 className='movie-title'>{movie.title}</h2>
                        <div className='movie-release'>
                            <p>
                                <small>RELEASE DATE</small>
                            </p>
                            <p>{movie.release_date}</p>
                        </div>
                        <div className='movie-overview'>
                            <p>
                                <small>QUICK OVERVIEW</small>
                            </p>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Movies;
