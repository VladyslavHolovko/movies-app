import './index.scss';
import React, { useContext } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import MovieCard from "../MovieCard";
import Grow from "@material-ui/core/Grow";
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
                className="movies-list movies-list__container"
                gutter="1rem"
            >
                {movies && movies.map(movie => (
                    <MovieCard
                        key={movie._id}
                        movie={movie}
                        showDeleteButton={isDeleteVisible}
                        onDelete={onDelete(movie._id)}
                    />
                ))}
                <Grow in={true} timeout={600}>
                    <p className="movies-list__message">
                        {movies && !movies.length && activeFilters.title && (
                            "There is no movies with this title..."
                        )}
                        {movies && !movies.length && !activeFilters.title && (
                            'Movie list is empty now. Try to add one :)'
                        )}
                        {!movies && (
                            "Loading movies..."
                        )}
                    </p>
                </Grow>
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default MoviesListContainer;