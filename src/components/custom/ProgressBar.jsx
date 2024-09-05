import React from 'react';
import styles from './styles/ProgressBar.module.css';

const ProgressBar = ({ lable, step, totalSteps }) => {
    const progressPercentage = (step / totalSteps) * 100;

    return (
        <div className={styles.progressBarContainer}>
            <div className={styles.progressLabel}>
                <p className="container">{lable} ({step}<span>/{totalSteps}</span> )</p>
            </div>
            <div className={styles.progressBarBackground}>
                <div className={styles.progressBarFill} style={{ width: `${progressPercentage}%` }}></div>
            </div>
        </div>
    );
};

export default ProgressBar;
