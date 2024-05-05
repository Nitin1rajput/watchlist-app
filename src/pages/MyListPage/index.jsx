import React, { useEffect, useState } from 'react';

import MovieList from '../../containers/MovieList';
import EmptyData from '../../components/EmptyData';

import { useWatchList } from '../../context/WatchListContext';
import { useAuth } from '../../context/AuthContext';

function MyListPage() {
    const [movies, setMovies] = useState([]);

    const { auth } = useAuth();
    const { watchList } = useWatchList();

    useEffect(() => {
        setMovies(watchList[auth.user.username] || [])
    }, [auth.user.username, watchList]);

    return (
        <div className="main">
            <div className="main-header">
                <div className="main-heading">
                    <h1>My List</h1>
                </div>
            </div>
            <div className="movie-list">
                {movies.length > 0 ? (
                    <MovieList movies={movies} />
                ) : (
                    <EmptyData />
                )}
            </div>
        </div>
    );
}

export default MyListPage;