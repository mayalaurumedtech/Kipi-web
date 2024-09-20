import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Svg } from '../../utils/constant/Svg';

const sidebarMenu = [
    { id: 1, name: 'Dashboard', path: '/institute-dashboard', icon: Svg.DashBoard },
    { id: 2, name: 'All Boards', path: '#', icon: Svg.Board },
    { id: 3, name: 'General Time Table', path: '#', icon: Svg.TimeTable },
    { id: 4, name: 'Exams & Results', path: '#', icon: Svg.Exam },
    { id: 5, name: 'All Teachers', path: '#', icon: Svg.SpeechUser },
    { id: 6, name: 'All Students', path: '#', icon: Svg.Student },
    { id: 7, name: 'All Parents', path: '#', icon: Svg.ParentSvg },
    { id: 8, name: 'Administrative Staff', path: '#', icon: Svg.AdministrativeStaff },
    { id: 9, name: 'All Classrooms', path: '#', icon: Svg.Classroom },
    { id: 10, name: 'All Subjects & Fees', path: '#', icon: Svg.SubjectFees },
    { id: 11, name: 'Fees Discount', path: '#', icon: Svg.PercentageCircle },
    { id: 12, name: 'Fees Collection', path: '#', icon: Svg.PercentageCircle },
    { id: 13, name: 'Manage Inventory', path: '#', icon: Svg.Inventory },
    { id: 14, name: 'Dead Stock', path: '#', icon: Svg.BoxRemove },
];

const InstituteSideBar = () => {
    const [activeMenu, setActiveMenu] = useState(sidebarMenu[0].id);

    const handleMenuClick = (id) => {
        setActiveMenu(id);
    };

    return (
        <div className="sidebar pt-5">
            <ul className="flex flex-col gap-2 px-2">
                {sidebarMenu.map((menu, index) => (
                    <li key={index} onClick={() => handleMenuClick(menu.id)}>
                        <Link to={menu.path} className={`flex gap-2 p-4 sidebar-menu ${activeMenu === menu.id ? 'sidebar-menu-active' : ''
                            }`}>
                            <span>{menu.icon}</span>
                            <h3>{menu.name}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default InstituteSideBar