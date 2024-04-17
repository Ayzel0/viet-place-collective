"use client";

import Image from "next/image";
import { useState } from "react";

const ImageCarousel = () => {
  const [expandedImageIndex, setExpandedImageIndex] = useState(0);

  return (
    <div className='flex flex-row mx-[10%] gap-8'>
      <div 
        className={`flex flex-row relative w-[15%] transition-[width] ease-in-out h-[400px] ${expandedImageIndex === 0 && 'w-[55%]'}`}
        onMouseOver={() => setExpandedImageIndex(0)}
      >
        <div className={`relative transition-[width] ${expandedImageIndex === 0 ? 'w-[60%]' : 'w-full'} `}>
          <Image 
            src={'/edenCenterInterior.jpg'}
            alt={'eden center interior'}
            fill
            className='object-cover'
          />
        </div>
        <div className={`transition-[width] flex flex-col items-center justify-center bg-medium-jade overflow-x-hidden ${expandedImageIndex === 0 ? 'w-[40%]' : 'w-0'}`}>
          <h2 className='text-white px-2 text-nowrap text-2xl'>About the <br></br>Small Area Plan</h2>
        </div>
      </div>
      <div 
        className={`relative w-[15%] transition-[width] ease-in-out h-[400px] ${expandedImageIndex === 1 && 'w-[55%]'}`}
        onMouseOver={() => setExpandedImageIndex(1)}
      >
        <Image 
          src={'/edenCenterInterior.jpg'}
          alt={'eden center interior'}
          fill
          className='object-cover'
        />
      </div>
      <div 
        className={`relative w-[15%] transition-[width] ease-in-out h-[400px] ${expandedImageIndex === 2 && 'w-[55%]'}`}
        onMouseOver={() => setExpandedImageIndex(2)}
      >
        <Image 
          src={'/edenCenterInterior.jpg'}
          alt={'eden center interior'}
          fill
          className='object-cover'
        />
      </div>
      <div 
        className={`relative w-[15%] transition-[width] ease-in-out h-[400px] ${expandedImageIndex === 3 && 'w-[55%]'}`}
        onMouseOver={() => setExpandedImageIndex(3)}
      >
        <Image 
          src={'/edenCenterInterior.jpg'}
          alt={'eden center interior'}
          fill
          className='object-cover'
        />
      </div>
    </div>
  )
}

export default ImageCarousel;