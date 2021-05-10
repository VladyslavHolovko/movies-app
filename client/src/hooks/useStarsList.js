import { useEffect, useState } from "react";
import { getStarsList } from "../requests/stars";

const useStarsList = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        getStarsList().then(setStars);
    }, []);

    return [ stars ];
}

export default useStarsList;