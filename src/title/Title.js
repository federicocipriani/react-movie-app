import React from 'react';
import titleStyles from './Title.module.scss';

function Title({ query }) {
    const styles = {
        marginBottom: '1rem',
    };

    const titles = (query) => {
        if (query === '') {
            return <h2 className={titleStyles.title}>Popular movies</h2>;
        } else {
            return (
                <h2 className={titleStyles.title}>
                    Search results for "{query}"
                </h2>
            );
        }
    };

    const title = titles(query);

    return <div>{title}</div>;
}

export default Title;
