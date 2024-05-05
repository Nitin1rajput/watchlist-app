import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

import { useWatchList } from '../../context/WatchListContext'
import './styles.css';
import { useAuth } from '../../context/AuthContext';

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();
    const { auth } = useAuth();
    const { watchList, addToWatchList, removeFromWatchList } = useWatchList()

    const isInWatchList = watchList[auth.user.username]?.some((item) => item.id === movie.id);

    const handleCardClick = () => {
        navigate(`/movie/${movie.id}`);
    };
    const handleAddToWatchList = (e) => {
        e.stopPropagation();
        if (isInWatchList) {
            removeFromWatchList(movie.id, auth.user.username);
        } else {
            addToWatchList(movie, auth.user.username);
        }
    };
    return (
        <div className="movie-card" onClick={handleCardClick}>
            <img src={movie.poster === 'N/A' ? `https://ui-avatars.com/api/?name=${movie.title}` : movie.poster} alt={`Poster`} className="movie-card-poster" />
            <button className="movie-card-watchlist-btn" onClick={handleAddToWatchList}>
                {
                    isInWatchList ? (<FontAwesomeIcon icon={faCheck} />) : (<FontAwesomeIcon icon={faPlus} />)
                }
            </button>
            <div className="movie-card-info">
                <h3 className="movie-card-title">{movie.title}</h3>
                <p className="movie-card-release-date">Release Date: {movie.year}</p>
            </div>
        </div>
    );
};

export default MovieCard;
