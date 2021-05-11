import './index.scss';
import React, { useContext } from 'react';
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import AppContext from "../../context/appContext";
import ALERT_VALUES from "../../constants/alertValues";

const AlertContainer = () => {
    const { alertValue } = useContext(AppContext);

    const alertData = (() => {
        switch (alertValue) {
            case ALERT_VALUES.ADD.SUCCESS:
                return {
                    severity: 'success',
                    message: 'Movie was added successfully!'
                }
            case ALERT_VALUES.ADD.FAILED:
                return {
                    severity: 'error',
                    message: 'Invalid movie information. All fields are required.'
                }
            case ALERT_VALUES.DELETE.SUCCESS:
                return {
                    severity: 'success',
                    message: 'Movie was deleted successfully!'
                }
            case ALERT_VALUES.UPLOADING_FILE.SUCCESS:
                return {
                    severity: 'success',
                    message: 'File was successfully upload!'
                }
            case ALERT_VALUES.UPLOADING_FILE.FAILED:
                return {
                    severity: 'error',
                    message: `Can not upload this file`
                }
            default:
                return {
                    severity: '',
                    message: ''
                }
        }
    })();

    return (
        <Snackbar
            open={!!alertValue}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
            <MuiAlert
                elevation={6}
                variant="filled"
                severity={alertData.severity}
            >
                {alertData.message}
            </MuiAlert>
        </Snackbar>
    );
};

export default AlertContainer;