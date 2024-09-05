import React from 'react';
import styles from './styles/Career.module.css';
import { IconsUrls } from '../../utils/constant/Icons';

const Career = ({ careerImage }) => {

  const InfoCardList = [
    {
      title: 'Tracking & Assessment',
      image: IconsUrls.Charts,
      description: 'Experience a supportive environment where students thrive, and parents stay informed every step of the way'
    },
    {
      title: 'Interactive Learning',
      image: IconsUrls.Airdrop,
      description: 'Experience a supportive environment where students thrive, and parents stay informed every step of the way'
    },
    {
      title: 'Centralize Learning Approach',
      image: IconsUrls.Group,
      description: 'Experience a supportive environment where students thrive, and parents stay informed every step of the way'
    },
    {
      title: 'Flexibility and Accessibility',
      image: IconsUrls.SliderHorizontal,
      description: 'Experience a supportive environment where students thrive, and parents stay informed every step of the way'
    },
  ];

  return (
    <div className="pt-24">
      <div className={styles.innerContainer}>
        <div className={styles.imageContainer}>
          <img src={careerImage} alt="Career Image" className="w-fit" />
        </div>
        <div className={styles.textContainer}>
          <div>
            <h2 className={styles.heading}>Unleash The Potential <br />
              <span>for Career Transformation.</span>
            </h2>

            <p className={styles.paragraph}>Join an institute that prioritizes your success. Our system ensures transparent communication between parents, students, and the institute, providing real-time updates on academic progress, attendance, and important events. Experience a supportive environment where students thrive, and parents stay informed every step of the way.</p>
          </div>

          <div className="pt-10">
            {
              InfoCardList.map((info, index) => {
                return (
                  <div key={index} className={`flex gap-4 p-6 ${styles.infoCard}`}>
                    <img src={info.image} alt="Info Card Image" className="w-[48px] h-[48px]" />
                    <div>
                      <h3 className="text-xl font-bold">{info.title}</h3>
                      <p className="text-base">{info.description}</p>
                    </div>
                  </div>
                );
              })
            }
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
