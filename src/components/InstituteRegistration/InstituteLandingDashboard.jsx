import React from 'react';
import Buttons from '../custom/Buttons.jsx';
import { Svg } from '../../utils/constant/Svg';
import { IconsUrls } from '../../utils/constant/Icons.jsx';


const InstituteLandingDashboard = () => {
  return (
    <div className="container mt-20 pt-6">
      <div className="innercontainer">
        <div className="flex justify-between">
          <div>
            <h2 className="heading">Landing Dashboard</h2>
            <p className="paragraph">Dashboard</p>
          </div>
          <Buttons path="" svg={Svg.PluseSvg} text="Add New Institute" buttonStyle="cusbuttons" alt="Add New Institute" />
        </div>

        <div className="pt-6">
          <div className="border border-territoryGreyOutline rounded-2xl p-4">
            <div className="flex gap-4">
              <img src={IconsUrls.Dollar} alt="" />
              <div>
                <h3 className="heading2">₹45,500</h3>
                <p className="paragraph font-normal">Today’s Fess Collection</p>
              </div>
            </div>
            <hr className="border-territoryGreyOutline my-4" />
            <div className="flex justify-between">
              <p className="paragraph font-normal">No. of Students: <span className="font-medium">15</span></p>
              <p className="paragraph font-normal">Absent: <span className="font-medium">15</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstituteLandingDashboard;