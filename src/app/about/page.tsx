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
  hrefText?: string
  imagePath?: string
  threeImageContent?: {
    imagePath: string
    caption: string
    captionHref: string
  }[]
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
          element = 
          <div className='my-5 flex justify-center'>
            <div className='w-[full] md:w-[50%] relative'>
              <Image 
                src={textContent.imagePath as string}
                alt={""}
                width={1000}
                height={1000}
              />
              {textContent.text !== "" && 
                <p className='absolute bottom-0 left-0 bg-charcoal px-4 py-2 text-mint rounded-tr-3xl'>
                  {textContent.text}
                  {textContent.href &&
                    <a href={textContent.href}>{textContent.hrefText}</a>
                  }
                </p>
              }
            </div>
          </div>
          break;
        case 'ulObject': 
          element = 
          <ul className='list-disc ml-5 my-5'>
            <li>
              Added primary goal: <span className='italic'>“Prioritize anti-displacement strategies to promote the longevity of small businesses in the Eden Center.”</span>
              <ul className='list-square ml-5'>
                <li>Creating a <span className='font-bold text-mint'>Vietnamese Cultural District</span>, potentially named <span className='font-bold text-mint'>“Little Saigon”</span></li>
                <li>Honorarily name a section of Wilson Boulevard as <span className='font-bold text-mint'>“Saigon Boulevard”</span></li>
              </ul>
            </li>
            <li>Added <span className='font-bold text-mint'>anti-displacement toolkit</span>, including the following strategies:</li>
            <ul className='list-square ml-5'>
              <li>Legacy Business Preservation Program</li>
              <li>Vietnamese Outreach Specialist</li>
              <li>Construction Disruption Mitigation</li>
              <li>Neighborhood Business Incubator</li>
            </ul>
            <li>Suggestions to improve parking at Eden Center, while expanding public transportation options</li>
          </ul>
          break;
        case 'threeImage': 
          
        case 'threeImageBox':
          element = 
          <div className='flex my-5 w-[85vw] overflow-x-hidden lg:w-[60vw]'>
            <div className='relative w-[300px] h-[180px] md:h-[275px]'>
              <Image 
                src={'/aboutPagePictures/vpcAtEden.jpg'}
                alt={"VPC Team at Eden Center"}
                fill
                className='object-cover'
              />
              <p className='absolute bottom-0 left-0 bg-charcoal px-3 py-1 text-mint text-sm rounded-tr-3xl'>Photos by VPC</p>
            </div>
            <div className='relative w-[150px] h-[180px] md:h-[275px]'>
              <Image 
                src={'/aboutPagePictures/vpcTalking.JPG'}
                alt="VPC team talking to people at Eden"
                fill
                className='object-cover'
              />
            </div>
            <div className='relative w-[400px] h-[180px] md:h-[275px]'>
              <Image 
                src={'/aboutPagePictures/vpcEden2.jpg'}
                alt="VPC team presenting at Eden"
                fill
                className='object-cover'
              />
              <p className='absolute bottom-0 left-0 bg-charcoal px-3 py-1 text-mint text-sm rounded-tr-3xl'>Photo by <a href="https://www.valerieplesch.com/">Valerie Plesch</a></p>
            </div>
          </div>
          break;
        case 'normalText': 
          element = <span>{textContent.text}</span>
          break;
        case 'italic': 
          element = <span className='italic'>{textContent.text}</span>
          break;
        case 'boldText':
          element = <span className={`font-bold text-mint`}>{textContent.text}</span>
          break;
        case 'header1':
          element = <h1 id={textContent.text.split(' ').join('')} className='text-pale-yellow text-xl lg:text-3xl xl:text-4xl font-semibold my-8'>
            {textContent.href ?
             <a href={textContent.href}>{textContent.text}</a>
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