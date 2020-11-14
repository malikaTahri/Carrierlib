import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from '../appointments';

const SchedulerComponent = () => {
    const [data, setData] = useState(appointments);
    const [currentDate, setCurrentDate] = useState(new Date('2018-06-27'));

    return (
        <Paper>
        <Scheduler
            data={data}
            height={660}
        >
            <ViewState
            defaultCurrentDate={currentDate}
            />
            <WeekView
            startDayHour={9}
            endDayHour={19}
            />
            <Appointments />
            <AllDayPanel />
        </Scheduler>
        </Paper>
    );
}

export default SchedulerComponent;
