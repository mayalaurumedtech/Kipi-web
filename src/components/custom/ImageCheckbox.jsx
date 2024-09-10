import React from 'react';
import styles from './styles/ImageCheckbox.module.css';

const ImageCheckbox = ({ src, id, label, checked, onChange }) => {
    const handleImageClick = () => {
        // Trigger checkbox change when image is clicked
        onChange({ target: { checked: !checked } });
    };

    return (
        <div className={styles.imageCheckboxContainer} onClick={handleImageClick}>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
                className={styles.checkbox}
            />
            <img
                src={src}
                alt={label}
                className={styles.image} 
                 // Add click handler to image
            />
            <label className={styles.label}>{label}</label>
        </div>
    );
};

export default ImageCheckbox;
