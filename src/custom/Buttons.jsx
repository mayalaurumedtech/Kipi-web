import React from 'react';

const Buttons = ({buttonStyle, alt, text, imageSrc, ...props }) => {

    return (
        <button className={`${buttonStyle} `} {...props}>
            {imageSrc && <img src={imageSrc} alt={`${alt}`} />}
            {text}
        </button>
    );
};

export default Buttons;
