import React from 'react';
import './Title.scss';

function Title({ query }) {
    const titles = (query) => {
        if (query === '') {
            return <h2 className='title'>Popular movies</h2>;
        } else {
            return <h2 className='title'>Search results for "{query}"</h2>;
        }
    };

    const title = titles(query);

    return <div className='title_container'>{title}</div>;
}

export default Title;
