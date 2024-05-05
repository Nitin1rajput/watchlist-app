import React from 'react';
import Button from '../../components/Button'

import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useWatchList } from '../../context/WatchListContext';

import './styles.css';
import { useAuth } from '../../context/AuthContext';

const MovieDetails = ({ movie }) => {
    const { watchList, addToWatchList, removeFromWatchList } = useWatchList()
    const { auth } = useAuth();

    const isInWatchList = watchList[auth.user.username]?.some((item) => item.id === movie.id);

    const handleAddToWatchList = (e) => {
        e.stopPropagation();
        if (isInWatchList) {
            removeFromWatchList(movie.id, auth.user.username);
        } else {
            addToWatchList(movie, auth.user.username);
        }
    };
    return (
        <div className="movie-details">
            <div className="movie-header">
                <p className='movie-title'>
                    Title: {movie.title}
                </p>
                <Button onClick={handleAddToWatchList} icon={isInWatchList ? faCheck : faPlus}>{isInWatchList ? 'Remove' : 'Add'}</Button>
            </div>
            <div className="movie-content">
                <div className="movie-poster">
                    <img src={movie.poster === 'N/A' ? '' : movie.poster} alt={`${movie.title} Poster`} />
                </div>
                <div className="movie-info">
                    <p className="movie-year"> Released: {movie.released}</p>
                    <p className='movie-rating'>Rating: {movie.rating} / 10</p>
                    <p className="movie-plot">{movie.plot}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;