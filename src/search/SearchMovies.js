import React, { Fragment } from 'react';
import './SearchMovies.scss';

function SearchMovies({ handleChange, query }) {
    return (
        <Fragment>
            <div className='input'>
                <input
                    className='input-box'
                    type='text'
                    name='query'
                    value={query}
                    onChange={handleChange}
                    autoComplete='off'
                    required
                />
                <div className='search-icon'>
                    <ion-icon className='icon' name='search-outline'></ion-icon>
                </div>
            </div>
        </Fragment>
    );
}

export default SearchMovies;
