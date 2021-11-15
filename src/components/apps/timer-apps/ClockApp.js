import React, { useState, useEffect } from 'react';

const getTimeString = () => {
    const date = new Date(Date.now()).toLocaleTimeString();
    return date;
}

const getTimeString2 = () => {
    const date2 = new Date(Date.now()).toLocaleTimeString();
    return date2;
}

const ClockApp = () => {
    const [time, setTime] = useState(getTimeString());
    const [time2, setTime2] = useState(getTimeString2());

    useEffect(() => {
        const interval = setInterval(() => {
            let date = getTimeString();
            let date2 = getTimeString2();
            setTime(date);
            setTime2(date2);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <h1 className="section-title">React Clock</h1>
            <hr className="explanation" />
            <p>{time} Indianapolis</p>
            <p>{time2} San Francisco</p>
        </div>
    );
};

export default ClockApp;

