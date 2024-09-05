import React, { useState, useRef } from 'react';
import { ImageUrls } from '../../utils/constant/Images';
import { Link } from 'react-router-dom';
import Account from './styles/Account.module.css';
import OtpStyle from './styles/Otp.module.css';
import Buttons from '../custom/Buttons';
import { IconsUrls } from '../../utils/constant/Icons';
import Modal from '../custom/Modal';


const Otp = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
   

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^[0-9]$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            // Move focus to next input
            if (index < otp.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        } else if (value === '') {
            const newOtp = [...otp];
            newOtp[index] = '';
            setOtp(newOtp);
            // Move focus to previous input
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const otpCode = otp.join('');
        console.log("Entered OTP: ", otpCode);
        // Handle OTP submission
    };

    return (
        <div>
            <div className={Account.loginPage}>
                <div>
                    <img src={ImageUrls.Loginbg} alt="Login bg image" className={Account.loginBg} />
                </div>
                <div className={Account.loginRight}>
                    <Link to="/">
                        <h1 className="text-3xl font-bold gap-2 mb-2 inline-flex">
                            <img src={IconsUrls.LogoSvg} alt="KIPI logo" className="h-8 w-fit" />
                            KIPI
                        </h1>
                    </Link>
                    <h2 className="text-2xl font-semibold py-1">OTP Verification</h2>
                    <p className="text-base font-light">Please enter the 6-digit code we sent to <br />
                        <span className="font-medium"> smartmindacacademy@gmail.com</span>
                    </p>
                    <form className={`pt-6 ${Account.loginForm}`} onSubmit={handleSubmit}>
                        <div className="flex gap-2 justify-between">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleChange(e, index)}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    className={`${OtpStyle.otpInput} ${digit === '' ? OtpStyle.invalidInput : ''}`}
                                    autoFocus={index === 0}
                                />
                            ))}
                        </div>
                        <Buttons type="submit" text="Verify" buttonStyle={Account.submitButton} alt="Verify" onClick={openModal} />
                    </form>

                    <div>
                        <h3 className="text-base font-light text-center py-6 xl:py-7">Didn't receive the OTP? <Link className="font-medium text-primaryBlack">Click to resend.</Link></h3>
                    </div>
                </div>
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
                            <h3>Account Created!</h3>
                            <p>Your account has been created successfully!</p>
                        </div>
                        <div className="flex justify-center sm:pb-10 pb-5">
                            <Buttons path="/Institute-registration" text="Let’s Start Institute Registration" buttonStyle={Account.SelectContinueButton} alt={"Let’s Start Institute Registration"} />
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Otp;
