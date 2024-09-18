import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Buttons.module.css';

const Buttons = ({ onClick, path, type, buttonStyle, alt, text, svg, imageSrc, ...props }) => {
    // If there is a path, wrap the button in a Link, otherwise, just return the button
    return path ? (
        <Link to={path} className={`${buttonStyle} ${styles.Buttons}`} {...props} onClick={onClick}>
            {imageSrc && <img src={imageSrc} alt={`${alt}`} />}
            {svg && <div>{svg} </div>}
            {text}
        </Link>
    ) : (
        <button type={type} className={`${buttonStyle} ${styles.Buttons}`} {...props} onClick={onClick}>
            {imageSrc && <img src={imageSrc} alt={`${alt}`} />}
            {svg && <div>{svg} </div>}
            {text}
        </button>
    );
};

export default Buttons;
