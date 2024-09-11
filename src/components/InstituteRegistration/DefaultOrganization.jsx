import React from 'react';
import { Svg } from '../../utils/constant/Svg';

const DefaultOrganization = () => {
    return (
        <div className="flex justify-center items-center flex-col h-full">
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="svg">{Svg.PrePrimary}</div>
                <div className="svg">{Svg.SchoolGraySvg}</div>
                <div className="svg">{Svg.CollegeGraySvg}</div>
                <div className="svg">{Svg.ExamFile}</div>
            </div>
            <h3 className="text-2xl font-semibold text-secondaryGrey02">Please Select organization First</h3>
        </div>
    )
}

export default DefaultOrganization