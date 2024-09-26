import React from 'react';
import ArrowDown from '../../assets/icons/arrowdown.svg';


const Select = ({  value, onChange, className, placeholder, children }) => { 
    return (
        <div className={`relative ${className}`}>
            <select
                value={value}
                onChange={onChange}
                className="border rounded-xl px-4 py-3 appearance-none w-auto focus:outline-none"
                style={{
                    backgroundImage: `url(${ArrowDown})`,
                    backgroundPosition: 'right 15px center',
                    backgroundRepeat: 'no-repeat',
                    paddingRight: '35px',
                    lineHeight: '1.5',
                }}
            >
                {placeholder && (
                    <option value="" disabled>{placeholder || "Select an option"}</option>
                )}
                {children}
            </select>
        </div>
    );
};

export default Select;
