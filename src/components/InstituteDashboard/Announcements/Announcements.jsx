import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../../custom/Buttons';
import { Svg } from '../../../utils/constant/Svg';
import SearchBar from '../../custom/SearchBar';
import { IconsUrls } from '../../../utils/constant/Icons';


const AnnouncementsList = [
    {
        id: 1,
        title: 'We are very excited to launch our new planner feature to make every pla...',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available',
        icon: IconsUrls.Video,
        attachment: 'Video attached',
        dateTime: '15 Dec 2024, 12:15 PM',
    },
    {
        id: 2,
        title: 'New update will release soon...',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available',
        icon: IconsUrls.Microphone,
        attachment: 'Audio attached',
        dateTime: '15 Dec 2024, 12:15 PM',
    },
    {
        id: 3,
        title: 'We are very excited to launch our new planner feature to make every pla...',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available',
        icon: IconsUrls.Document,
        attachment: 'Document attached',
        dateTime: '17 Dec 2024, 2:30 PM',
        TimerAlert: IconsUrls.TimerAlert,
    },
]

const Announcements = () => {

    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <>
            <div className="flex justify-between md:pt-6 pt-3">
                <div>
                    <h2 className="heading">Announcements</h2>
                    <ul className="flex gap-1 paragraph text-secondaryGrey01">
                        <li><Link to="/institute-landing-dashboard">Home</Link></li>
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

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-6 gap-3 md:mt-6 mt-4">
                {AnnouncementsList.map((announcement, index) => (
                    <Link state={announcement} key={announcement.id} to={`/announcements/${announcement.id}`} className="flex gap-4 border border-territoryGreyOutline rounded-2xl p-4">
                        <img src={IconsUrls.speaker} alt="Announcements" className="h-10" />
                        <div className="flex flex-col gap-4">
                            <h3 className="line-clamp-1 paragraph font-semibold">{announcement.title}</h3>
                            <p className="line-clamp-2 paragraph2">{announcement.description}</p>
                            <div className="flex gap-1">
                                <img src={announcement.icon} alt={announcement.attachment} className="h-6" />
                                <h4 className="paragraph21">{announcement.attachment}</h4>
                                {announcement.TimerAlert ? "" :
                                    <span className="paragraph2">| {announcement.dateTime}</span>
                                }
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-2'>
                                    <button className="py-2 px-5 border rounded-xl border-secondaryGrey01 text-secondaryGrey01">Edit</button>
                                    <button className="py-2 px-5 border rounded-xl border-territoryRed text-territoryRed">Delete</button>
                                </div>
                                {announcement.TimerAlert && (
                                    <div className="flex gap-1">
                                        <img src={announcement.TimerAlert} alt="" className="h-6" />
                                        <span className="paragraph2 font-semibold">{announcement.dateTime}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </>
    )
}

export default Announcements