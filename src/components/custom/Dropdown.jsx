import React, { useState } from 'react';
import ArrowDown from '../../assets/icons/arrowdown.svg';

const Dropdown = ({ value, onChange, options, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        onChange(option.value); 
        setIsOpen(false); 
    };

    return (
        <div className="relative">
            <div
                onClick={toggleDropdown}
                className="border border-gray-300 rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer"
                style={{
                    backgroundImage: `url(${ArrowDown})`,
                    backgroundPosition: 'right 15px center',
                    backgroundRepeat: 'no-repeat',
                    paddingRight: '35px',
                }}
            >
                <span>{value || placeholder}</span>
            </div>

            {isOpen && (
                <ul className="absolute z-10 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                    {options.map((option) => (
                        <li
                            key={option.id}
                            onClick={() => handleOptionClick(option)}
                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
