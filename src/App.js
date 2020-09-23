import React, { useState, useEffect } from 'react';
import Header from './header/Header';
import Movies from './movies/Movies';
import Title from './title/Title';

function App() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        if (query === '') {
            var url =
                'https://api.themoviedb.org/3/movie/popular?api_key=03439943d1853c45b586f07ebf2a0c16&language=en-US&page=1';
        } else {
            var url = `https://api.themoviedb.org/3/search/movie?api_key=03439943d1853c45b586f07ebf2a0c16&language=en-US&query=${query}&page=1&include_adult=false`;
        }

        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setMovies(data.results);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [query]);

    return (
        <div className='container'>
            <Header query={query} handleChange={handleChange} />
            <main className='page-content'>
                <Title query={query} />
                <Movies movies={movies} />
            </main>
        </div>
    );
}

export default App;
