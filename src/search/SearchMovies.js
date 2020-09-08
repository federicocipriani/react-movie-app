import React, { Fragment } from 'react';
import './SearchMovies.scss';

function SearchMovies({ handleChange, searchMovies, query }) {
    return (
        <Fragment>
            <form className='form' onSubmit={searchMovies}>
                <label className='label' htmlFor='query'>
                    Movie Name
                </label>
                <input
                    className='input'
                    type='text'
                    name='query'
                    value={query}
                    placeholder='Movie name'
                    onChange={handleChange}
                />
                <button className='button' type='submit'>
                    Search
                </button>
            </form>
        </Fragment>
    );
}

export default SearchMovies;
