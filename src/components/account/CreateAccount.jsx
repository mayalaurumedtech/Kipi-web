import React, { useState } from 'react';
import { ImageUrls } from '../../utils/constant/Images';
import { Link } from 'react-router-dom';
import Account from './styles/Account.module.css';
import { IconsUrls } from '../../utils/constant/Icons';
import Modal from '../custom/Modal';
import ImageCheckbox from '../custom/ImageCheckbox';
import Buttons from '../custom/Buttons';
import InputField from '../custom/InputField';


const LoginWithList = [
    { name: 'Continue with Google', image: IconsUrls.Google },
    { name: 'Continue with Facebook', image: IconsUrls.Facebook },
    { name: 'Continue with Apple', image: IconsUrls.Apple },
];

const CreateAccount = () => {
    const [formData, setFormData] = useState({ fistName: '', lastName: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let validationErrors = {};

        // Name Validation
        if (!formData.firstName) {
            validationErrors.firstName = 'First Name is required';
        }
        // Name Validation
        if (!formData.lastName) {
            validationErrors.lastName = 'Last Name is required';
        }

        // Email Validation
        if (!formData.email) {
            validationErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
            validationErrors.email = 'Email address is invalid';
        }

        // Number Validation
        if (!formData.number) {
            validationErrors.number = 'Number is required';
        }

        // Password Validation
        if (!formData.password) {
            validationErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            validationErrors.password = 'Password must be at least 8 characters long';
        }

        return validationErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Handle form submission 
            console.log("form submission");
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleCheckboxChange = (id) => () => {
        setSelected(selected === id ? null : id);
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
                    <h2 className="text-2xl font-semibold py-1">Create an Account</h2>
                    <p className="text-base font-light">Provide few below personal info to continue...</p>
                    <form className={`pt-6 ${Account.loginForm}`} onSubmit={handleSubmit}>
                        {/* fist Name */}
                        <div className="pb-4">
                            <InputField
                                label="First Name*"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                error={errors.firstName}
                                icon={IconsUrls.User}
                            />
                        </div>

                        {/* Last Name */}
                        <div className="pb-4">
                            <InputField
                                label="Last Name*"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                error={errors.lastName}
                                icon={IconsUrls.User}
                            />
                        </div>

                        {/* Email Input */}
                        <div className="pb-4">
                            <InputField
                                label="Email*"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={errors.email}
                                icon={IconsUrls.Email}
                            />
                        </div>

                        {/* Mobile Number */}
                        <div className="pb-4">
                            <InputField
                                label="Mobile*"
                                name="number"
                                type="number"
                                value={formData.number}
                                onChange={handleChange}
                                error={errors.number}
                                icon={IconsUrls.Phone}
                            />
                        </div>

                        {/* Password Input */}
                        <div className="pb-4">
                            <InputField
                                label="Password*"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                error={errors.password}
                                icon={IconsUrls.Lock}
                                isPassword={true}
                                togglePasswordVisibility={togglePasswordVisibility}
                                isPasswordVisible={passwordVisible}
                            />
                        </div>

                        <div className="flex justify-between flex-wrap">
                            <div className="flex gap-2 items-center pb-1">
                                <input
                                    type="checkbox"
                                    className={Account.roundedCheckbox}
                                />
                                <label htmlFor="rememberMe" className="text-sm font-light">
                                    Stay logged in
                                </label>
                            </div>
                            <Link to="/forgot-password" className="text-sm font-normal pb-1">
                                Forgot Password?
                            </Link>
                        </div>

                        <Buttons type="submit" path="/otp" text="Login" buttonStyle={Account.submitButton} alt={"Login"} />
                    </form>

                    <div className={Account.OrLine}>
                        <h3 className={Account.centerLineText}></h3>
                    </div>

                    <div>
                        {
                            LoginWithList.map((item, index) => (
                                <Link key={index} className={Account.loginBgWithButton} onClick={openModal}>
                                    <img src={item.image} alt={item.name} className="h-5 sm:h-6 w-auto" />
                                    {item.name}
                                </Link>
                            ))
                        }
                    </div>

                    <div>
                        <h3 className="text-base font-light text-center py-6 xl:py-7">Already have an account? <Link to="/login" className="font-medium text-primaryBlue" >Login</Link></h3>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div>
                        <h2 className="text-lg sm:text-xl font-bold mb-5 sm:mb-10 text-center">Your User Type</h2>
                        <div className={Account.modalBox}>
                            <ImageCheckbox
                                src={IconsUrls.Institute}
                                label="Institute"
                                checked={selected === 'checkbox1'}
                                onChange={handleCheckboxChange('checkbox1')}
                            />
                            <ImageCheckbox
                                src={IconsUrls.Teacher}
                                label="Teacher"
                                checked={selected === 'checkbox2'}
                                onChange={handleCheckboxChange('checkbox2')}
                            />
                        </div>
                        <div className="flex justify-center pt-6 sm:pt-12 sm:pb-10 pb-5">
                            <Buttons path="" text="Select & Continue" buttonStyle={Account.SelectContinueButton} alt={"Select & Continue"} />
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default CreateAccount;
