import React, { useEffect, useState } from 'react';
import moment from 'moment';
import holidays from './holidays.json'
import { motion } from "framer-motion";
import { dashBoardVariant } from './animationVariants';

function ClockWidget() {
    let now = moment();
    let currentDayNumber = now.format('D');
    let currentDayText = now.format('dddd');
    let time = now.format('h:mm A');
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = moment().format('h:mm A');
        setCurrentTime(time);
    }

    useEffect(() => {
        // console.count('ClockWidget useEffect runs!');
        setInterval(updateTime, 1000);
    });

    // console.count('component ClockWidget rendered!');

    const currentDate = now.format("MMM D, YYYY")

    const currentHoliday = holidays.find((holiday) =>
        holiday.date === currentDate
    )
    return (
        <motion.dl
            className="timetoday"
            variants={dashBoardVariant}
        >
            <dt>Current time</dt>
            <dd id="currentDayText">{currentDayText}</dd>
            <dd id="currentDayNumber">{currentDayNumber}</dd>
            <dd id="currentTime">{currentTime}</dd>
            <dd id="currentHoliday"><span>|</span>{currentHoliday?.description}</dd>
        </motion.dl>
    )
}

export default ClockWidget;
