import React, { useState } from 'react';
import ProgressBar from '../custom/ProgressBar';
import Information from './Information';
import Organization from './organization';
import Boards from './Boards';

const InstituteRegistration = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 4;

    const handleNextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };
    const handlePrevStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="registration-container mt-20">

            <ProgressBar lable="Institute Registration" step={currentStep} totalSteps={totalSteps} />

            <div className="container">
                <div className="innercontainer">
                    {/* Form Fields for Step 1 */}
                    {currentStep === 1 && (
                        <Information handleNextStep={handleNextStep} />
                    )}

                    {/* Form Fields for Step 2 */}
                    {currentStep === 2 && (
                        <Organization handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />
                    )}

                    {/* Form Fields for Step 3 */}
                    {currentStep === 3 && (
                        <Boards handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />
                    )}

                    {/* Form Fields for Step 4 */}
                    {currentStep === 4 && (
                        <div>
                            <h2>Step 4: Basic Information</h2>
                            {/* Add your form inputs here */}
                        </div>
                    )}

                    {/* Button to go to the next step */}
                    {/* <div className="flex justify-end mt-4">
                        <Buttons path="" text="Next" buttonStyle="cus-blue-buttons" onClick={handleNextStep} alt="Next" />
                    </div> */}
                </div>
            </div>


        </div>
    );
}

export default InstituteRegistration