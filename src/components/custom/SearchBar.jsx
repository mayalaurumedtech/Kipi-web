import React from 'react';
import { Svg } from '../../utils/constant/Svg';

const SearchBar = ({ value, onChange, placeholder, icon, className, inputClassName, iconClassName }) => {
    return (
        <div className={`flex items-center gap-2 py-3 px-4 rounded-xl w-max bg-secondaryGrey03 ${className}`}>
            <div className={iconClassName}>
                {Svg.Search}
            </div>
            <input
                type="search"
                name="search"
                value={value}
                onChange={onChange}
                placeholder={placeholder || "Search..."}
                className={`flex-1 focus:outline-none paragraph font-normal ${inputClassName}`}
            />
        </div>
    );
};

export default SearchBar;
