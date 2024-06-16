"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";   

interface ExpectedProps {
  question: string,
  answer: ITextContent[]
}

interface ITextContent {
  text: string,
  type: string,
  href?: string
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

  const renderTextContent = (textContent: ITextContent, index: number) => {
    let element;

    // includes unique values cuz I didn't wanna bother putting those in json
    switch (textContent.type) {
      case 'normalText': 
        element = <span>{textContent.text}</span>
        break;
      case 'italic': 
        element = <span className='italic'>{textContent.text}</span>
        break;
      case 'header1':
        element = <h1 id={textContent.text.split(' ').join('')} className='text-pale-yellow text-xl lg:text-3xl xl:text-4xl font-semibold my-8'>
          {textContent.href ?
            <a href={textContent.href}>textContent.text</a>
            :
            textContent.text
          }
        </h1>
        break;
      case 'header2':
        element = <h2 id={textContent.text.split(' ').join('')} className='text-mint text-lg lg:text-2xl xl:text-3xl mt-8 mb-4'>
          {textContent.href ?
            <a href={textContent.href}>{textContent.text}</a>
            :
            textContent.text
          }
        </h2>
        break;
      case 'link':
        element = <span className='text-mint underline'>
          <a href={textContent.href}>{textContent.text}</a>
        </span>
        break;
    }
    return element;
  }

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
                src='/up-chevron.svg'
                alt=''
                fill
              />
            </div>
          </div>
          <div className={`relative bg-dark-jade transform transition-transform duration-500 w-full px-5 py-4 ${expanded ? 'translate-y-0' : '-translate-y-full'}`}>
            {answer.map((obj, idx) => (
              <span key={idx} className='text-white whitespace-pre-wrap'>
                {renderTextContent(obj, idx)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpandingFAQBox;
