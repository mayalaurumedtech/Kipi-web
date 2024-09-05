import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Buttons.module.css';

const Buttons = ({path, buttonStyle, alt, text, imageSrc, ...props }) => {

    return (
        <Link to={path} className={`${buttonStyle} ${styles.Buttons} `} {...props}>
            {imageSrc && <img src={imageSrc} alt={`${alt}`} />}
            {text}
        </Link>
    );
};

export default Buttons;
