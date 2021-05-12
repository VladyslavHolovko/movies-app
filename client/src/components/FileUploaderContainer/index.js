import './index.scss';
import React, { useContext, useState } from 'react';
import { uploadNewMovies } from "../../requests/movies";
import parseMoviesFromFile from "../../utils/parseMoviesFromFile";
import AppContext from "../../context/appContext";
import ALERT_VALUES from "../../constants/alertValues";

const FileUploaderContainer = () => {
    const { setAlertValue, reloadMovies, setIsModalOpen, updateStars } = useContext(AppContext);

    const [parsedMovies, setParsedMovies] = useState();

    const handleFileChange = e => {
        const fr = new FileReader();

        fr.onload = () => {
            try {
                const movies = parseMoviesFromFile(fr.result)

                setParsedMovies(movies);
            } catch (e) {
                console.error(e);
            }
        }

        fr.readAsText(e.target.files[0])
    };

    const handleFileUpload = () => {
        if (!parsedMovies.length) {
            setAlertValue(ALERT_VALUES.UPLOADING_FILE.FAILED);
            return;
        }

        uploadNewMovies(parsedMovies)
            .then((res) => {
                if (res.status === 200) {
                    setIsModalOpen(false);
                    setAlertValue(ALERT_VALUES.UPLOADING_FILE.SUCCESS);
                    reloadMovies();
                    updateStars();
                    return;
                }

                setAlertValue(ALERT_VALUES.UPLOADING_FILE.FAILED);
            });
    }

    return (
        <div className="file-uploader">
            <h5 className="file-uploader__header">
                Or you can upload a file with movies data:
            </h5>
            <div>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleFileUpload}>
                    Upload
                </button>
            </div>
            <div className="file-uploader__example-container">
                <p className="file-uploader__example-header">
                    File structure example:
                </p>
                <p className="file-uploader__example">
                    Title: Blazing Saddles<br/>
                    Release Year: 1974<br/>
                    Format: VHS<br/>
                    Stars: Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder
                </p>
            </div>
        </div>
    );
};

export default FileUploaderContainer;