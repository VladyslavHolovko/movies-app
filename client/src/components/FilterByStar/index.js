import './index.scss';
import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from '@material-ui/core/FormControl';

const FilterByStar = ({ options, value, onChange }) => {
    return (
        <FormControl className="filter-by-star">
            <InputLabel className="filter-by-star__helper-label">Select star:</InputLabel>
            <Select
                value={value}
                onChange={onChange}
            >
                <MenuItem value={0}>All</MenuItem>
                {options.map(option => (
                    <MenuItem value={option} key={option}>{option}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default FilterByStar;