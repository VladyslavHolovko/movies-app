import API_URL from '../constants/api';

export const getMoviesList = async (queryParams) => {
    const url = `${API_URL}/movies?${new URLSearchParams(queryParams)}`;

    return await fetch(url)
        .then(res => res.json());
};

export const deleteMovie = async (movieId) => {
    const url = `${API_URL}/movies/${movieId}`;

    return await fetch(url, {
        method: 'DELETE'
    });
};

export const postNewMovie = async (movieData) => {
    const url = `${API_URL}/movies`;

    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movieData)
    });
};

export const uploadNewMovies = async (movies) => {
    const url = `${API_URL}/movies/upload`;

    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movies)
    });
};
