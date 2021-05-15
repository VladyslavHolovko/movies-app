import './index.scss';
import React, { useContext } from 'react';
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import AppContext from "../../context/appContext";

const AlertContainer = () => {
    const { alertValue, setAlertValue } = useContext(AppContext);

    const handleAlertClose = () => {
        setAlertValue(alertValue => ({
            ...alertValue,
            message: ''
        }));
    }

    return (
        <Snackbar
            open={!!alertValue.message}
            autoHideDuration={3000}
            key={alertValue.message}
            onClose={handleAlertClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
            <MuiAlert
                elevation={6}
                variant="filled"
                severity={alertValue.severity}
            >
                {alertValue.message}
            </MuiAlert>
        </Snackbar>
    );
};

export default AlertContainer;