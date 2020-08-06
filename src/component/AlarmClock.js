import React, { useState, useEffect } from 'react'
import moment from 'moment';

import AlarmClockView from '../presentation/AlarmClockView'
import AlarmClockToolsView from '../presentation/AlarmClockToolsView'

let currentTime = moment()
let alarmTime = currentTime.clone()
let minutesAdd = 0
let intervalCalDifdate = null
const AlarmClock = () => {
    const initDateDisplay = '00:00:00'
    const initTxtDisplay = 'LET THE COUNTDOWN BEGIN !!'
    const [dateDisplay, setDateDisplay] = useState(initDateDisplay)
    const [txtDisplay, setTxtDisplay] = useState(initTxtDisplay)
    const [customTime, setCustomTime] = useState()

    useEffect(() => {
        return () => {
            clearIntervalCalDifdate()
        }
    }, [])

    const clearIntervalCalDifdate = () => {
        clearInterval(intervalCalDifdate)
        intervalCalDifdate = null
    }

    const calDifdate = (startTime, endTime) => {
        const diff = moment(endTime).diff(startTime);
        const diffDuration = moment.duration(diff);

        return {
            days: diffDuration.days(),
            hours: diffDuration.hours(),
            minutes: diffDuration.minutes(),
            seconds: diffDuration.seconds()
        }
    }

    const convertFormatDisplay = (value) => {
        return value > 0 ? `0${value}`.slice(-2) : '00'
    }

    const manageDateDisplay = (currentTime = moment()) => {
        const diftResult = calDifdate(currentTime, alarmTime)
        if (diftResult.seconds !== 0 || diftResult.minutes !== 0 || diftResult.hours !== 0 || diftResult.days !== 0) {
            let strDateDisplay = `${convertFormatDisplay(diftResult.hours)}:${convertFormatDisplay(diftResult.minutes)}:${convertFormatDisplay(diftResult.seconds)}`

            if (diftResult.days > 0) {
                strDateDisplay = `${diftResult.days}d ${strDateDisplay}`
            }
            setDateDisplay(strDateDisplay)
        } else {
            setTxtDisplay("ALARM !!!!")
            resetTime()
        }
    }

    const handleClickStart = () => {
        if (!intervalCalDifdate) {
            setTxtDisplay(initTxtDisplay)
            alarmTime = moment().add({ minute: minutesAdd, seconds: 1 }).toDate()
            intervalCalDifdate = setInterval(() => {
                manageDateDisplay()
            }, 1000);
        }
    }

    const handleClickReset = () => {
        setTxtDisplay(initTxtDisplay)
        resetTime()
    }

    const resetTime = () => {
        if (intervalCalDifdate) {
            clearIntervalCalDifdate()
        }
        minutesAdd = 0
        currentTime = moment()
        alarmTime = currentTime.clone()
        setDateDisplay(initDateDisplay)
    }

    const handleAddTime = (minutes,) => () => {
        if (intervalCalDifdate) {
            alarmTime = moment(alarmTime).add(minutes, 'm').toDate();
            manageDateDisplay()
        } else { // กรณียังไม่ start
            minutesAdd = Number(minutesAdd) + Number(minutes)
            alarmTime = currentTime.clone().add(minutesAdd, 'm').toDate();
            manageDateDisplay(currentTime)
        }
    }

    const handleChangeCustomTime = (e) => {
        setCustomTime(e.target.value)
    }

    const handleAddCustomTime = () => {
        if (customTime) {
            const [house, minutes] = customTime.split(':')
            const totalMinutes = (Number(house) * 60) + Number(minutes)
            handleAddTime(totalMinutes)()
        }
    }

    return (
        <AlarmClockView
            title={txtDisplay}
            clock={dateDisplay}
            onClickStart={handleClickStart}
            onClickReset={handleClickReset}
        >
            <AlarmClockToolsView
                customTime={customTime}
                onAddTime={handleAddTime}
                onChangeCustomTime={handleChangeCustomTime}
                onAddCustomTime={handleAddCustomTime}
            />
        </AlarmClockView>
    )
}

export default AlarmClock
