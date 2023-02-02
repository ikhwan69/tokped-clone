import React from 'react'
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import Image from 'next/image'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import style from '../../styles/Carousel.module.css'

const HeroesSlider = () => {
    const images = [
        "/assets/banner-01.jpg",
        "/assets/banner-02.jpg"
    ]

    //Properties for zoom effect while slide-show
    const zoomInProperties = {
        indicators: true,
        scale: 1.2,
        duration: 3000,
        transitionDuration: 500,
        infinity: true,
        prevArrow: (
            <button
                type="button"
                className={`${style.arrow_style} ml-3`}
            >
                <IoIosArrowBack className='md:h-5 md:w-5 w-4 h-4' />
            </button>
        ),
        nextArrow: (
            <button
                type="button"
                className={`${style.arrow_style} mr-3`}
            >
                <IoIosArrowForward className='md:h-5 md:w-5 w-4 h-4' />
            </button>
        )
    };
    return (
        <div className="md:w-[1200px] w-[360px] mx-auto">
            <Slide {...zoomInProperties}>
                {images.map((each, index) => (
                    <div key={index} className="flex justify-center w-auto h-auto">
                        <Image
                            quality={100}
                            width={1200}
                            height={300}
                            className="object-cover w-full rounded-lg shadow-xl"
                            src={each}
                            alt="gambar"
                        />
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default HeroesSlider