import React from 'react';
import InputCheckbox from '../custom/InputCheckbox';
import { ImageUrls } from '../../utils/constant/Images';

const CollegeSelect = [
    {
        college: 'gsebBoards',
        img: ImageUrls.gsebBorad,
        title: 'G.T.U',
        peraText: 'Gujarat Secondary and Higher Secondary Education Board'
    },
    {
        college: 'cbseBoards',
        img: ImageUrls.cbseBoard,
        title: 'G.U',
        peraText: 'Central Board of Secondary Education'
    },
    {
        college: 'icseBoards',
        img: ImageUrls.icseBoard,
        title: 'L.D. College',
        peraText: 'Indian Certificate of Secondary Education/Indian School Certificate'
    }
];

const College = ({ handleCheckboxChange, selectedOptions }) => {
    return (
        <div className="pt-6 pl-6">
            <h2 className="title">Select University</h2>
            <p className="paragraph2">Select your College’s University.</p>

            <div className="pt-6 flex flex-col gap-8">
                {CollegeSelect.map((college, index) => (
                    <InputCheckbox
                        key={index}
                        // checked={selectedOptions[college.board]}
                        // onChange={() => handleCheckboxChange(college.board)}
                        svg={<img src={college.img} alt={college.title} className="ml-4" />}
                        titalText={college.title}
                        peraText={college.peraText}
                    />
                ))}
            </div>
        </div>
    );
}

export default College;
