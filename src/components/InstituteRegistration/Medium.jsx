import React from 'react';
import Accordion from '../custom/Accordion';
import NoDataFound from '../custom/NoDataFound';
import InputCheckboxWithModal from './InputCheckboxWithModal';


const Medium = ({ schoolMediums, handleCheckboxChangeSchool, schoolList }) => {
  const accordionSections = schoolMediums.map((Medium) => ({
    title: Medium.title,
    content: (
      <>
        {schoolList
          .filter((School) => School.MediumId === Medium.id)
          .map((School) => (
            <InputCheckboxWithModal
              key={School.id}
              checked={School.selected}
              onChange={() => handleCheckboxChangeSchool(School.id)}
              titalText={School.label}
              svg={School.svg}
            />
          ))}
      </>
    )
  }));

  return (
    <div className="pt-6 pl-6">
      <h2 className="title">Medium and School with Standard and Subjects</h2>
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
