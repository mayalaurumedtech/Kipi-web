import React, { useState } from 'react';
import Buttons from '../custom/Buttons';
import InputCheckbox from '../custom/InputCheckbox';
import Modal from '../custom/Modal';
import OtpStyle from '../account/styles/Otp.module.css';
import { IconsUrls } from '../../utils/constant/Icons';

const featursList = [
    { id: 1, title: "Revision Video", peraText: "You can assign videos to students for revision." },
    { id: 2, title: "Basic Video", peraText: "You can upload videos for students." },
    { id: 3, title: "Text Book Pdf", peraText: "You can upload text book PDF for students." },
    { id: 4, title: "Notes", peraText: "Parents and students can see fees details." },
    { id: 5, title: "Student Attendants", peraText: "You can manage attendance for everyone." },
    { id: 6, title: "Exam Results", peraText: "You can declare student’s exam results." },
    { id: 7, title: "Fees Detail", peraText: "Parents and students can see fees details." },
];

const WorkWith = ({ handleStep }) => {
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
   
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Function to handle checkbox change
    const handleChangeFeatur = (id) => {
        setSelectedFeatures(prevSelected =>
            prevSelected.includes(id)
                ? prevSelected.filter(featId => featId !== id)
                : [...prevSelected, id]
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        openModal();
        console.log('Selected Features:', selectedFeatures);
    };

    return (
        <>
            <div className="flex justify-between items-center sm:pt-8 pt-4">
                <div>
                    <h2 className="heading">Work With</h2>
                    <p className="paragraph">Select your preferred features.</p>
                </div>
                <div className="hidden xl:flex gap-6">
                    <Buttons path="" text="Previous" buttonStyle="cusbuttons" onClick={()=>handleStep(-1)} alt="Previous" />
                    <Buttons path="" type="submit" text="Submit" buttonStyle="cus-blue-buttons" onClick={handleSubmit} alt="Submit" />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                {featursList.map((featur) => (
                    <div key={featur.id} className="border rounded-2xl p-4">
                        <InputCheckbox
                            titalText={featur.title}
                            peraText={featur.peraText}
                            checked={selectedFeatures.includes(featur.id)}
                            onChange={() => handleChangeFeatur(featur.id)}
                        />
                    </div>
                ))}
            </div>

            <div className="flex justify-between mt-6 xl:hidden">
                <Buttons path="" text="Previous" buttonStyle="cusbuttons" onClick={()=>handleStep(-1)} alt="Previous" />
                <Buttons path="" type="submit" text="Submit" buttonStyle="cus-blue-buttons" onClick={handleSubmit} alt="Submit" />
            </div>

            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div className={OtpStyle.modalBox}>
                        <h1 className="text-2xl sm:text-3xl font-bold items-center gap-1 inline-flex">
                            <img src={IconsUrls.LogoSvg} alt="KIPI logo" className="h-5 sm:h-6 w-fit" />
                            KIPI
                        </h1>
                        <div className={OtpStyle.innerBox}>
                            <img src={IconsUrls.CheckMark} alt="checkmark" />
                            <h3>Institute Registered!</h3>
                            <p>Institute has been Registered successfully!</p>
                        </div>
                        <div className="flex flex-col items-center sm:gap-6 gap-3 sm:pb-10 pb-5">
                            <Buttons path="/institute-landing-dashboard" text="Let’s Get Started" buttonStyle="cus-blue-buttons" alt={"Let’s Get Started"} />
                            <Buttons onClick={()=>handleStep('new')} text="Register New Institute" buttonStyle="cusbuttons" alt={"Register New Institute"} />
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default WorkWith;
