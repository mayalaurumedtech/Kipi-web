import React from 'react';
import { IconsUrls } from '../../utils/constant/Icons';
import DropdownOption from '../custom/DropdownOption';

const options = [
    { label: 'Account settings', href: '/account' },
    { label: 'Support', href: '/support' },
    { label: 'License', href: '/license' },
    { label: 'Sign out', href: '#' }, // You can handle specific actions here
];
const InstituteDashboardHeader = () => {

    const handleOptionClick = (option) => {
        console.log('Clicked option:', option);
        if (option.label === 'Sign out') {
            // Handle sign-out logic
            console.log('User signed out');
        }
    };
    return (
        <div className="bg-primaryWhite shadow  fixed top-0 w-full z-50">
            {/* Header Section */}
            <header className="w-full max-w-[1920px] mx-auto">
                <div className="max-w-[1440px] mx-auto px-5 2xl:px-0 py-4 flex flex-wrap justify-between items-center">
                    <h1 className="text-3xl font-bold flex gap-2 items-center">
                        <img src={IconsUrls.LogoSvg} alt="KIPI logo" className="h-8 w-auto" />
                        KIPI
                    </h1>

                    <div className="space-x-4 flex">
                        <DropdownOption buttonLabel="Options" options={options} onOptionClick={handleOptionClick} />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default InstituteDashboardHeader