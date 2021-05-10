import { useEffect, useState } from "react";

const useAlertState = () => {
    const [alertValue, setAlertValue] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setAlertValue('')
        }, 3000);
    }, [alertValue]);

    return [ alertValue, setAlertValue ];
}

export default useAlertState;