import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselSlider = ({ images, showArrows = true, autoPlay = true, interval = 3000, transitionTime = 500, infiniteLoop = true, onChange, onClickItem, onClickThumb }) => {
    return (
        <Carousel
            showArrows={showArrows}
            autoPlay={autoPlay}
            interval={interval}
            infiniteLoop={infiniteLoop} 
            transitionTime={transitionTime}
            onChange={onChange}
            onClickItem={onClickItem}
            // onClickThumb={onClickThumb}
        >
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image.src} alt={`Slide ${index + 1}`} />
                    {/* <p className="legend">{image.legend}</p> */}
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselSlider;
