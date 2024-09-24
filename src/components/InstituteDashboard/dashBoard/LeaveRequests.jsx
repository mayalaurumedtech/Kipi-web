import React from 'react';
import styled from './styles/LeaveRequests.module.css';
import { Svg } from '../../../utils/constant/Svg';

const LeaveRequests = ({ title, viewAllText, items, Sick,Emergency }) => {

    return (
        <div className={styled.cardList}>
            <div className={styled.cardHeader}>
                <h3 className="paragraph font-medium">{title}</h3>
                <a href="#" className="flex items-center gap-2">{viewAllText} {Svg.ArrowRight}</a>
            </div>
            <div className={styled.innerCard}>
                {items.map((item, index) => (
                    <div className={styled.cardItem} key={index}>
                        <div className={styled.cardContent}>
                            <div className="flex gap-2">
                                {item.icon && <img src={item.icon} alt="icon" className={styled.icon} />}
                                <div>
                                    <h4 className="paragraph font-semibold">{item.name}</h4>
                                    <p className="paragraph2">{item.heading}</p>
                                </div>
                            </div>
                            <div>
                                {item.Sick && (
                                    <button className={`${styled.Alertbutton} border border-territoryYellow py-1 px-6 text-territoryYellow bg-territoryLightYellow`}><span>●</span> Sick</button>
                                )}
                                {item.Emergency && (
                                    <button className={`${styled.Alertbutton} border border-territoryRed py-1 px-6 text-territoryRed bg-[#FBF3F3]`}><span>●</span> Emergency</button>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <p className="paragraph2">Leave: <span className="font-medium">{item.leavedate}</span></p>
                            <p className="paragraph2">Apply on: <span className="font-medium">{item.applydate}</span></p>
                        </div>
                        <div className="flex gap-2">
                            <button className='bg-territoryGreen text-white py-2 px-5 rounded-xl'>Approve</button>
                            <button className='bg-territoryRed text-white py-2 px-5 rounded-xl'>Decline</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeaveRequests;
