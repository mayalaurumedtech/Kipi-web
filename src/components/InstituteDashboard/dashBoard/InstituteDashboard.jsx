import React from 'react';
import FeesCollectionSection from '../FeesCollectionSection.jsx';
import Buttons from '../../custom/Buttons.jsx';
import { Svg } from '../../../utils/constant/Svg.jsx';
import { Link } from 'react-router-dom';
import { IconsUrls } from '../../../utils/constant/Icons.jsx';
import QuickActionsArrowAnim from '../../custom/QuickActionsArrowAnim.jsx';
import styled from './styles/InstituteDashboard.module.css';
import CalendarComponent from './CalendarComponent.jsx';


const QuickActions = [
  { id: 1, path: '#', name: "Attendance", boxStyle: `${styled.attendance}`, icons: IconsUrls.Attendance },
  { id: 2, path: '#', name: "Replace Teacher", boxStyle: `${styled.replaceTeacher}`, icons: IconsUrls.ReplaceTeacher },
  { id: 3, path: '#', name: "Reports", boxStyle: `${styled.reports}`, icons: IconsUrls.Reports },
  { id: 4, path: '#', name: "Exams & Results", boxStyle: `${styled.examsResults}`, icons: IconsUrls.ExamsResults },
  { id: 5, path: '#', name: "Fees Collection", boxStyle: `${styled.feesCollection}`, icons: IconsUrls.FeesCollection },
  { id: 6, path: '#', name: "General Time Table", boxStyle: `${styled.generalTimeTable}`, icons: IconsUrls.GeneralTimeTable },
];

const InstituteDashboard = () => {
  return (
    <>
      <div className="flex justify-between pt-6">
        <div>
          <h2 className="heading">Admin Dashboard</h2>
          <ul className="flex gap-1 paragraph text-secondaryGrey01">
            <li><Link to="/institute-landing-dashboard">Home</Link></li>
            <li>/</li>
            <li className="text-primaryBlack font-normal">Dashboard</li>
          </ul>

        </div>
        <Buttons path="/institute-registration" svg={Svg.PluseSvg} text="Add New Institute" buttonStyle="cusbuttons" alt="Add New Institute" />

      </div>

      {/* Fees Collection Section */}
      <FeesCollectionSection />

      <div className="pt-6">
        <h3 className="paragraph font-medium">Quick Actions</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {QuickActions.map((action, index) => (
            <QuickActionsArrowAnim
              action={action}
            />
          ))}
        </div>
      </div>

      <div>
        <div className={styled.calendarComponent}>
          <CalendarComponent />
        </div>
      </div>
    </>
  )
}

export default InstituteDashboard