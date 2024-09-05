import React from 'react';
import styles from './style/About.module.css';
import { ImageUrls } from '../../utils/constant/Images';
import { IconsUrls } from '../../utils/constant/Icons';
import NumberAnimation from './NumberAnimation';


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

const About = () => {
    return (
        <div className="container">
            <div className="innercontainer">
                {/* section 1  */}
                <section className="mt-24 pt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                        <div>
                            <img src={ImageUrls.Career02} alt="Career Image" className="w-auto" />
                        </div>

                        <div>
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
                                            <div key={index} className={`flex gap-4 py-2`}>
                                                <img src={IconsUrls.CheckRoundActive} alt="Info Card Image" className="w-6 h-w-6" />
                                                <div>
                                                    <p className="text-base font-medium">{info.description}</p>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>

                        </div>

                    </div>
                </section>

                {/* section 2 */}
                <NumberAnimation />
            </div>
        </div>
    )
}

export default About