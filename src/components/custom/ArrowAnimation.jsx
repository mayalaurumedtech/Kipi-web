import React from 'react';
import styled from './styles/ArrowAnimation.module.css';
import { Link } from 'react-router-dom';
import { Svg } from '../../utils/constant/Svg';


const ArrowAnimation = ({value, children, onClick}) => {
    return (
        <div>
            <Link to={value.path} key={value.id} className={`${styled.instCard} ${value.boxStyle}`} onClick={onClick}>
                <img src={value.icon} alt={value.name} className="h-20 w-auto" />
                {children}
                <div className={styled.arrowRight}>
                    {Svg.BgArrowRight}
                </div>
            </Link>
        </div>
    )
}

export default ArrowAnimation