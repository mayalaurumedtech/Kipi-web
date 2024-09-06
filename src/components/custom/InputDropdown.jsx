import React, { useState, useEffect } from 'react';
import styles from './styles/InputField.module.css';
import { IconsUrls } from '../../utils/constant/Icons';

const InputDropdown = ({
  label,
  name,
  value,
  options,
  onSelectOption,
  placeholder = " ",
  icon
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);

  useEffect(() => {
    // Update selected option when prop value changes
    setSelectedOption(value);
  }, [value]);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelectOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      {icon && <img src={icon} className={styles.inputIcon} alt="icon" />}
      
      <div
        className={styles.inputField}
        onClick={handleDropdownToggle}
      >
        {selectedOption ? selectedOption.label : placeholder}
      </div>
      
      <label className={styles.inputLabel}>{label}</label>

      <div className={styles.arrowIcon} onClick={handleDropdownToggle}>
        <img src={isDropdownOpen ? IconsUrls.ArrowUp : IconsUrls.ArrowDown} alt="Arrow" />
      </div>

      {isDropdownOpen && (
        <div className={styles.dropdownMenu}>
          {options.map(option => (
            <div
              key={option.value}
              className={styles.dropdownOption}
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputDropdown;
