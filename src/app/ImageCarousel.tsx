"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { fraunces } from "./fonts";
import { useLanguage } from "./LanguageProvider";

const ImageCarousel = () => {
  const { language, setLanguage } = useLanguage();
  const [expandedImageIndex, setExpandedImageIndex] = useState(0);
  const lastUpdateRef = useRef(Date.now());

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
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          className={`flex flex-row relative transition-all ease-in-out duration-500 ${expandedImageIndex === index ? 'flex-grow' : 'basis-[15%]'}`}
          onMouseOver={() => handleMouseOver(index)}
          style={{ height: '400px' }}
        >
          <div className={`relative ${expandedImageIndex === index ? 'w-[60%]' : 'w-full'} transition-all ease-in-out duration-500`}>
            <Image
              src={'/edenCenterInterior.jpg'}
              alt={'eden center interior'}
              fill
              className='object-cover'
            />
          </div>
          {expandedImageIndex === index && (
            <div className='transition-all ease-in-out duration-500 flex flex-col items-center justify-center bg-medium-jade overflow-x-hidden w-[40%]'>
              {language === 'english' ?
                <h2 className='text-white px-2 text-nowrap text-2xl text-center'>About the<br></br>Small Area Plan</h2>
                :
                <h2 className='text-white px-2 text-nowrap text-2xl text-center'>Về kế hoạch<br></br>diện tích nhỏ</h2>
              }
              <button className='bg-charcoal rounded-md mt-2 w-[50%]'>
                <h3 className={`text-white py-2 text-lg ${fraunces.className}`}>{language === 'english' ? 'Read' : 'Đọc'}</h3>
              </button>
              <button className='bg-charcoal rounded-md mt-2 w-[50%]'>
                <h3 className={`text-white py-2 text-lg ${fraunces.className}`}>{language === 'english' ? 'Demands' : 'Yêu cầu'}</h3>
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ImageCarousel;