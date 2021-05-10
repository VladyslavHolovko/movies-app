import './App.scss';
import React, { useState } from 'react';
import AlertContainer from "../components/AlertContainer";
import ModalContainer from "../components/ModalContainer";
import FiltersContainer from "../components/FiltersContainer";
import MoviesListContainer from "../components/MoviesListContainer";
import ActionButtonsContainer from "../components/ActionButtonsContainer";
import useMovieList from "../hooks/useMoviesList";
import useAlertState from "../hooks/useAlertState";
import { Provider } from "../context/appContext";

function App() {
    const { movies, activeFilters, onFilterChange, reloadMovies } = useMovieList();
    const [isDeleteVisible, setIsDeleteVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [alertValue, setAlertValue] = useAlertState('');

    const contextValues = {
        movies, reloadMovies,
        activeFilters, onFilterChange,
        isDeleteVisible, setIsDeleteVisible,
        alertValue, setAlertValue,
        isModalOpen, setIsModalOpen
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
