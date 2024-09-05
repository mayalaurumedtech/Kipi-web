import React from 'react';
import styles from './styles/Footer.module.css';
import { Link } from 'react-router-dom';
import { IconsUrls } from '../../utils/constant/Icons';


// Footer Menu items list
const footerMenu = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Support', path: '/support' },
    { name: 'Institute/Teacher', path: '/' },
];

// Footer Social icons 
const socialIcons = [
    { image: IconsUrls.Facebook, path: 'https://www.facebook.com/' },
    { image: IconsUrls.Twitter, path: 'https://www.twitter.com/' },
    { image: IconsUrls.Instagram, path: 'https://www.instagram.com/' },
];

// Footer Legal links
const legalLinks = [
    { name: 'Notices', path: '/notices' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="bg-secondaryLightBlue02 pt-2">
            <div className={`${styles.container}`}>
                <div className={styles.innerContainer}>
                    <div className={`${styles.row} py-6`}>
                        <div>
                            <Link to="/">
                                <h1 className="text-3xl font-bold flex gap-2 items-center">
                                    <img src={IconsUrls.LogoSvg} alt="KIPI logo" className="h-8 w-auto" />
                                    KIPI
                                </h1>
                            </Link>
                        </div>
                        <div>
                            <ul className="flex gap-5 lg:gap-16 flex-wrap">
                                {footerMenu.map((menu, index) => (
                                    <li key={index}>
                                        <Link to={menu.path} className="text-secondaryGrey01 hover:text-primaryBlue text-base">{menu.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <ul className="flex gap-8">
                                {socialIcons.map((icon, index) => (
                                    <li key={index}>
                                        <a href={icon.path} target="_blank" rel="noopener noreferrer">
                                            <img src={icon.image} alt="Social Icon" className="h-6 w-6" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="py-6">
                        <div className={styles.row}>
                            <p className="text-secondaryGrey01 text-base">
                                Copyright © {currentYear} KIPI Pvt Ltd. All Rights Reserved.
                            </p>
                            <div>
                                <div className="flex gap-2 lg:gap-8 md:gap-3 flex-wrap">
                                    {legalLinks.map((link, index) => (
                                        <div key={index} className="ml-4">
                                            <Link to={link.path} className="text-secondaryGrey01 hover:text-primaryBlue text-base">{link.name}</Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer