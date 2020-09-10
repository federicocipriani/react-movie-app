import React from 'react';
import SearchMovies from '../search/SearchMovies';
import headerStyles from './Header.module.scss';

function Header({ query, handleChange, searchMovies }) {
    return (
        <div className={headerStyles.header}>
            <h1>What Should I Watch?</h1>
            <SearchMovies
                query={query}
                handleChange={handleChange}
                searchMovies={searchMovies}
            />
        </div>
    );
}

export default Header;
