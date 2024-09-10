import React from 'react';
// import styles from './styles/InputCheckbox.module.css'; // Import the CSS file for styling

const InputCheckbox = ({ checked, onChange, label, svg, borderLeft }) => {



    return (
        <div className={`flex gap-2 items-center pb-1 checkboxContainer`} onClick={onChange}>

            <input
                type="checkbox"
                className={`roundedCheckbox ${borderLeft}`}
                checked={checked}
            // onChange={onChange}
            />
            {svg && (
                <div className="svg">{svg}</div>
            )}
            {label && (
                <label htmlFor="rememberMe" className="text-sm font-light">
                    {label}
                </label>
            )}
        </div>
    );
};

export default InputCheckbox;
