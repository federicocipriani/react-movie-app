import React, { useState } from 'react';
import './Movies.scss';

function Movies({ movies }) {
    const [expandedId, setExpandedId] = useState(-1);

    const poster = 'movie-poster-container';
    const poster_active = 'movie-poster-container active';
    const poster_pic = 'movie-poster';
    const poster_pic_active = 'movie-poster active';
    const poster_ph_pic = 'movie-poster-ph';
    const poster_ph_pic_active = 'movie-poster-ph active';
    const ratings = 'movie-rating-container';
    const ratings_active = 'movie-rating-container active';
    const button = 'button';
    const button_active = 'button active';
    const content = 'card-content';
    const content_active = 'card-content active';

    const handleClick = (index) => {
        setExpandedId(expandedId === index ? -1 : index);
    };

    const movieRating = movies.map((movie) => {
        if (movie.vote_average > 0) {
            return (
                <p>
                    <span className='movie-vote-rating'>
                        {movie.vote_average}
                    </span>
                    /10
                </p>
            );
        } else {
            return <p className='movie-no-vote'>No votes yet</p>;
        }
    });

    const moviePoster = movies.map((movie, index) => {
        if (movie.poster_path === null) {
            return (
                <div
                    className={
                        expandedId === index
                            ? poster_ph_pic_active
                            : poster_ph_pic
                    }>
                    <h2>{movie.title}</h2>
                    <p>Poster not available</p>
                </div>
            );
        } else {
            return (
                <img
                    className={
                        expandedId === index ? poster_pic_active : poster_pic
                    }
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={`poster_${movie.title}`}
                />
            );
        }
    });

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
                        {moviePoster[index]}
                        <div
                            className={
                                expandedId === index ? ratings_active : ratings
                            }>
                            <div className='movie-rating'>
                                <div className='rating-background'></div>
                                <div className='movie-vote-wrapper'>
                                    <div className='movie-vote'>
                                        {movieRating[index]}
                                    </div>
                                    <div className='rating-footer'>
                                        <small>RATING</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            expandedId === index ? content_active : content
                        }>
                        <h2 className='movie-title'>{movie.title}</h2>
                        <div className='movie-release-container'>
                            <p className='movie-release'>
                                <small>RELEASE DATE</small>
                            </p>
                            <p>{movie.release_date}</p>
                        </div>
                        <div className='movie-overview-container'>
                            <p className='movie-overview'>
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
