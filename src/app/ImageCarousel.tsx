"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { fraunces } from "./fonts";
import { useLanguage } from "./LanguageProvider";
import ImageCarouselContentJSON from './imageCarouselContent.json';
import useWindowDimensions from "@/util/useWindowDimensions";

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
  const { height, width } = useWindowDimensions();
  const { language, setLanguage } = useLanguage();
  const [isClient, setIsClient] = useState(false);
  const [expandedImageIndex, setExpandedImageIndex] = useState(0);
  const lastUpdateRef = useRef(Date.now());
  const imageCarouselContent: IImageCarouselContent = ImageCarouselContentJSON as IImageCarouselContent;

  useEffect(() => { setIsClient(true) }, []);

  const handleMouseOver = (index: number) => {
    const now = Date.now();
    const lastUpdate = lastUpdateRef.current;

    if (now - lastUpdate > 25) {
      setExpandedImageIndex(index);
      lastUpdateRef.current = now;
    }
  }

  if (typeof width === 'undefined') {
    return null;
  }

  return (
    isClient && <>
      {width > 1200 ?
        <div className='flex flex-row gap-8' style={{ width: '100%', overflow: 'hidden' }}>
          {Object.keys(imageCarouselContent[language]).map((key, index) => (
            <div
              key={index}
              className={`flex flex-row relative transition-all ease-in-out duration-500 ${expandedImageIndex === index ? 'w-[60%]' : 'w-[20%]'}`}
              onMouseOver={() => handleMouseOver(index)}
              style={{ height: '400px' }}
            >
              <div className={`relative ${expandedImageIndex === index ? 'w-[60%]' : 'w-full'} transition-all ease-in-out duration-500`}>
                <Image
                  unoptimized
                  src={imageCarouselContent[language][key].imagePath}
                  alt={''}
                  fill
                  className='object-cover'
                />
              </div>
              <div className={`${expandedImageIndex === index ? 'w-[40%]' : 'w-[0px]'} transition-[width] overflow-y-hidden ease-in-out duration-500 flex flex-col items-center justify-center bg-medium-jade overflow-x-hidden`}>
                <h2 className='text-white px-2 text-balance whitespace-pre-wrap text-2xl text-center'>{imageCarouselContent[language][key].title}</h2>
                {imageCarouselContent[language][key].subtext &&
                  <p className={`text-white text-sm px-4 my-4 transition-[opacity] ${expandedImageIndex === index ? 'opacity-100 delay-500 ease-in-out duration-500' : 'opacity-0 duration-100'}`}>{imageCarouselContent[language][key].subtext}</p>
                }
                {imageCarouselContent[language][key].buttons.map((button, index) => (
                  <a className='bg-charcoal rounded-lg mt-2 w-[50%] text-center' key={index} href={button.link}>
                    <h3 className={`text-white py-2 text-lg text-nowrap ${fraunces.className}`}>{button.text}</h3>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        :
        <div>
          {Object.keys(imageCarouselContent[language]).map((key, index) => ( 
            <div key={index} className='my-5 flex flex-col'>
              <div className='relative w-[100%] h-[300px]'>
                <Image
                  src={imageCarouselContent[language][key].imagePath}
                  alt={''}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='bg-medium-jade w-[100%] flex flex-col items-center justify-center py-4'>
                <h2 className='text-white px-2 text-nowrap whitespace-pre-wrap text-2xl text-center'>{imageCarouselContent[language][key].title}</h2>
                {imageCarouselContent[language][key].subtext &&
                  <p className='text-white text-sm px-4 my-4'>{imageCarouselContent[language][key].subtext}</p>
                }
                {imageCarouselContent[language][key].buttons.map((button, index) => (
                  <a 
                    className='bg-charcoal rounded-lg mt-2 w-[50%] text-center' 
                    key={index} 
                    href={button.link}
                  >
                    <h3 className={`text-white py-2 text-lg text-nowrap ${fraunces.className}`}>{button.text}</h3>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      }
    </>
  )
}

export default ImageCarousel;