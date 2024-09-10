import React, { useState } from 'react';
import Buttons from '../custom/Buttons';
import InputCheckbox from '../custom/InputCheckbox';
import { Svg } from '../../utils/constant/Svg';
import mainStyle from './style/InstituteFor.module.css';

const Organization = ({ handleNextStep, handlePrevStep }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    prePrimary: false,
    school: false,
    college: false,
    competitiveExam: false,
  });

  // State to manage the selected option for the right-side tab
  const [selectedOption, setSelectedOption] = useState(null);

  // Handler for each checkbox
  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));

    // Set the selected option for the right-side tab
    setSelectedOption(option);
  };

  // Render content for the right-side tab based on the selected option
  const renderRightBoxContent = () => {
    switch (selectedOption) {
      case 'prePrimary':
        return <p>Details about Pre Primary.</p>;
      case 'school':
        return <p>Details about School.</p>;
      case 'college':
        return <p>Details about College.</p>;
      case 'competitiveExam':
        return <p>Details about Competitive Exam.</p>;
      default:
        return <p>Select an option to see details.</p>;
    }
  };

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
          {/* Pre Primary Checkbox */}
          <InputCheckbox
            checked={selectedOptions.prePrimary}
            onChange={() => handleCheckboxChange('prePrimary')}
            svg={Svg.PrePrimary}
            label="Pre Primary"
            borderLeft="ml-4"
          />
          {/* School Checkbox */}
          <InputCheckbox
            checked={selectedOptions.school}
            onChange={() => handleCheckboxChange('school')}
            svg={Svg.SchoolGraySvg}
            label="School"
            borderLeft="ml-4"
          />
          {/* College Checkbox */}
          <InputCheckbox
            checked={selectedOptions.college}
            onChange={() => handleCheckboxChange('college')}
            svg={Svg.CollegeGraySvg}
            label="College"
            borderLeft="ml-4"
          />
          {/* Competitive Exam Checkbox */}
          <InputCheckbox
            checked={selectedOptions.competitiveExam}
            onChange={() => handleCheckboxChange('competitiveExam')}
            svg={Svg.ExamFile}
            label="Competitive Exam"
            borderLeft="ml-4"
          />
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
