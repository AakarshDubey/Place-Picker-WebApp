import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
    const [remainigTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('interval');
            setRemainingTime((prevTime) => prevTime - 10);
        }, 10);
        //cleanup function for the setInterval
        return () => {
            clearInterval(interval);
        };
    }, []);

    return <progress value={remainigTime} max={timer} />
}