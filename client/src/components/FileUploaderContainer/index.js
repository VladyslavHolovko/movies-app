import './index.scss';
import React, { useContext, useState } from 'react';
import { postNewMovie } from "../../requests/movies";
import parseMoviesFromFile from "../../utils/parseMoviesFromFile";
import AppContext from "../../context/appContext";
import ALERT_VALUES from "../../constants/alertValues";

const FileUploaderContainer = () => {
    const { setAlertValue, reloadMovies, setIsModalOpen, updateStars } = useContext(AppContext);

    const [parsedMovies, setParsedMovies] = useState();

    const handleFileChange = e => {
        const fr = new FileReader();

        fr.onload = () => {
            const movies = parseMoviesFromFile(fr.result);

            if (!movies.isValid) {
                setAlertValue(ALERT_VALUES.UPLOADING_FILE.WRONG_FILE);
                return;
            }

            setParsedMovies(movies.data);
        }

        fr.readAsText(e.target.files[0])
    };

    const handleUploadClick = () => {
        postNewMovie(parsedMovies)
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
                <input
                    type="file"
                    onChange={handleFileChange}
                />
                <button
                    onClick={handleUploadClick}
                    disabled={!parsedMovies}
                >
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