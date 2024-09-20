import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import { Svg } from '../../../utils/constant/Svg';

const schedules = [
    {
        id: 1,
        title: 'Organization of Commerce & Management',
        teacher: 'Ritika Raval',
        time: '11:30 AM',
        type: 'Lecture',
        date: '2024-09-21',
    },
    {
        id: 2,
        title: 'Social Science',
        teacher: 'Pritesh Singh',
        time: '01:30 PM',
        type: 'Lecture',
        date: '2024-09-20',
    },
    {
        id: 3,
        title: 'Parents-Teacher Meeting',
        time: '01:30 PM',
        type: 'Event',
        date: '2024-09-20',
    },
];

const ScheduleCard = ({ schedule }) => (
    <div className="border rounded-lg p-4 my-2">
        <h3 className="font-bold">{schedule.title}</h3>
        {schedule.teacher && <p className="text-sm text-gray-600">{schedule.teacher}</p>}
        <p className="text-sm text-gray-500">{schedule.type} | {schedule.time}</p>
    </div>
);

const CalendarComponent = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Correct formatDate function to handle the date properly
    const formatDate = (date) => {
        return date.toISOString().split('T')[0]; 
    };

    const filteredSchedules = schedules.filter(
        (schedule) => schedule.date === formatDate(selectedDate)
    );

    return (
        <div>
            {/* Calendar component */}
            <Calendar onChange={setSelectedDate} value={selectedDate} />

            {/* Display upcoming schedules based on selected date */}
            <div className="mt-4">
                <div className="flex justify-between">
                    <h2 className="font-bold text-lg">Upcoming Schedules for {formatDate(selectedDate)}</h2>
                    <Link to="/view-all">View all</Link>
                </div>
                
                {filteredSchedules.length > 0 ? (
                    filteredSchedules.map((schedule) => (
                        <ScheduleCard key={schedule.id} schedule={schedule} />
                    ))
                ) : (
                    <p>No schedules for this date.</p>
                )}
            </div>
        </div>
    );
};

export default CalendarComponent;
