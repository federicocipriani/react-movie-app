import React from 'react';

function SearchMovies({ handleChange, searchMovies, query }) {
    return (
        <div>
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
        </div>
    );
}

export default SearchMovies;
