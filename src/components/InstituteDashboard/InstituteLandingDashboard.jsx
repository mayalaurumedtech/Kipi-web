import React from 'react';
import Buttons from '../custom/Buttons.jsx';
import { Svg } from '../../utils/constant/Svg';
import { ImageUrls } from '../../utils/constant/Images.jsx';
import { Link } from 'react-router-dom';
import FeesCollectionSection from './FeesCollectionSection.jsx';
import ArrowAnimation from '../custom/ArrowAnimation.jsx';

const institutes = [
  {
    id: 1,
    name: 'Elite Future Academy',
    email: 'elitefutureacademy@gmail.com',
    icon: ImageUrls.EliteAcademyLogo,
    path: '/institute-dashboard',
  },
  {
    id: 2,
    name: 'Smart Mind Institute',
    email: 'smartmind@smartmind.com',
    icon: ImageUrls.SmartMindLogo,
    path: '/institute-dashboard',
  },
  {
    id: 3,
    name: 'Neuromind Academy',
    email: 'neuromindacademy@gmail.com',
    icon: ImageUrls.NeuromindLogo,
    path: '/institute-dashboard',
  },
  {
    id: 4,
    name: 'Bright Future Institute',
    email: 'brightfutureinstitute@gmail.com',
    icon: ImageUrls.BrightFutureLogo,
    path: '/institute-dashboard',
  },
];

const InstituteLandingDashboard = () => {
  return (
    <div className="container mt-20 pt-6">
      <div className="innercontainer">
        <div className="flex justify-between">
          <div>
            <h2 className="heading">Landing Dashboard</h2>
            <p className="paragraph">Dashboard</p>
          </div>
          <Buttons path="/institute-registration" svg={Svg.PluseSvg} text="Add New Institute" buttonStyle="cusbuttons" alt="Add New Institute" />
        </div>

        {/* Fees Collection Section */}
        <FeesCollectionSection />

        {/* Select Institute Section */}
        <div className="pt-8">
          <h3 className="heading2 text-center">Select Institute</h3>
          <p className="paragraph text-center">Select any institute to jump on specific dashboard.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {institutes.map((value) => (
              <ArrowAnimation value={value} >
                <div>
                  <h4 className="heading2">{value.name}</h4>
                  <p className="paragraph font-normal">{value.email}</p>
                </div>
              </ArrowAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstituteLandingDashboard;
