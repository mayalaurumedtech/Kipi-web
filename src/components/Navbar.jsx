import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './styles/Navbar.module.css';
import Buttons from '../custom/Buttons';
import { IconsUrls } from '../constant/Icons';

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
        <div className="bg-primaryWhite shadow  fixed top-0 w-full z-50">
            {/* Header Section */}
            <header className="w-full max-w-[1920px] mx-auto">
                <div className="max-w-[1440px] mx-auto px-5 2xl:px-0 py-4 flex flex-wrap justify-between items-center">
                    <Link to="/">
                        <h1 className="text-3xl font-bold flex gap-2 items-center">
                            <img src={IconsUrls.LogoSvg} alt="KIPI logo" className="h-8 w-auto" />
                            KIPI
                        </h1>
                    </Link>
                    <nav className="hidden lg:flex">
                        <ul className="flex space-x-8">
                            {navMenu.map((menu, index) => (
                                <li key={index} className={styles.navLink}>
                                    <NavLink
                                        to={menu.path}
                                        exact
                                        className={`text-secondaryGrey01 font-semibold text-lg transition-colors duration-300 hover:text-primaryBlue ${styles.activeLink}`}
                                        activeclassname={styles.activeLink}
                                    >
                                        {menu.name}
                                        <span
                                            className="block absolute left-0 -bottom-2 h-2 w-full bg-no-repeat opacity-0 transition-opacity duration-300 group-hover:opacity-5"
                                            style={{
                                                backgroundImage: `url(${IconsUrls.BottomVector})`,
                                            }}
                                        ></span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="space-x-4 hidden md:flex">
                        <Buttons path="/login" text="Login" imageSrc={IconsUrls.loginSvg} buttonStyle={`${styles.button} ${styles.loginButton}`} alt={"login"} />
                        <Buttons path="/CreateAccount" text="Create an Account" imageSrc={IconsUrls.SignUpSvg} buttonStyle={`${styles.button} ${styles.signUpButton}`} alt={"Create an Account"} />
                    </div>
                    <button
                        className="lg:hidden text-secondaryGrey01 focus:outline-none"
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </header>
            <nav className={`lg:hidden bg-primaryWhite shadow-md ${isMobileMenuOpen ? styles.mobileMenuVisible : styles.mobileMenu}`}>
                <ul className="flex flex-col space-y-4 p-4 ml-[2%]">
                    {navMenu.map((menu, index) => (
                        <li key={index} className={styles.navLink}>
                            <NavLink
                                to={menu.path}
                                exact
                                className={`text-secondaryGrey01 font-semibold transition-colors duration-300 hover:text-primaryBlue ${styles.activeLink}`}
                                activeclassname={styles.activeLink}
                            >
                                {menu.name}
                                <span
                                    className="block absolute left-0 -bottom-2 h-2 w-full bg-no-repeat opacity-0 transition-opacity duration-300 group-hover:opacity-5"
                                    style={{
                                        backgroundImage: `url(${IconsUrls.BottomVector})`,
                                    }}
                                ></span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="flex space-y-4 flex-col pb-5 md:hidden ml-[4%]">
                    <Link to="/login" className={`flex  w-fit px-4 py-2 ${styles.button} ${styles.loginButton}`}>
                        <img src={IconsUrls.loginSvg} alt="login" className="h-5 w-auto" />
                        Login
                    </Link>
                    <Link to="/CreateAccount" className={`flex  w-fit px-4 py-2 ${styles.button} ${styles.signUpButton}`}>
                        <img src={IconsUrls.SignUpSvg} alt="Sign Up" className="h-5 w-auto" />
                        Create an Account
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
