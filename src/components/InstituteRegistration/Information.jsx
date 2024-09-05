import React from 'react';
import Buttons from '../custom/Buttons';

const Information = ({ handleNextStep }) => {
  return (
    <>
      <div className="flex justify-between items-center sm:pt-8 pt-4">
        <div>
          <h2 className="heading">Institute Information</h2>
          <p className="paragraph">Join us and unlock a world of possibilities!</p>
        </div>
        {/* Button to go to the next step */}
        <div className="flex justify-end">
          <Buttons path="" text="Next" buttonStyle="cus-blue-buttons" onClick={handleNextStep} alt="Next" />
        </div>
      </div>
    </>
  )
}

export default Information