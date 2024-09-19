import React, { useContext, useState } from 'react';
import { IconsUrls } from '../../utils/constant/Icons';
import DropdownOption from '../custom/DropdownOption';
import { Svg } from '../../utils/constant/Svg';
import { formatDistanceToNow, differenceInSeconds } from 'date-fns';
import { MenuItem } from '@headlessui/react';
import { MyContext } from './InstituteLayout.jsx';

const AdminMenu = [
  { id: 1, title: 'Profile', path: '', svg: Svg.User },
  { id: 2, title: 'Setting', path: '', svg: Svg.Setting },
  { id: 3, title: 'Sign out', path: '', svg: Svg.Logout },
];

const NotificationList = [
  {
    id: 1,
    svg: Svg.NotificationLight,
    name: "Elite academy",
    title: "Request Approve.",
    description: "Elite academy, has Accept your joining request...",
    time: new Date('2024-09-18T15:04:00'),
  },
  {
    id: 2,
    svg: Svg.NotificationLight,
    name: "Elite academy",
    title: "Request Approve.",
    description: "Elite academy, has Accept your joining request...",
    time: new Date('2024-09-14T08:15:00'),
  },
  {
    id: 3,
    svg: Svg.NotificationLight,
    name: "Elite academy",
    title: "Request Approve.",
    description: "Elite academy, has Accept your joining request...",
    time: new Date('2024-09-12T14:30:00'),
  },
  {
    id: 4,
    svg: Svg.NotificationLight,
    name: "Elite academy",
    title: "Request Approve.",
    description: "Elite academy, has Accept your joining request...",
    time: new Date('2024-09-14T08:15:00'),
  },
  {
    id: 5,
    svg: Svg.NotificationLight,
    name: "Elite academy",
    title: "Request Approve.",
    description: "Elite academy, has Accept your joining request...",
    time: new Date('2024-09-12T14:30:00'),
  },
];

const formatNotificationTime = (date) => {
  const secondsDifference = differenceInSeconds(new Date(), date);

  if (secondsDifference < 60) {
    return `${secondsDifference} seconds ago`;
  }

  return formatDistanceToNow(date, { addSuffix: true });
};

const InstitutedHeader = () => {
  const [showAll, setShowAll] = useState(false);

  const context = useContext(MyContext);

  const handleOptionClick = (option) => {
    console.log('Clicked option:', option);
    if (option.label === 'Sign out') {
      console.log('User signed out');
    }
  };

  // Limit the number of notifications to show initially
  const displayedNotifications = showAll ? NotificationList : NotificationList.slice(0, 3);

  return (
    <div className="bg-primaryWhite shadow fixed top-0 w-full z-50">
      <div className="max-w-[1920px] mx-auto px-5 py-4">
        <header className="flex justify-between items-center">
          <div className="flex justify-between w-[300px] items-center">
            <h1 className="text-3xl font-bold flex gap-2 items-center">
              <img src={IconsUrls.LogoSvg} alt="KIPI logo" className="h-8 w-auto" />
              KIPI
            </h1>
            <div onClick={() => context.setIsToggleSidebar(!context.isToggleSidebar)}>
              {Svg.Setting}
            </div>
          </div>

          <div className="flex gap-12">
            {/* Notification Dropdown */}
            <DropdownOption
              svg={Svg.Bell}
              boxWidth="w-80"
            >
              <div className="max-h-[25rem] overflow-y-auto">
                {displayedNotifications.map((option, index) => (
                  <MenuItem key={index}>
                    {({ active }) => (
                      <div
                        onClick={() => handleOptionClick(option)}
                        className={`flex gap-2 px-4 py-2 text-lg ${active ? 'bg-secondaryGrey03' : ''}`}
                      >
                        <div>{option.svg}</div>
                        <div className="AdminMenuStyle">
                          <h3 className="paragraph21 line-clamp-1">{option.name}</h3>
                          <h3 className="paragraph21 line-clamp-1">{option.title}</h3>
                          <h4 className="paragraph2 line-clamp-2">{option.description}</h4>
                          <p className="paragraph3 line-clamp-1">{formatNotificationTime(option.time)}</p>
                        </div>
                      </div>
                    )}
                  </MenuItem>
                ))}
              </div>
              {/* View More Button */}
              {NotificationList.length > 3 && (
                <div className="text-center p-2">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-blue-500 underline"
                  >
                    {showAll ? "Show Less" : "View More"}
                  </button>
                </div>
              )}
            </DropdownOption>

            {/* Admin Menu Dropdown */}
            <DropdownOption
              AdminName="Vivek Grover"
              AdminType="Admin"
              Arrow="Arrow"
            >
              {AdminMenu.map((Admin, index) => (
                <MenuItem key={index}>
                  {({ active }) => (
                    <div
                      onClick={() => handleOptionClick(Admin)}
                      className={`flex gap-2 px-4 py-2 text-lg ${active ? 'bg-secondaryGrey03' : ''}`}
                    >
                      <div>{Admin.svg}</div>
                      <div className="AdminMenuStyle">
                        <h3>{Admin.title}</h3>
                      </div>
                    </div>
                  )}
                </MenuItem>
              ))}
            </DropdownOption>
          </div>
        </header>
      </div>
    </div>
  );
};

export default InstitutedHeader;
