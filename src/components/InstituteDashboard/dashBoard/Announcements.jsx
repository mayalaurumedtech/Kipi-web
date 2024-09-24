import React from 'react';
import styled from './styles/Announcements.module.css';
import { Svg } from '../../../utils/constant/Svg';

const Announcements = ({ title, viewAllText, items }) => {
    
    return (
        <div className={styled.cardList}>
            <div className={styled.cardHeader}>
                <h3 className="paragraph font-medium">{title}</h3>
                <a href="#" className="flex items-center gap-2">{viewAllText} {Svg.ArrowRight}</a>
            </div>
            <div className={styled.innerCard}>
                {items.map((item, index) => (
                    <div className={styled.cardItem} key={index}>
                        {item.icon && <img src={item.icon} alt="icon" className={styled.icon} />}
                        <div className={styled.cardContent}>
                            <h4 className="paragraph font-semibold">{item.heading}</h4>
                            <p className="paragraph2">{item.description}</p>
                            <p className="paragraph2 text-secondaryGrey02">{item.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Announcements;
