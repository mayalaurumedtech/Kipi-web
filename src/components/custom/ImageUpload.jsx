import React, { useState } from 'react';
import styles from './styles/ImageUpload.module.css'; 
import { ImageUrls } from '../../utils/constant/Images';
import { IconsUrls } from '../../utils/constant/Icons';

const ImageUpload = ({ImgStyle, PlaceholderImage}) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    return (
        <div className={styles.imageUploadContainer}>
            <div className={`${styles.imageWrapper} ${ImgStyle}`}>
                {selectedImage ? (
                    <img src={selectedImage} alt="Selected" className={styles.imagePreview} />
                ) : (
                    <img src={PlaceholderImage} alt="Placeholder" className={styles.imagePreview} />
                )}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className={styles.fileInput}
                />
                <button className={styles.updateButton}>
                    <img src={IconsUrls.UploadImageSvg} alt="Button" />
                </button>
            </div>
        </div>
    );
};

export default ImageUpload;
