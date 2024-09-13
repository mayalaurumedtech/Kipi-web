import React from 'react';
import Accordion from '../custom/Accordion';
import NoDataFound from '../custom/NoDataFound';
import InputCheckbox from '../custom/InputCheckbox';
import { Svg } from '../../utils/constant/Svg';



const   Medium = ({ schoolMediums, handleCheckboxChangeMedium, selectedMedium, classList }) => {
  const accordionSections = schoolMediums.map((Medium, index) => ({
    title: Medium.title,
    content: (
      <>
        {classList.map((Class, index) =>(
          <InputCheckbox
            key={index}
            checked={Class.selected}
            onChange={() => handleCheckboxChangeMedium(Class.id)}
            titalText={Class.label}
            svg={Class.svg}
            checkboxContainer="checkboxContainer mediumAccodiancheckbox"
            isActive={selectedMedium === Class.id}
          />
        ))}
      </>
    )
  }));

  return (
    <div className="pt-6 pl-6">
      <h2 className="title">Medium and Class with Standard and Subjects</h2>
      <p className="paragraph2">Select your school’s board.</p>
      <div className="pt-6 flex flex-col gap-8">
        {schoolMediums.length > 0 ? (
          <Accordion sections={accordionSections} />
        ) : (
          <NoDataFound message="No Medium Found!" />
        )}
      </div>
    </div>
  );
};

export default Medium;
