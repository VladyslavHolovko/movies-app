import { useEffect, useState } from "react";
import { getStarsList } from "../requests/stars";

const useStarsList = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        updateStars();
    }, []);

    const updateStars = () => {
        getStarsList().then(setStars);
    }

    return [ stars, updateStars ];
}

export default useStarsList;