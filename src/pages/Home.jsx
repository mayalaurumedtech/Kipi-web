import React from 'react';
import Header from '../components/home/Header';
import Career from '../components/home/Career';
import { ImageUrls } from '../constant/Images';
import CareerSecond from '../components/home/CareerSecond';
import ReviewSlider from '../components/home/ReviewSlider';
import DownloadApp from '../components/home/DownloadApp';

const Home = () => {
    return (
        <>
            <Header />
            <Career careerImage={ImageUrls.Career01} />
            <CareerSecond />
            <ReviewSlider />
            <Career careerImage={ImageUrls.Career03} />
            <DownloadApp />
        </>
    )
}

export default Home