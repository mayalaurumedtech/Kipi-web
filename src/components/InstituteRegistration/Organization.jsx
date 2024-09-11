import React, { useState } from 'react';
import Buttons from '../custom/Buttons';
import InputCheckbox from '../custom/InputCheckbox';
import { Svg } from '../../utils/constant/Svg';
import mainStyle from './style/InstituteFor.module.css';
import DefaultOrganization from './DefaultOrganization';
import School from './School';
import College from './College';
import { ImageUrls } from '../../utils/constant/Images';

const OrganizationList = [
  {
    id:1,
    type: 'prePrimary',
    svg: Svg.PrePrimary,
    label: 'Pre Primary',
  },
  {
    id:2,
    type: 'school',
    svg: Svg.SchoolGraySvg,
    label: 'School',
  },
  {
    id:3,
    type: 'college',
    svg: Svg.CollegeGraySvg,
    label: 'College',
  },
  {
    id:4,
    type: 'competitiveExam',
    svg: Svg.ExamFile,
    label: 'Competitive Exam',
  }
];



const Organization = ({ handleNextStep, handlePrevStep }) => {
  const [selectedOptions, setSelectedOptions] = useState(0);
 
  // Handler for each checkbox
  const handleCheckboxChange = (id) => {
    setSelectedOptions(id); 
  };

  // Render content for the right-side tab based on the selected option
  const renderRightBoxContent = () => {
   return <School organizationId={ selectedOptions} />
  };
  const isOptionSelectd=(id)=>{
    return id==selectedOptions
  }

  return (
    <>
      <div className="flex justify-between items-center sm:pt-8 pt-4">
        <div>
          <h2 className="heading">Institute For</h2>
          <p className="paragraph">Select your organization types with boards.</p>
        </div>
        <div className="hidden xl:flex gap-6">
          <Buttons path="" text="Previous" buttonStyle="cusbuttons" onClick={handlePrevStep} alt="Previous" />
          <Buttons path="" text="Next" buttonStyle="cus-blue-buttons" onClick={handleNextStep} alt="Next" />
        </div>
      </div>

      <div className={mainStyle.mainBox}>
        <div className={mainStyle.leftBox}>
          {OrganizationList.map((organization, index) => (
            <InputCheckbox
              key={index}
              checked={isOptionSelectd(organization.id)}
              onChange={() => handleCheckboxChange(organization.id)}
              svg={organization.svg}
              
              label={organization.label}
              borderLeft="ml-4"
              checkboxContainer="checkboxContainer"
              isActive={isOptionSelectd(organization.id)}
            />
          ))}

        </div>
        <div className={mainStyle.rightBox}>
          {/* Render content based on selected option */}
          {renderRightBoxContent()}
        </div>
      </div>

      <div className="flex justify-between mt-6 xl:hidden">
        <Buttons path="" text="Previous" buttonStyle="cusbuttons" onClick={handlePrevStep} alt="Previous" />
        <Buttons path="" text="Next" buttonStyle="cus-blue-buttons" onClick={handleNextStep} alt="Next" />
      </div>
    </>
  );
};

export default Organization;
