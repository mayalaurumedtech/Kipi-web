import React, { useState } from 'react';
import ProgressBar from '../custom/ProgressBar';
import Information from './Information';
import Organization from './Organization';
import Boards from './Boards';
import WorkWith from './WorkWith';

const InstituteRegistration = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 4;

    const handleStep = (step) => {
        if (step == "new") {
            setCurrentStep(1);
        }
        else {
            setCurrentStep(currentStep + step);
        }

    };

    return (
        <div className="registration-container mt-20">
            <ProgressBar label="Institute Registration" step={currentStep} totalSteps={totalSteps} />

            <div className="container">
                <div className="innercontainer">
                    {/* Form Fields for Step 1 */}
                    {currentStep === 1 && (
                        <Information handleStep={handleStep} />
                    )}

                    {/* Form Fields for Step 2 */}
                    {currentStep === 2 && (
                        <Organization handleStep={handleStep} />
                    )}

                    {/* Form Fields for Step 3 */}
                    {currentStep === 3 && (
                        <Boards handleStep={handleStep} />
                    )}

                    {/* Form Fields for Step 4 */}
                    {currentStep === 4 && (
                        <WorkWith handleStep={handleStep} />
                    )}

                    {/* Optional: Add the 'Next' button if needed */}
                    {/* <div className="flex justify-end mt-4">
                        <Buttons path="" text="Next" buttonStyle="cus-blue-buttons" onClick={handleNextStep} alt="Next" />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default InstituteRegistration;
