import React from 'react';
import styles from './styles/DownloadApp.module.css';
import AppDetail from './AppDetail';


const DownloadApp = () => {
    return (
        <div className="py-24">
            <div>
                <h2 className={styles.heading}>Download our Apps to  <br />
                    <span>Get The Best Experience.</span>
                </h2>
            </div>
            <div className={styles.row}>
                <div className={styles.col2}>
                    <AppDetail title="Students & Parents" description="Bridging Home and Education for Better Learning." />
                </div>
                <div className={styles.col2}>
                    <AppDetail title="Teachers & Institute" description="Empowering Educators, Streamlining Institutes." />
                </div>
            </div>
        </div>
    )
}

export default DownloadApp