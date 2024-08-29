import React, { useState } from 'react';

const useSlideCounter = (ReviewInfo, initValue = 0) => {
    const [slide, setSlide] = useState(initValue);

    const nextSlide = (value = 4, step = 3) => {
        if (ReviewInfo.length - value === slide) return false;
        setSlide(slide + step);
    }

    const prevSlide = (value = 0, step = 3) => {
        if (slide === value) return false;
        setSlide(slide - step);
    }

    return { slide, nextSlide, prevSlide };
}

export default useSlideCounter;
