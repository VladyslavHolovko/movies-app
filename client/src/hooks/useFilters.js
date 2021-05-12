import { useState } from "react";

const defaultFilters = {
    stars: 0,
    title: ''
};

const useFilters = (filters = defaultFilters) => {
    const [activeFilters, setActiveFilters] = useState(filters);

    const onFilterChange = filterName => event => {
        setActiveFilters(state => ({
            ...state,
            [filterName]: event.target.value
        }))
    }

    return [activeFilters, onFilterChange];
}

export default useFilters;