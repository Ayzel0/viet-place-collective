"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ExpectedProps {
  question: string,
  answer: string
}

const ExpandingFAQBox: React.FC<ExpectedProps> = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);
  const [zIndex, setZIndex] = useState(0);

  const handleExpandChange = () => {
    setExpanded(!expanded);
  }

  // timeout for the slider
  useEffect(() => {
    if (expanded) {
      setZIndex(50);
    } else {
      const timer = setTimeout(() => {
        setZIndex(0);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [expanded]);

  return (
    <div className={`relative h-[70px] ${zIndex === 50 ? 'z-50' : 'z-0'}`}>
      <div className='flex flex-col absolute w-full transition-all overflow-hidden'>
        <div className=''>
          <div 
            className={`flex flex-row relative z-40 bg-mint py-2 px-4 items-center cursor-pointer`} 
            onClick={handleExpandChange}
          >
            <div className='mr-auto'>
              <h3 className='text-dark-jade font-semibold text-lg'>{question}</h3>
            </div>
            <div className={`transition-[transform] duration-500 relative h-[25px] w-[25px] mr-5 ${expanded ? 'rotate-180' : ''}`}>
              <Image 
                src='/icons/up-chevron.svg'
                alt=''
                fill
              />
            </div>
          </div>
          <div className={`relative bg-dark-jade transform transition-transform duration-500 w-full px-5 py-4 ${expanded ? 'translate-y-0' : '-translate-y-full'}`}>
            <p className='text-white'>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpandingFAQBox;
