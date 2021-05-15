const ALERT_VALUES = {
    ADD: {
        SUCCESS: {
            severity: 'success',
            message: 'Movie was added successfully!'
        },
        FAILED: {
            severity: 'error',
            message: 'Invalid movie information.'
        }
    },
    DELETE: {
        SUCCESS: {
            severity: 'success',
            message: 'Movie was deleted successfully!'
        }
    },
    UPLOADING_FILE: {
        SUCCESS: {
            severity: 'success',
            message: 'File was successfully upload!'
        },
        WRONG_FILE: {
            severity: 'error',
            message: `Can not find correct movie data in this file.`
        },
        FAILED: {
            severity: 'error',
            message: `File containing movies that is already in the list.`
        }
    }
};

export default ALERT_VALUES;