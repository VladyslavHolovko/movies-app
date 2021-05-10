import API_URL from '../constants/api';

export const getStarsList = async () => {
    return await fetch(`${API_URL}/stars`)
        .then(res => res.json());
}