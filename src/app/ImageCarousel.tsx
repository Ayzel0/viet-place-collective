"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { fraunces } from "./fonts";
import { useLanguage } from "./LanguageProvider";
import ImageCarouselContentJSON from './imageCarouselContent.json';

interface IImageCarouselContent {
  [language: string]: {
    [key: string]: {
      imagePath: string,
      title: string,
      subtext?: string,
      buttons: {
        text: string,
        link: string
      }[]
    }
  }
}

const ImageCarousel = () => {
  const { language, setLanguage } = useLanguage();
  const [expandedImageIndex, setExpandedImageIndex] = useState(0);
  const lastUpdateRef = useRef(Date.now());
  const imageCarouselContent: IImageCarouselContent = ImageCarouselContentJSON as IImageCarouselContent;

  const handleMouseOver = (index: number) => {
    const now = Date.now();
    const lastUpdate = lastUpdateRef.current;

    if (now - lastUpdate > 25) {
      setExpandedImageIndex(index);
      lastUpdateRef.current = now;
    }
  }

  return (
    <div className='flex flex-row gap-8' style={{ width: '100%', overflow: 'hidden' }}>
      {Object.keys(imageCarouselContent[language]).map((key, index) => (
        <div
          key={index}
          className={`flex flex-row relative transition-all ease-in-out duration-500 ${expandedImageIndex === index ? 'flex-grow' : 'basis-[15%]'}`}
          onMouseOver={() => handleMouseOver(index)}
          style={{ height: '400px' }}
        >
          <div className={`relative ${expandedImageIndex === index ? 'w-[60%]' : 'w-full'} transition-all ease-in-out duration-500`}>
            <Image
              src={imageCarouselContent[language][key].imagePath}
              alt={''}
              fill
              className='object-cover'
            />
          </div>
          {expandedImageIndex === index && (
            <div className='transition-all ease-in-out duration-500 flex flex-col items-center justify-center bg-medium-jade overflow-x-hidden w-[40%]'>
              <h2 className='text-white px-2 text-nowrap whitespace-pre-wrap text-2xl text-center'>{imageCarouselContent[language][key].title}</h2>
              {imageCarouselContent[language][key].subtext &&
                <p className='text-white text-sm px-4 my-4'>{imageCarouselContent[language][key].subtext}</p>
              }
              {imageCarouselContent[language][key].buttons.map((button, index) => (
                <a className='bg-charcoal rounded-md mt-2 w-[50%] text-center' key={index} href={button.link}>
                  <h3 className={`text-white py-2 text-lg text-nowrap ${fraunces.className}`}>{button.text}</h3>
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ImageCarousel;