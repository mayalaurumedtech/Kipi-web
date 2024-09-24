import React, { useState } from 'react';
import { Svg } from '../../utils/constant/Svg';

const OptionSwitchButton = ({ value, onChange, options, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSwitch = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (optionValue) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    return (
        <div className={`relative w-full ${className}`}>
            <div
                className=" px-4 py-3 cursor-pointer flex gap-2 items-center w-fit"
                onClick={handleSwitch}
            >
                <span>{value}</span>
                <span className="flex gap-2 py-1 px-3 items-center border paragraph21 rounded-xl border-primaryBlue">{Svg.switch} Switch</span>
            </div>

            {isOpen && (
                <div className="absolute left-1 bg-white mt-1 z-10">
                    {options.map(option => (
                        <div
                            key={option.value}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleOptionClick(option.value)}
                        >
                            <div className="flex gap-1">
                                <div className="h-12 rounded-xl">
                                    <img src={option.img} alt={option.label} className="h-12" />
                                </div>
                                <div>
                                    <h3>{option.label}</h3>
                                    <p>{option.email}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OptionSwitchButton;
