import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = ({path, buttonStyle, alt, text, imageSrc, ...props }) => {

    return (
        <Link to={path} className={`${buttonStyle} `} {...props}>
            {imageSrc && <img src={imageSrc} alt={`${alt}`} />}
            {text}
        </Link>
    );
};

export default Buttons;
