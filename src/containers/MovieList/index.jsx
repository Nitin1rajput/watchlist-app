import React from 'react';
import MovieCard from '../../components/MovieCard';

import './styles.css';

const MovieList = ({ movies }) => {
    return (
        <div className="movie-list-view">
            {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;