import './index.scss';
import React from 'react';
import Card from '@material-ui/core/Card';
import Grow from '@material-ui/core/Grow';
import IconButton from "@material-ui/core/IconButton";
import CardContent from '@material-ui/core/CardContent';
import CancelIcon from '@material-ui/icons/Cancel';
import { unstable_createMuiStrictModeTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

//To avoid 'findDOMNode is deprecated in StrictMode' console error
const theme = unstable_createMuiStrictModeTheme();

const MovieCard = ({ movie, showDeleteButton, onDelete }) => {
    return (
        <ThemeProvider theme={theme}>
            <Grow in={true} timeout={200}>
                <Card className={`movie-card ${showDeleteButton && '_show-delete'}`}>
                    <CardContent className="movie-card__content">
                        <div className="movie-card__header">
                        <span>
                            {movie.releaseYear}
                        </span>
                            <span>
                            {movie.format}
                        </span>
                        </div>
                        <h3 className="movie-card__title">
                            {movie.title}
                        </h3>
                        {showDeleteButton &&
                            <IconButton
                                className="movie-card__delete-button"
                                onClick={onDelete}
                            >
                                <CancelIcon className="movie-card__button-icon" fontSize="small"/>
                            </IconButton>
                        }
                        <div className="movie-card__footer">
                            {movie.stars.map((star, i) => (
                                <p className="movie-card__star" key={i}>
                                    {star}
                                    {(i !== movie.stars.length - 1) && ','}
                                </p>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </Grow>
        </ThemeProvider>
    );
};

export default MovieCard;