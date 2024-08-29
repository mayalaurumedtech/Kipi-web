import React from 'react';
import styles from './styles/Career.module.css';
import { ImageUrls } from '../../constant/Images';

const CareerSecond = () => {

  const InfoCardList = [
    {
      description: 'Experience a supportive environment where students thrive, and parents stay informed every step of the way.'
    },
    {
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface'
    },
    {
      description: 'Lorem ipsum may be used as a placeholder before the final copy is available.'
    },
    {
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface'
    },

  ];

  return (
    <div className={`${styles.container} pt-24`}>
      <div className={styles.innerContainer}>
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
                  <div key={index} className={`flex gap-4 items-center py-2`}>
                    <div>
                      <div className="w-12 h-12 mt-3">
                        <img src={ImageUrls.CheckRoundActive} alt="Info Card Image" className="w-fit" />
                      </div>
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

        <div className={styles.imageContainer}>
          <img src={ImageUrls.Career02} alt="Career Image" className="w-full" />
        </div>

      </div>
    </div>
  );
};

export default CareerSecond;
