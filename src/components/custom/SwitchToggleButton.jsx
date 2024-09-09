import React from 'react';
import styles from './styles/SwitchToggleButton.module.css';

const SwitchToggleButton = ({ isActive, onChange, id }) => {
  return (
    <div className={styles.switchContainer}>
      <input
        type="checkbox"
        id={id}
        className={styles.switch}
        checked={isActive}
        onChange={onChange}
      />
      <label htmlFor={id} className={styles.switchLabel}></label>
    </div>
  );
};

export default SwitchToggleButton;
