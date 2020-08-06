import React, { useState } from 'react'

import AlarmClockView from '../presentation/AlarmClockView'
import AlarmClockToolsView from '../presentation/AlarmClockToolsView'

const AlarmClock = () => {

    return (
        <AlarmClockView>
            <AlarmClockToolsView />
        </AlarmClockView>
    )
}

export default AlarmClock
