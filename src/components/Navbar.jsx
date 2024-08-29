import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ImageUrls } from '../constant/Images';
import styles from './styles/Navbar.module.css';
import Buttons from '../custom/Buttons';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Menu items list
    const navMenu = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
        { name: 'FAQs', path: '/faqs' },
    ];

    return (
        <div className="bg-white shadow  fixed top-0 w-full z-50">
            {/* Header Section */}
            <header className="w-full max-w-[1920px] mx-auto">
                <div className="max-w-[1440px] mx-auto px-[5%] 2xl:px-0 py-4 flex flex-wrap justify-between items-center">
                    <h1 className="text-3xl font-bold flex gap-2 items-center">
                        <img src={ImageUrls.LogoSvg} alt="KIPI logo" className="h-8 w-auto" />
                        KIPI
                    </h1>
                    <nav className="hidden lg:flex">
                        <ul className="flex space-x-8">
                            {navMenu.map((menu, index) => (
                                <li key={index} className={styles.navLink}>
                                    <NavLink
                                        to={menu.path}
                                        exact
                                        className={`text-gray-700 font-semibold text-lg transition-colors duration-300 hover:text-[#3573F9] ${styles.activeLink}`}
                                        activeClassName={styles.activeLink}
                                    >
                                        {menu.name}
                                        <span
                                            className="block absolute left-0 -bottom-2 h-2 w-full bg-no-repeat opacity-0 transition-opacity duration-300 group-hover:opacity-5"
                                            style={{
                                                backgroundImage: `url(${ImageUrls.BottomVector})`,
                                            }}
                                        ></span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="space-x-4 hidden md:flex">
                        <Buttons text="Login" imageSrc={ImageUrls.loginSvg} buttonStyle={`${styles.button} ${styles.loginButton}`} alt={"login"} />
                        <Buttons text="Create an Account" imageSrc={ImageUrls.SignUpSvg} buttonStyle={`${styles.button} ${styles.signUpButton}`} alt={"Create an Account"} />
                    </div>
                    <button
                        className="lg:hidden text-gray-700 focus:outline-none"
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </header>
            <nav className={`lg:hidden bg-white shadow-md ${isMobileMenuOpen ? styles.mobileMenuVisible : styles.mobileMenu}`}>
                <ul className="flex flex-col space-y-4 p-4 ml-[2%]">
                    {navMenu.map((menu, index) => (
                        <li key={index} className={styles.navLink}>
                            <NavLink
                                to={menu.path}
                                exact
                                className={`text-gray-700 font-semibold transition-colors duration-300 hover:text-[#3573F9] ${styles.activeLink}`}
                                activeClassName={styles.activeLink}
                            >
                                {menu.name}
                                <span
                                    className="block absolute left-0 -bottom-2 h-2 w-full bg-no-repeat opacity-0 transition-opacity duration-300 group-hover:opacity-5"
                                    style={{
                                        backgroundImage: `url(${ImageUrls.BottomVector})`,
                                    }}
                                ></span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="flex space-y-4 flex-col pb-5 md:hidden ml-[4%]">
                    <button className={`flex  w-fit px-4 py-2 ${styles.button} ${styles.loginButton}`}>
                        <img src={ImageUrls.loginSvg} alt="login" className="h-5 w-auto" />
                        Login
                    </button>
                    <button className={`flex  w-fit px-4 py-2 ${styles.button} ${styles.signUpButton}`}>
                        <img src={ImageUrls.SignUpSvg} alt="Sign Up" className="h-5 w-auto" />
                        Create an Account
                    </button>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;
