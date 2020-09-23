import React from 'react';
import SearchMovies from '../search/SearchMovies';
import './Header.scss';

function Header({ query, handleChange, searchMovies }) {
    return (
        <header className='header'>
            <h1 className='header_title'>What Should I Watch?</h1>
            <SearchMovies
                query={query}
                handleChange={handleChange}
                searchMovies={searchMovies}
            />
        </header>
    );
}

export default Header;
