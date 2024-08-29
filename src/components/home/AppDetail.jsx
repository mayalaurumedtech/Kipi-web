import React from 'react';
import { ImageUrls } from '../../constant/Images';
import styles from './styles/DownloadApp.module.css';

const AppDetail = ({title, description}) => {
  return (
    <div className={styles.AppDetailBox}>
        <div className="w-16 h-16 mb-4 border border-[#000F5B] shadow-custom-shadow flex items-center rounded-lg justify-center">
            <img src={ImageUrls.LogoSvg} alt="Logo image" className='h-8' />
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold">KIPI for {title}</h3>
        <p className="text-base font-normal">{description}</p>
        <div className="flex gap-4 flex-wrap mt-6">
            <img src={ImageUrls.PlayStore} alt="playstore" />
            <img src={ImageUrls.AppStore} alt="applestore" />
        </div>
        <p className="text-base font-normal mt-2">Download the KIPI app today for a 100% mobile experience. Available on iOS and Android.</p>
    </div>
  )
}

export default AppDetail