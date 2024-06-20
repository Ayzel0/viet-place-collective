"use client";

import { useLanguage } from '../LanguageProvider';
import { fraunces } from '../fonts';
import DemandsTable from './DemandsTable';
import ExpandingFAQBox from './ExpandingFAQBox';
import AboutPageContentJSON from './aboutPageContent.json';
import FAQContentJSON from './faqContent.json';
import { cookies } from 'next/headers';
import Image from 'next/image';

interface IFAQContent {
  [language: string]: {
    question: string,
    answer: ITextContent[]
  }[]
}

interface IAboutPageContent {
  [language: string]: ITextContent[]
}

interface ITextContent {
  text: string
  type: string
  href?: string
  imagePath?: string
}

const Page = () => {
  const { language, setLanguage } = useLanguage();
  const aboutPageContent: IAboutPageContent = AboutPageContentJSON as IAboutPageContent;
  const faqContent: IFAQContent = FAQContentJSON as IFAQContent;

  const processTextContent = (language: string, textColor: string) => {
    const renderTextContent = (textContent: ITextContent, index: number) => {
      let element;

      // includes unique values cuz I didn't wanna bother putting those in json
      switch (textContent.type) {
        case 'image':
          element = <Image 
            src={textContent.imagePath as string}
            alt={""}
            width={1000}
            height={1000}
          />
        case 'normalText': 
          element = <span>{textContent.text}</span>
          break;
        case 'italic': 
          element = <span className='italic'>{textContent.text}</span>
          break;
        case 'boldText':
          element = <span className={`${fraunces.className} font-bold text-mint`}>{textContent.text}</span>
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
        case 'header3':
          element = <h3 id={textContent.text.split(' ').join('')} className={`mb-4 mt-8 text-tan lg:text-xl xl:text-2xl ${fraunces.className}`}>{textContent.text}</h3>
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
      <div>
        {aboutPageContent[language].map((textContent, index) => (
          <span key={index} className={`${textColor} text-tan whitespace-pre-wrap`}>
            {renderTextContent(textContent, index)}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className='grid lg:grid-cols-5 mx-[5%] xl:mx-[10%]'>
      <div className='lg:mx-[10%]'>
        <div className='lg:sticky top-8 bg-mint rounded-xl mt-8 p-4'>
          <h3 className='text-dark-jade font-semibold text-xl'>Table of Contents</h3>
          {aboutPageContent['english'].map((textContent, index) => (
            (textContent.type === 'header1' || textContent.type === 'header2') &&
            <div key={index} className={`mt-1 hover:underline ${textContent.type === 'header2' ? 'ml-6 italic' : 'ml-3'}`}>
              <a href={`#${textContent.text.split(' ').join('')}`}>{textContent.text}</a>
            </div>
          ))}
        </div>
      </div>

      <div className='lg:col-span-3'>
        {processTextContent(language, 'text-white')}
        <div className='my-8 mb-[175px]'>
          {faqContent[language].map((obj, idx) => (
            <div key={idx}>
              <ExpandingFAQBox 
                question={obj.question}
                answer={obj.answer}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page;