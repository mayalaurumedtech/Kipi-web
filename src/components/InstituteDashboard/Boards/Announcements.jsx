import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Buttons from '../../custom/Buttons';
import { Svg } from '../../../utils/constant/Svg';
import SearchBar from '../../custom/SearchBar';
import Dropdown from '../../custom/Dropdown';

const StdOptions = [
    { id: 1, value: 'Std - 9', label: 'Std - 9' },
    { id: 2, value: 'Std - 10', label: 'Std - 10' },
    { id: 3, value: 'Std - 11(Science)', label: 'Std - 11 (Science)' },
    { id: 4, value: 'Std - 12(Science)', label: 'Std - 12 (Science)' },
    { id: 5, value: 'Std - 11(Commerce)', label: 'Std - 11 (Commerce)' },
    { id: 6, value: 'Std - 12(Commerce)', label: 'Std - 12 (Commerce)' },
    { id: 7, value: 'Std - 11(Arts)', label: 'Std - 11 (Arts)' },
];

const Announcements = () => {

    const { standardId } = useParams();

    const [searchValue, setSearchValue] = useState('');
    const [filter, setFilter] = useState(StdOptions[standardId]?.value || '');

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <>
            <div className="flex justify-between pt-6">
                <div>
                    <h2 className="heading">Announcements</h2>
                    <ul className="flex gap-1 paragraph text-secondaryGrey01">
                        <li><Link to="/institute-landing-dashboard">Home</Link></li>
                        <li>/</li>
                        <li><Link to="/boards-of-education">Boards of Education</Link></li>
                        <li>/</li>
                        <li className="text-primaryBlack font-normal">{standardId}</li>
                        <li>/</li>
                        <li className="text-primaryBlack font-normal">Announcements</li>
                    </ul>
                </div>
                <Buttons path="make-an-announcement" svg={Svg.PluseSvg} text="Make an Announcement" buttonStyle="cusbuttons" alt="Make an Announcement" />
            </div>

            <div className="flex justify-between pt-3 md:pt-6">
                <SearchBar
                    value={searchValue}
                    onChange={handleSearchChange}
                    placeholder="Search"
                    inputClassName="w-full bg-secondaryGrey03 "
                    iconClassName="mr-2"
                />

                <Dropdown
                    value={filter}
                    onChange={setFilter}
                    options={StdOptions}
                    placeholder="Select Standard"
                />
            </div>
        </>
    )
}

export default Announcements