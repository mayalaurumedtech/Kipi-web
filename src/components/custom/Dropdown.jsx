import React, { useState, useEffect } from 'react';
import ArrowDown from '../../assets/icons/arrowdown.svg';

const Dropdown = ({ value = '', onChange, options, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);

    const selectedValue = value || (options.length > 0 ? options[0].value : '');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        onChange(option.value);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.dropdown')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative dropdown">
            <div
                onClick={toggleDropdown}
                className="border border-territoryGreyOutline bg-white rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer w-max"
                style={{
                    backgroundImage: `url(${ArrowDown})`,
                    backgroundPosition: 'right 15px center',
                    backgroundRepeat: 'no-repeat',
                    paddingRight: '35px',
                }}
            >
                <span>{selectedValue || placeholder}</span>
            </div>

            {isOpen && (
                <ul className="absolute right-0 z-10 py-2 mt-2 w-max bg-white border border-territoryGreyOutline origin-top-right rounded-2xl notification-shadow transition">
                    {options.map((option) => (
                        <li
                            key={option.id}
                            onClick={() => handleOptionClick(option)}
                            className="px-5 py-2 hover:bg-secondaryGrey03 cursor-pointer w-full"
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
