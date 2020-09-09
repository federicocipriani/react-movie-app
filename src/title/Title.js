import React from 'react';

function Title({ query }) {
    const styles = {
        marginBottom: '1rem',
    };

    const titles = (query) => {
        if (query === '') {
            return <h2 style={styles}>Popular movies</h2>;
        } else {
            return <h2 style={styles}>Search results for "{query}"</h2>;
        }
    };

    const title = titles(query);

    return <div>{title}</div>;
}

export default Title;
