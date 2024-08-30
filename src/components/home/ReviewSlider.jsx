import React from 'react';
import styles from './styles/ReviewSlider.module.css';
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import useSlideCounter from '../../custom/useSlideCounter';
import { ImageUrls } from '../../constant/Images';

// Move the ReviewInfo array here before using it in the hook
const ReviewInfo = [
    {
        name: 'Jacob Jones',
        title: 'Student (9th Class)',
        image: ImageUrls.User1,
        description: '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface”'
    },
    {
        name: 'Marvin McKinney',
        title: 'Parent',
        image: ImageUrls.User2,
        description: '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface”'
    },
    {
        name: 'Arlene McCoy',
        title: 'Student (10th Class)',
        image: ImageUrls.User3,
        description: '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface”'
    },
    {
        name: 'Jacob Jones',
        title: 'Student (9th Class)',
        image: ImageUrls.User1,
        description: '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface”'
    },
    {
        name: 'Marvin McKinney',
        title: 'Parent',
        image: ImageUrls.User2,
        description: '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface”'
    },
    {
        name: 'Arlene McCoy',
        title: 'Student (10th Class)',
        image: ImageUrls.User3,
        description: '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface”'
    },
    {
        name: 'Jacob Jones',
        title: 'Student (9th Class)',
        image: ImageUrls.User1,
        description: '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface”'
    },

];

const ReviewSlider = () => {
    const { slide, nextSlide, prevSlide } = useSlideCounter(ReviewInfo, 0);

    const getResponsiveStep = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 1024) {
            return 3; // For large screens
        } else if (screenWidth > 768) {
            return 2; // For medium screens
        } else {
            return 1; // For small screens
        }
    };

    return (
        <div className="pt-24">
            <div className={styles.textContainer}>
                <div className="flex items-center justify-between my-3">
                    <h2 className={styles.heading}>Students and Parents  <br />
                        <span>Loves Us</span>
                    </h2>

                    <div className="flex">
                        <div
                            className={`${styles.button} ${slide === 0 ? styles.disabled : ''}`}
                            onClick={() => prevSlide(0, 1)}
                        >
                            <TfiAngleLeft className={styles.icon} />
                        </div>

                        <div
                            className={`${styles.button} ${slide >= (ReviewInfo.length - getResponsiveStep()) ? styles.disabled : ''}`}
                            onClick={() => nextSlide(getResponsiveStep(), 1)}
                        >
                            <TfiAngleRight className={styles.icon} />
                        </div>
                    </div>
                </div>

                <div className="pt-10 flex overflow-hidden">
                    {
                        ReviewInfo.map((info, index) => {
                            return (
                                <div key={index} className={`shrink-0 ${styles.reviewBox}`} style={{ transform: `translateX(-${slide * 110}%)`, transition: 'all 1.5s ease' }}>
                                    <div className="pb-2">
                                        <img src={info.image} alt="Info Card Image" className="w-14 h-14" />
                                        <h3 className="text-xl font-bold">{info.name}</h3>
                                        <p className="text-base">{info.title}</p>
                                    </div>
                                    <div>
                                        <p className="text-base">{info.description}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default ReviewSlider;
