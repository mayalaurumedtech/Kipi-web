import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Buttons from '../../custom/Buttons';
import { Svg } from '../../../utils/constant/Svg';
import ReactPlayer from 'react-player';

const AnnouncementDetails = () => {
    const location = useLocation();
    const announcement = location.state;

    if (!announcement) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg text-red-500">Announcement details could not be retrieved. Please go back and try again.</p>
            </div>
        );
    }

    return (
        <>
            <div className="flex justify-between md:py-6 py-3">
                <div>
                    <h2 className="heading">Announcement Details</h2>
                    <ul className="flex gap-1 paragraph text-secondaryGrey01">
                        <li><Link to="/institute-landing-dashboard">Home</Link></li>
                        <li>/</li>
                        <li><Link to="/announcements">Announcements</Link></li>
                        <li>/</li>
                        <li className="text-primaryBlack font-normal">Announcements Details</li>
                    </ul>
                </div>
                <Buttons path="make-an-announcement" svg={Svg.PluseSvg} text="Make an Announcement" buttonStyle="cusbuttons" alt="Make an Announcement" />
            </div>

            <div className="pt-4 md:pt-6 grid grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <p className="mt-3">{announcement.dateTime}</p>
                    <h2 className="text-2xl font-bold">{announcement.title}</h2>
                    <p className="mt-1">{announcement.description}</p>

                    <div className="player-wrapper mt-4">
                        <ReactPlayer
                            className="react-player"
                            url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                            width="100%"
                            controls={true}
                            light="https://img.youtube.com/vi/dXo0LextZTU/0.jpg"
                        />
                    </div>

                    <img src={announcement.icon} alt={`Attachment related to ${announcement.title}`} className="h-6 mt-3" />
                    <p>{announcement.attachment}</p>
                </div>

                <div className="col-span-1 lg:pl-9 pl-4 border-l h-screen overflow-y-auto">
                    <h3>Log History</h3>
                    <p>Your log history details go here...</p>
                </div>
            </div>
        </>
    );
};

export default AnnouncementDetails;
