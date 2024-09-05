import React from 'react';
import { IconsUrls } from '../../utils/constant/Icons';
import Buttons from '../custom/Buttons';

const InstituteRegistrationHeader = () => {
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
                        <Buttons path="/" text="Logout" buttonStyle="cusbuttons" imageSrc={IconsUrls.Logout} alt={"Logout"} />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default InstituteRegistrationHeader