import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { Svg } from '../../utils/constant/Svg';
import { ImageUrls } from '../../utils/constant/Images';

const DropdownOption = ({ buttonLabel, options, Arrow, AdminName, AdminType, svg, boxWidth="w-52", AdminMenuStyle, children }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <MenuButton className="inline-flex gap-2 w-full items-center text-secondaryGrey01">
              {buttonLabel}
              {svg && (
                <div className="bg-secondaryLightBlue02 w-12 h-12 rounded-full flex justify-center items-center">{svg}</div>
            )}
              {AdminName && (
                <div className="flex gap-2 text-right">
                  <div>
                    <h3 className="paragraph font-semibold">{AdminName}</h3>
                    <p className="paragraph2">{AdminType}</p>
                  </div>
                  <div className="w-10">
                    <img src={ImageUrls.User2} alt="" className="w-full" />
                  </div>
                </div>
              )}
              {Arrow && (
                <div className="p-1">
                  {open ? Svg.ArrowUp : Svg.ArrowDown}
                </div>
              )}
            </MenuButton>
          </div>

          <MenuItems className={`absolute right-0 z-10 mt-4 py-3 ${boxWidth} origin-top-right rounded-2xl bg-primaryWhite notification-shadow transition`}>

            {children}
          </MenuItems>
        </>
      )}
    </Menu>
  );
};

export default DropdownOption;
