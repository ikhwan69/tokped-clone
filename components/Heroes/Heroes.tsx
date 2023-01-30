import React, { useState, createRef } from 'react'
import style from '../../styles/Carousel.module.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'



const images = ['/assets/example-1.webp', '/assets/example-2.webp', '/assets/example-3.webp', '/assets/example-4.webp']
const Heroes = () => {
  const [currentImage, setCurrentImage] = useState<number>(0)


  const refs = images.reduce((acc: any, val: any, i: number | string) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = (i: number) => {
    setCurrentImage(i);

    refs[i].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start"
    });
  }

  const totalImages = images.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1)
    }
  }

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1)
    }
  }


  const sliderControl = (isLeft: boolean) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${style.arrow_style} ${isLeft ? "left-2" : "right-2"}`}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? <IoIosArrowBack className='h-5 w-5' /> : <IoIosArrowForward className='h-5 w-5' />}
      </span>
    </button>
  )

  return (
    <div className=" container mx-auto ">
      <div className="md:p-8 flex">
        <div className="relative w-full">
          <div className={`${style.carousel} rounded-xl items-center`}>
            {sliderControl(true)}
            {images.map((img, i) => (
              <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
                <img src={img} alt="gambar" className="w-full object-contain" />
              </div>
            ))}
            {sliderControl(false)}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Heroes