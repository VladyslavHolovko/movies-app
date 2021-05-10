import './index.scss';
import React, { useContext } from 'react';
import { IconButton } from "@material-ui/core";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import AppContext from "../../context/appContext";

const ActionButtonsContainer = () => {
    const { setIsDeleteVisible, setIsModalOpen } = useContext(AppContext);

    const toggleStateOnClick = (setStateCallback) => () => {
        setStateCallback(state => !state);
    }

    return (
        <div className="action-buttons">
            <IconButton
                className="action-buttons__button _delete"
                onClick={toggleStateOnClick(setIsDeleteVisible)}
            >
                <DeleteForeverIcon className="action-buttons__button-icon" fontSize="large"/>
            </IconButton>
            <IconButton
                className="action-buttons__button _add"
                onClick={toggleStateOnClick(setIsModalOpen)}
            >
                <LibraryAddIcon className="action-buttons__button-icon" fontSize="large"/>
            </IconButton>
        </div>
    );
};

export default ActionButtonsContainer;