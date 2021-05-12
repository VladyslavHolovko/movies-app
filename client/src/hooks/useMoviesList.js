import { useEffect, useState } from "react";
import { getMoviesList } from "../requests/movies";

const useMovieList = activeFilters => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        loadMovies();
    }, [activeFilters]);

    const loadMovies = () => {
        const queryParams = [];

        Object.entries(activeFilters).forEach(([name, value]) => {
            if (value) {
                queryParams.push([name, value]);
            }
        });

        getMoviesList(queryParams).then(setMovies);
    }

    return [ movies, loadMovies ];
}

export default useMovieList;