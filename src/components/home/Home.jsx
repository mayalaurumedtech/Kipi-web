import React from 'react';
import Career from './Career';
import { ImageUrls } from '../../utils/constant/Images';
import CareerSecond from './CareerSecond';
import ReviewSlider from './ReviewSlider';
import DownloadApp from './DownloadApp';
import styles from './styles/Home.module.css';
import Buttons from '../custom/Buttons';
import { IconsUrls } from '../../utils/constant/Icons';


const Home = () => {
    return (
        <>
            <div className="w-full relative bg-top bg-no-repeat index-bg-img" style={{ backgroundImage: `url(${ImageUrls.BgHeader})` }}>
                <div
                    className={`${styles.container} container`}>
                    <div className={`${styles.innerContainer} innercontainer`}>
                        <div className={styles.textContainer}>
                            <h3 className={styles.heading}>
                                We Believe in <br />
                                <span>Potential for Technology</span> <br />
                                to Reshape The <br />
                                <span>Learning Experience.</span>
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
            </div>
            <div className="container">
                <div className="innercontainer">
                    <Career careerImage={ImageUrls.Career01} />
                    <CareerSecond />
                    <ReviewSlider />
                    <Career careerImage={ImageUrls.Career03} />
                    <DownloadApp />
                </div>
            </div>
        </>
    )
}

export default Home