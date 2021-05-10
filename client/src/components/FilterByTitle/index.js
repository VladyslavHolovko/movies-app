import './index.scss';
import React from 'react';
import TextField from "@material-ui/core/TextField";

const FilterByTitle = ({ value, onChange}) => {
    return (
        <TextField
            className="filter-by-title"
            label="Search by title"
            value={value}
            onChange={onChange}
        />
    );
};

export default FilterByTitle;