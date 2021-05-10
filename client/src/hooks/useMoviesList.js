import { useEffect, useState } from "react";
import { getMoviesList } from "../requests/movies";

const useMovieList = () => {
    const [movies, setMovies] = useState([]);
    const [activeFilters, setActiveFilters] = useState({
        stars: 0,
        title: ''
    });

    useEffect(() => {
        loadMovies();
    }, [activeFilters.stars, activeFilters.title]);

    const loadMovies = () => {
        const queryParams = [];

        Object.entries(activeFilters).forEach(([name, value]) => {
            if (value) {
                queryParams.push([name, value]);
            }
        });

        getMoviesList(queryParams).then(setMovies);
    }

    const onFilterChange = filterName => event => {
        setActiveFilters(state => ({
            ...state,
            [filterName]: event.target.value
        }))
    }

    return { movies, activeFilters, onFilterChange, reloadMovies: loadMovies };
}

export default useMovieList;