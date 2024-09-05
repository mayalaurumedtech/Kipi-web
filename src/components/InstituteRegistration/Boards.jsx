import React from 'react';
import Buttons from '../custom/Buttons';

const Boards = ({ handleNextStep,handlePrevStep }) => {
  return (
    <>
      <div className="flex justify-between items-center sm:pt-8 pt-4">
        <div>
          <h2 className="heading">Institute For</h2>
          <p className="paragraph">Select your organization types with boards.</p>
        </div>
        {/* Button to go to the next/prev step */}
        <div className="flex gap-6">
          <Buttons path="" text="Previous" buttonStyle="cusbuttons" onClick={handlePrevStep} alt="Previous" />
          <Buttons path="" text="Next" buttonStyle="cus-blue-buttons" onClick={handleNextStep} alt="Next" />
        </div>
      </div>
    </>
  )
}

export default Boards