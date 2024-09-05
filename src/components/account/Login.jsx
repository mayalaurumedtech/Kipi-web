import React, { useState } from 'react';
import { ImageUrls } from '../../utils/constant/Images';
import { Link } from 'react-router-dom';
import styles from './styles/Login.module.css';
import { IconsUrls } from '../../utils/constant/Icons';
import Modal from '../custom/Modal';
import ImageCheckbox from '../custom/ImageCheckbox';
import Buttons from '../custom/Buttons';


const LoginWithList = [
    { name: 'Continue with Google', image: IconsUrls.Google },
    { name: 'Continue with Facebook', image: IconsUrls.Facebook },
    { name: 'Continue with Apple', image: IconsUrls.Apple },
];

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
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

        // Email Validation
        if (!formData.email) {
            validationErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
            validationErrors.email = 'Email address is invalid';
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
            <div className={styles.loginPage}>
                <div>
                    <img src={ImageUrls.Loginbg} alt="Login bg image" className={styles.loginBg} />
                </div>
                <div className={styles.loginRight}>
                    <Link to="/">
                        <h1 className="text-3xl font-bold gap-2 mb-2 inline-flex">
                            <img src={IconsUrls.LogoSvg} alt="KIPI logo" className="h-8 w-fit" />
                            KIPI
                        </h1>
                    </Link>
                    <h2 className="text-2xl font-semibold py-1">Login</h2>
                    <p className="text-base font-light">to continue to KIPI</p>
                    <form className={`pt-6 ${styles.loginForm}`} onSubmit={handleSubmit}>
                        {/* Email Input */}
                        <div className="pb-4">
                            <div className={styles.floatingLabelInput}>
                                <img src={IconsUrls.Email} className={styles.inputIcon} />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder=" "
                                    className={`${styles.inputField} ${errors.email ? styles.invalidInput : ''}`}
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <label htmlFor="email" className={styles.inputLabel}>Email*</label>
                            </div>
                            {errors.email && <div className="text-territoryRed">{errors.email}</div>}
                        </div>

                        {/* Password Input */}
                        <div className="pb-4">
                            <div className={styles.floatingLabelInput}>
                                <img src={IconsUrls.Lock} className={styles.inputIcon} />
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder=" "
                                    className={`${styles.inputField} ${errors.password ? styles.invalidInput : ''}`}
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <label htmlFor="password" className={styles.inputLabel}>Password*</label>
                                <div className={styles.eyeIcon} onClick={togglePasswordVisibility}>
                                    {passwordVisible ? <img src={IconsUrls.EyeOpen} /> : <img src={IconsUrls.EyeClose} />}
                                </div>
                            </div>
                            {errors.password && <div className="text-territoryRed">{errors.password}</div>}
                        </div>

                        <div className="flex justify-between flex-wrap">
                            <div className="flex gap-2 items-center pb-1">
                                <input
                                    type="checkbox"
                                    className={styles.roundedCheckbox}
                                />
                                <label htmlFor="rememberMe" className="text-sm font-light">
                                    Stay logged in
                                </label>
                            </div>
                            <Link to="/forgot-password" className="text-sm font-normal pb-1">
                                Forgot Password?
                            </Link>
                        </div>

                        <Buttons path="" text="submit" buttonStyle={styles.submitButton} alt={"submit"} />
                    </form>

                    <div className={styles.OrLine}>
                        <h3 className={styles.centerLineText}></h3>
                    </div>

                    <div>
                        {
                            LoginWithList.map((item, index) => (
                                <Link key={index} className={styles.loginBgWithButton}>
                                    <img src={item.image} alt={item.name} className="h-5 sm:h-6 w-auto" />
                                    {item.name}
                                </Link>
                            ))
                        }
                    </div>

                    <div>
                        <h3 className="text-base font-light text-center py-6 xl:py-7">New user? <Link className="font-medium text-primaryBlue" onClick={openModal} >Create an Account</Link></h3>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div>
                        <h2 className="text-xl font-bold mb-5 sm:mb-10 text-center">Your User Type</h2>
                        <div className={styles.modalBox}>
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
                        <div className="text-center pt-6 sm:pt-12 sm:pb-10 pb-5">
                            <Buttons path="" text="Select & Continue"  buttonStyle={styles.SelectContinueButton}  alt={"Select & Continue"} />
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Login;
