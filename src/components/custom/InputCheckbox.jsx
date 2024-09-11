import React from 'react';
import { NavLink } from 'react-router-dom';
// import styles from './styles/InputCheckbox.module.css'; // Import the CSS file for styling

const InputCheckbox = ({ checked, onChange, label, svg, borderLeft, checkboxContainer, titalText, peraText,isActive }) => {
  

    return (
        <div className={`flex gap-2 items-center pb-1 ${checkboxContainer} ${(isActive?"active":"")} `} onClick={onChange}>

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
            {titalText && (
                <div>
                    <h3 className="title">
                        {titalText}
                    </h3>
                    <p className="paragraph2">{peraText}</p>
                </div>
            )}
        </div>
    );
};

export default InputCheckbox;
