import React from 'react';
import { IconsUrls } from '../../constant/Icons';
import { ImageUrls } from '../../constant/Images';
import styles from './styles/Header.module.css'
import Buttons from '../../custom/Buttons';


const Header = () => {
    return (
        <div 
            className={styles.container}
            
        >
            <div className={styles.innerContainer}>
                <div className={styles.textContainer}>
                    <h3 className={styles.heading}>
                        We Believe in <br />
                        <span className="font-bricolage">Potential for Technology</span> <br />
                        to Reshape The <br />
                        <span className="font-bricolage">Learning Experience.</span>
                    </h3>
                    <p className={styles.paragraph}>Join us now as</p>
                    <div className={styles.buttonContainer}>
                        <Buttons text="Student" imageSrc={IconsUrls.Students} buttonStyle={styles.studentButton} alt={"login"} />
                        <Buttons text="Parents" imageSrc={IconsUrls.Parents} buttonStyle={styles.parentButton} alt={"Sign Up"} />
                    </div>
                </div>
                <div className="hidden lg:flex">
                    <div className={styles.vector01}>
                        <img src={ImageUrls.Vector01} alt="Vector Graphic" />
                    </div>
                    <div className={styles.vector02}>
                        <img src={ImageUrls.vector02} alt="Vector Graphic" />
                    </div>
                    <div className={styles.star}>
                        <img src={ImageUrls.star} alt="Vector Graphic" />
                    </div>
                    <div className={styles.cap}>
                        <img src={ImageUrls.cap} alt="Vector Graphic" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
