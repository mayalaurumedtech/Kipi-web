import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import { Svg } from '../../../utils/constant/Svg';
import { IconsUrls } from '../../../utils/constant/Icons';

const schedules = [
    {
        id: 1,
        std:'Std - 12 Commerce',
        title: 'Organization of Commerce & Management',
        icon: IconsUrls.Lecture,
        teacher: 'Ritika Raval',
        time: '11:30 AM',
        type: 'Theory | Lecture ',
        date: '21/09/2024',
    },
    {
        id: 2,
        std:'Std - 12 Commerce',
        title: 'Social Science',
        icon: IconsUrls.Lecture,
        teacher: 'Pritesh Singh',
        time: '01:30 PM',
        type: 'Theory | Lecture ',
        date: '20/09/2024',
    },
    {
        id: 3,
        std:'Std - 12 Commerce',
        title: 'Parents-Teacher Meeting',
        icon: IconsUrls.Event,
        time: '01:30 PM',
        type: 'Event',
        date: '20/09/2024',
    },
];

const ScheduleCard = ({ schedule }) => (
    <div className="flex items-center md:gap-4 gap-2 border rounded-lg p-4 my-2">
        <div><img src={schedule.icon} alt={schedule.type} /></div>
        <div>
            <p className="text-sm text-gray-500">{schedule.std}</p>
            <h3 className="font-bold">{schedule.title}</h3>
            {schedule.teacher && <p className="text-sm text-gray-600">{schedule.teacher}</p>}
            <p className="text-sm text-gray-500">{schedule.type} | {schedule.time}</p>
        </div>
    </div>
);

const CalendarComponent = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Format the selected date in dd/mm/yyyy format with Indian timezone
    const formatDate = (date) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'Asia/Kolkata' };
        return date.toLocaleDateString('en-IN', options);
    };

    const filteredSchedules = schedules.filter(
        (schedule) => schedule.date === formatDate(selectedDate)
    );

    return (
        <>
            {/* Calendar component */}
            <Calendar onChange={setSelectedDate} value={selectedDate} />

            {/* Display upcoming schedules based on selected date */}
            <div>
                <div className="flex justify-between">
                    <h2 className="font-bold text-lg">Upcoming Schedules</h2>
                    <Link to="/view-all" className="flex items-center gap-2">View all {Svg.ArrowRight}</Link>
                </div>

                {filteredSchedules.length > 0 ? (
                    filteredSchedules.map((schedule) => (
                        <ScheduleCard key={schedule.id} schedule={schedule} />
                    ))
                ) : (
                    <p>No schedules for this date.</p>
                )}
            </div>
        </>
    );
};

export default CalendarComponent;
