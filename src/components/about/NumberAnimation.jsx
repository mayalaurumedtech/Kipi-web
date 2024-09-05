import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { IconsUrls } from '../../utils/constant/Icons';
import Styles from './Style/NumberAnimation.module.css';

const NumberList = [
    { img: IconsUrls.School, name: 'School Enroll', endNumber: 658 },
    { img: IconsUrls.StudentCap, name: 'Institute Enroll', endNumber: 1735 },
    { img: IconsUrls.TeacherBoard, name: 'Teachers Enroll', endNumber: 8365 },
    { img: IconsUrls.StudentsEnroll, name: 'Students Enroll', endNumber: 40648 },
];

const NumberAnimation = () => {
    const [animationKeys, setAnimationKeys] = useState(NumberList.map(() => 0));
    const { ref, inView } = useInView({
        triggerOnce: true, // Allow multiple triggers
        threshold: 0.5, // Trigger when 50% of the component is in view
    });

    useEffect(() => {
        if (inView) {
            setAnimationKeys(prevKeys => prevKeys.map((key, index) => key + 1));
        }
    }, [inView]);

    return (
        <div className={`${Styles.NumberAnimation} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`}>
            {NumberList.map((number, index) => (
                <div key={index} className={Styles.NumberBox}>
                    <img src={number.img} alt={number.name} />
                    <div ref={index === 0 ? ref : null}>
                        <h3>
                            <CountUp
                                key={animationKeys[index]} // Unique key for each CountUp instance
                                start={0}
                                end={number.endNumber}
                                duration={2.5}
                            />
                            <span>+</span>
                        </h3>
                    </div>
                    <h4>{number.name}</h4>
                </div>
            ))}
        </div>
    );
}

export default NumberAnimation;
