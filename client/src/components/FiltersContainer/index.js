import './index.scss';
import React, { useContext } from 'react';
import Paper from "@material-ui/core/Paper";
import FilterByStar from "../FilterByStar";
import FilterByTitle from "../FilterByTitle";
import AppContext from "../../context/appContext";

const FiltersContainer = () => {
    const { activeFilters, onFilterChange, stars } = useContext(AppContext);

    return (
        <Paper className="filters">
            <FilterByStar
                options={stars}
                value={activeFilters.stars}
                onChange={onFilterChange('stars')}
            />
            <FilterByTitle
                className="filter__by-title"
                value={activeFilters.title}
                onChange={onFilterChange('title')}
            />
        </Paper>
    );
};

export default FiltersContainer;