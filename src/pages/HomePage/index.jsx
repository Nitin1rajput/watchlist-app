import React, { useEffect, useState } from 'react';

import SearchBar from '../../components/SearchBar';
import MovieList from '../../containers/MovieList';
import ErrorModal from '../../components/ErrorModal';
import EmptyData from '../../components/EmptyData';
import Loading from '../../components/Loading';

import { useSearch } from '../../context/SearchContext';
import ApiService from '../../services/ApiService';

import './styles.css'

function HomePage(props) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { searchTerm } = useSearch();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                let searchParams = {}
                if (searchTerm) {
                    searchParams = { s: searchTerm }
                }
                const data = await ApiService.get('', searchParams);

                if (data.Response === 'True') {
                    const moviesData = data.Search.map(movie => ({
                        id: movie.imdbID,
                        title: movie.Title,
                        poster: movie.Poster,
                        year: movie.Year,
                    }))
                    setMovies(moviesData);
                } else {
                    throw new Error(data.Error || 'Something went wrong')
                }
            } catch (error) {
                // Handle error
                console.error('Failed to fetch movies: ', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [searchTerm]);

    const handleCloseErrorModal = () => {
        setError(null);
    };

    return (
        <div className="main">
            {error && <ErrorModal errorMessage={error} onClose={handleCloseErrorModal} />}
            <div className="main-header">
                <div className="main-heading">
                    <h1>Welcome to Watchlists</h1>
                    <p>Browse movies, add them to watchlists and share them with friends.</p>
                    <p>Just click on  to add a movie, the poster to see more details</p>
                </div>
                <SearchBar />
            </div>
            <div className="movie-list">
                {loading ? (
                    <Loading />
                ) : movies.length > 0 ? (
                    <MovieList movies={movies} />
                ) : (
                    <EmptyData />
                )}
            </div>

        </div>
    );
}

export default HomePage;