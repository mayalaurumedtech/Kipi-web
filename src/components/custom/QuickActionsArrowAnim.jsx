import React from 'react';
import { Svg } from '../../utils/constant/Svg';
import styled from './styles/QuickActionsArrowAnim.module.css';
import { Link } from 'react-router-dom';


const QuickActionsArrowAnim = ({ action, className }) => {
    return (
        <>
            <Link to={action.path} className={`${styled.mainBox} ${action.boxStyle} ${className}`}>
                <div className="flex gap-4 items-center">
                    <img src={action.icons} alt=""  className="h-12" />
                    <h3 className="paragraph font-semibold">{action.name}</h3>
                </div>
                <div className={styled.arrow}>{Svg.BgArrowRight}</div>
            </Link>
        </>
    )
}

export default QuickActionsArrowAnim