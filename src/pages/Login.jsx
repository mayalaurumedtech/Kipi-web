import React, { useState } from 'react';
import { ImageUrls } from '../constant/Images';
import { Link } from 'react-router-dom';
import styles from './styles/Login.module.css';
import { IconsUrls } from '../constant/Icons';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [passwordVisible, setPasswordVisible] = useState(false);

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

    return (
        <div className="container pt-16">
            <div className="flex">
                <div>
                    <img src={ImageUrls.Loginbg} alt="Login bg image" className="w-full bg-cover bg-no-repeat" />
                </div>
                <div className="p-12">
                    <Link to="/">
                        <h1 className="text-3xl font-bold flex gap-2 mb-2 items-center">
                            <img src={IconsUrls.LogoSvg} alt="KIPI logo" className="h-8 w-auto" />
                            KIPI
                        </h1>
                    </Link>
                    <h2 className="text-2xl font-semibold py-1">Login</h2>
                    <p className="text-base font-light">to continue to KIPI </p>
                    <form className="pt-6 w-[424px]" onSubmit={handleSubmit}>
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
                            {errors.email && <div className="text-red-700">{errors.email}</div>}
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
                            {errors.password && <div className="text-red-700">{errors.password}</div>}
                        </div>

                        <div className="flex justify-between flex-wrap">
                            <div className="flex gap-2 items-center pb-1">
                                <input
                                    type="checkbox"
                                    className={styles.roundedCheckbox}
                                    required
                                />
                                <label htmlFor="rememberMe" className="text-sm font-light">
                                    Stay logged in
                                </label>
                            </div>
                            <Link to="/forgot-password" className="text-sm font-normal pb-1">
                                Forgot Password?
                            </Link>
                        </div>

                        <button type="submit" className={styles.submitButton}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
