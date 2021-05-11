import './index.scss';
import React, { useContext, useEffect, useState } from 'react';
import FileUploaderContainer from "../FileUploaderContainer";
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Backdrop from '@material-ui/core/Backdrop';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { postNewMovie } from "../../requests/movies";
import AppContext from "../../context/appContext";
import ALERT_VALUES from "../../constants/alertValues";
import EMPTY_MOVIE_DATA from "../../constants/emptyMovieData";
import MOVIE_FORMAT_TYPES from "../../constants/movieFormatTypes";


const ModalContainer = () => {
    const { setAlertValue, reloadMovies, isModalOpen, setIsModalOpen, updateStars } = useContext(AppContext);

    const [isMovieDataChanged, setIsMovieDataChanged] = useState(false);
    const [newMovieData, setNewMovieData] = useState(EMPTY_MOVIE_DATA);

    useEffect(() => {
        setNewMovieData(EMPTY_MOVIE_DATA);
    }, [isModalOpen]);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = fieldName => e => {
        setIsMovieDataChanged(true);

        let value = e.target.value

        if (fieldName === 'stars') {
            value = value.split(/\r\n|\r|\n/g);
        }

        setNewMovieData(data => ({
            ...data,
            [fieldName]: value
        }))
    };

    const handleSaveButtonClick = () => {
        postNewMovie(newMovieData).then(res => {
            if (res.status === 200) {
                setAlertValue(ALERT_VALUES.ADD.SUCCESS);

                reloadMovies();
                updateStars();
                closeModal();
                return;
            }

            setIsMovieDataChanged(false);
            setAlertValue(ALERT_VALUES.ADD.FAILED);
        })
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className="modal"
            open={isModalOpen}
            onClose={closeModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500
            }}
        >
            <Fade in={isModalOpen}>
                <Paper className="modal__content">
                    <h4 className='modal__header'>Add new movie:</h4>
                    <TextField
                        className="modal__input"
                        label="Title"
                        variant="outlined"
                        onChange={handleInputChange('title')}
                    />
                    <div className="modal__row">
                        <TextField
                            className="modal__input _small"
                            label="Year"
                            type="number"
                            variant="outlined"
                            onChange={handleInputChange('releaseYear')}
                        />
                        <TextField
                            className="modal__input _small"
                            select
                            label="Format"
                            onChange={handleInputChange('format')}
                            variant="outlined"
                        >
                            {MOVIE_FORMAT_TYPES.map(format => (
                                <MenuItem key={format} value={format}>
                                    {format}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <TextField
                        label="Stars (each on new line)"
                        multiline
                        rows={5}
                        variant="outlined"
                        onChange={handleInputChange('stars')}
                    />
                    <Button
                        className="modal__button"
                        variant="contained"
                        color="primary"
                        disabled={!isMovieDataChanged}
                        onClick={handleSaveButtonClick}
                    >
                        Save
                    </Button>
                    <FileUploaderContainer/>
                </Paper>
            </Fade>
        </Modal>
    );
};

export default ModalContainer;