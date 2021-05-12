import './App.scss';
import React, { useState } from 'react';
import AlertContainer from "../components/AlertContainer";
import ModalContainer from "../components/ModalContainer";
import FiltersContainer from "../components/FiltersContainer";
import MoviesListContainer from "../components/MoviesListContainer";
import ActionButtonsContainer from "../components/ActionButtonsContainer";
import useFilters from "../hooks/useFilters";
import useStarsList from "../hooks/useStarsList";
import useMovieList from "../hooks/useMoviesList";
import useAlertState from "../hooks/useAlertState";
import { Provider } from "../context/appContext";

function App() {
    const [activeFilters, onFilterChange] = useFilters({ stars: 0, title: '' });
    const [movies, reloadMovies] = useMovieList(activeFilters);
    const [stars, updateStars] = useStarsList();

    const [isDeleteVisible, setIsDeleteVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [alertValue, setAlertValue] = useAlertState('');

    const contextValues = {
        movies, reloadMovies,
        activeFilters, onFilterChange,
        isDeleteVisible, setIsDeleteVisible,
        alertValue, setAlertValue,
        isModalOpen, setIsModalOpen,
        stars, updateStars
    };

    return (
        <Provider value={contextValues}>
            <div className="movie-app">
                <FiltersContainer/>
                <MoviesListContainer/>
                <ActionButtonsContainer/>
                <ModalContainer/>
                <AlertContainer/>
            </div>
        </Provider>

    );
}

export default App;
