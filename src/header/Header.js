import React from 'react';
import SearchMovies from '../search/SearchMovies';
import headerStyles from './Header.module.scss';

function Header({ query, handleChange, searchMovies }) {
    return (
        <header className={headerStyles.header}>
            <h1 className={headerStyles.title}>What Should I Watch?</h1>
            <SearchMovies
                query={query}
                handleChange={handleChange}
                searchMovies={searchMovies}
            />
        </header>
    );
}

export default Header;
