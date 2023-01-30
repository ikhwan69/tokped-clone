import React from 'react'
import { Zoom, Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import Image from 'next/image'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import style from '../../styles/Carousel.module.css'

const HeroesSlider = () => {
    const images = [
        "/assets/example-1.webp",
        "/assets/example-2.webp",
        "/assets/example-3.webp",
        "/assets/example-4.webp",
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
                <IoIosArrowBack className='h-5 w-5' />
            </button>
        ),
        nextArrow: (
            <button
                type="button"
                className={`${style.arrow_style} mr-3`}
            >
                <IoIosArrowForward className='h-5 w-5' />
            </button>
        )
    };
    return (
        <div className="container mx-auto p-5 ">
            <Slide {...zoomInProperties}>
                {images.map((each, index) => (
                    <div key={index} className="flex justify-center w-full h-full">
                        <Image
                            width={1180}
                            height={500}
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