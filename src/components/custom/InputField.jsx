import React from 'react';
import styles from './styles/InputField.module.css';
import { IconsUrls } from '../../utils/constant/Icons';

const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = " ",
  inputStyles,
  error,
  icon,
  onIconClick,
  togglePasswordVisibility,
  isPassword = false,
  isPasswordVisible = false,
  disabled = false // Ensure disabled is used
}) => {
  return (
    <>
      <div className={styles.floatingLabelInput}>
        {icon && <img src={icon} className={styles.inputIcon} onClick={onIconClick} alt="icon" />}
        <input
          type={isPassword ? (isPasswordVisible ? "text" : "password") : type}
          name={name}
          placeholder={placeholder}
          className={`${styles.inputField} ${inputStyles}`}
          value={value}
          onChange={onChange}
          disabled={disabled} // Apply the disabled prop
        />
        <label htmlFor={name} className={styles.inputLabel}>{label}</label>
        {isPassword && (
          <div className={styles.eyeIcon} onClick={togglePasswordVisibility}>
            {isPasswordVisible ? <img src={IconsUrls.EyeOpen} alt="Show" /> : <img src={IconsUrls.EyeClose} alt="Hide" />}
          </div>
        )}
      </div>
      {error && <div className="text-territoryRed">{error}</div>}
    </>
  );
};


export default InputField;