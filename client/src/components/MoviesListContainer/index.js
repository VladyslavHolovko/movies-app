import './index.scss';
import React, { useContext } from 'react';
import MovieCard from "../MovieCard";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { deleteMovie } from "../../requests/movies";
import AppContext from "../../context/appContext";
import ALERT_VALUES from "../../constants/alertValues";

const MoviesListContainer = () => {
    const { movies, isDeleteVisible, reloadMovies, setAlertValue, activeFilters } = useContext(AppContext);

    const onDelete = (movieId) => () => {
        deleteMovie(movieId).then(res => {
            if (res.status === 200) {
                setAlertValue(ALERT_VALUES.DELETE.SUCCESS)
                reloadMovies();
            }
        });
    };

    return (
        <ResponsiveMasonry>
            <Masonry
                className="movies-list"
                gutter="1rem"
            >
                {movies.map(movie => (
                    <MovieCard
                        key={movie._id}
                        movie={movie}
                        showDeleteButton={isDeleteVisible}
                        onDelete={onDelete(movie._id)}
                    />
                ))}
                {!movies.length && activeFilters.title && (
                    <p>There is no movies with this title...</p>
                )}
                {!movies.length && !activeFilters.title && (
                    <p>Loading movies...</p>
                )}
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default MoviesListContainer;