import React from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../../components/Loading';
import MovieDetails from '../../containers/MovieDetails';
import EmptyData from '../../components/EmptyData';

import ApiService from '../../services/ApiService';

const MovieDetailsPage = () => {
    const { id } = useParams();
    const [loading, setLoading] = React.useState(false);
    const [movieDetails, setMovieDetails] = React.useState(null);

    React.useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                setLoading(true)
                const searchParams = new URLSearchParams({ i: id, plot: 'full' });
                const details = await ApiService.get('', searchParams);
                if (details.Response === 'True') {
                    const movie = {
                        id: details.imdbID,
                        title: details.Title,
                        released: details.Released,
                        poster: details.Poster === 'N/A' ? `https://ui-avatars.com/api/?name=${details.Title}` : details.Poster,
                        plot: details.Plot,
                        rating: details.imdbRating,
                    }
                    setMovieDetails(movie);
                } else {
                    throw new Error(details.Error || 'Something Went Wrong');
                }
            } catch (error) {
                console.error('Failed to fetch movie details:', error);
                // Handle error - show notification or set error state
            } finally {
                setLoading(false)
            }
        };

        fetchMovieDetails();
    }, [id]);

    return (
        loading ?
            <Loading /> :
            movieDetails ?
                <MovieDetails movie={movieDetails} /> :
                <EmptyData />
    );
};

export default MovieDetailsPage;