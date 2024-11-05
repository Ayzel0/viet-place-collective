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
    hrefText?: string
    href?: string
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
            <div className='w-[full] md:w-[50%] relative group'>
              <Image 
                src={textContent.imagePath as string}
                alt={""}
                width={1000}
                height={1000}
              />

              {/* hover photo credit */}
              {textContent.text !== "" && 
                <p className='absolute bottom-0 left-0 p-2.5 bg-charcoal rounded-tr-xl text-sm text-tan opacity-0 group-hover:opacity-100 transition-all'>
                  {textContent.text}
                  {textContent.href &&
                    <a href={textContent.href} className='underline'>{textContent.hrefText}</a>
                  }
                </p>
              }
            </div>
          </div>
          break;
        case 'ulObject': 
          element = 
          // part of community demands description
          <ul className='list-disc ml-10 my-5'>
            <li>
              Added primary goal: <span className='italic'>“Prioritize anti-displacement strategies to promote the longevity of small businesses in the Eden Center.”</span>
              <ul className='list-square ml-10'>
                <li>Creating a <span className='font-bold text-mint'>Vietnamese Cultural District</span>, potentially named <span className='font-bold text-mint'>“Little Saigon”</span></li>
                <li>Honorarily name a section of Wilson Boulevard as <span className='font-bold text-mint'>“Saigon Boulevard”</span></li>
              </ul>
            </li>
            <li>Added <span className='font-bold text-mint'>anti-displacement toolkit</span>, including the following strategies:</li>
            <ul className='list-square ml-10'>
              <li>Legacy Business Preservation Program</li>
              <li>Vietnamese Outreach Specialist</li>
              <li>Construction Disruption Mitigation</li>
              <li>Neighborhood Business Incubator</li>
            </ul>
            <li>Suggestions to improve parking at Eden Center, while expanding public transportation options</li>
          </ul>
          break;
        
          // row of images
          case 'threeImage': 
          element = 
          <div className='grid md:grid-cols-3 gap-2.5'>
            {textContent.threeImageContent?.map((obj, index) => (
              <div key={index} className='relative group'>
                <Image 
                  className='aspect-video object-cover'
                  src={obj.imagePath}
                  alt={''}
                  width={500}
                  height={500}
                />

                {/* hover photo credit */}
                <p className='absolute bottom-0 left-0 p-2.5 bg-charcoal rounded-tr-xl text-sm text-tan opacity-0 group-hover:opacity-100 transition-all'>
                  {obj.caption}
                  {obj.hrefText &&
                    <a href={obj.href} className='underline'>{obj.hrefText}</a>
                  }
                </p>
              </div>
            ))}
          </div>
          break;
          
        // row of images
          case 'threeImageBox':
          element = 
          <div className='flex my-5 w-[85vw] overflow-x-hidden lg:w-[70vw]'>
            <div className='relative w-[350px] h-[180px] md:h-[275px] group'>
              <Image 
                src={'/aboutPagePictures/vpcAtEden.jpg'}
                alt={"VPC Team at Eden Center"}
                fill
                className='object-cover'
              />
              
              {/* hover photo credit */}
              <p className='absolute bottom-0 left-0 p-2.5 bg-charcoal rounded-tr-xl text-sm text-tan opacity-0 group-hover:opacity-100 transition-all'>Photos by VPC</p>
            </div>
            <div className='relative w-[200px] h-[180px] md:h-[275px]'>
              <Image 
                src={'/aboutPagePictures/vpcTalking.JPG'}
                alt="VPC team talking to people at Eden"
                fill
                className='object-cover'
              />
            </div>
            <div className='relative w-[450px] h-[180px] md:h-[275px] group'>
              <Image 
                src={'/aboutPagePictures/vpcEden2.jpg'}
                alt="VPC team presenting at Eden"
                fill
                className='object-cover'
              />

              {/* hover photo credit */}
              <p className='absolute bottom-0 left-0 p-2.5 bg-charcoal rounded-tr-xl text-sm text-tan opacity-0 group-hover:opacity-100 transition-all'>Photo by <a className='underline' href="https://www.valerieplesch.com/">Valerie Plesch</a></p>
            </div>
          </div>
          break;
        
        // defining text styles
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
          element = 
            <h1 id={textContent.text.split(' ').join('')} className='text-pale-yellow text-5xl font-bold my-10'>
              {textContent.href ?
              <a href={textContent.href}>{textContent.text}</a>
              :
              textContent.text
              }
            </h1>
          break;
        case 'header2':
          element = <h2 id={textContent.text.split(' ').join('')} className='text-tan text-3xl my-5'>
            {textContent.href ?
             <a href={textContent.href}>{textContent.text}</a>
             :
             textContent.text
            }
          </h2>
          break;
        case 'header3':
          element = <h3 id={textContent.text.split(' ').join('')} className={`text-2xl my-5`}>{textContent.text}</h3>
          break;
        case 'link':
          element = <span className='text-mint underline hover:text-pale-yellow transition-all'>
            <a href={textContent.href} target='_blank'>{textContent.text}</a>
          </span>
          break;
        case 'bigLink': 
            element = <span className='px-5 py-2.5 rounded-lg bg-mint text-xl text-dark-jade hover:bg-pale-yellow transition-all'>
              <a href={textContent.href} target='_blank'>{textContent.text}</a>
            </span>
            break;
      }
      return element;
    }

    return (
      <div> {/* about page content */}
        {aboutPageContent[language].map((textContent, index) => (
          <span key={index} className={`${textColor} text-tan whitespace-pre-wrap`}>
            {renderTextContent(textContent, index)}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className='grid lg:grid-cols-5 mx-[5%] xl:mx-[10%]'> {/* table of contents */}
      <div className='lg:mx-[10%] mb-10'>
        <div className='lg:sticky top-10 mt-10 p-5 rounded-lg bg-medium-jade text-tan'>
          <h3 className='font-bold text-2xl'>Table of Contents</h3>
          {aboutPageContent['english'].map((textContent, index) => (
            (textContent.type === 'header1' || textContent.type === 'header2') &&
            <div key={index} className={`mt-2.5 hover:underline ${textContent.type === 'header2' ? 'ml-5 italic' : 'ml-2.5'}`}>
              <a href={`#${textContent.text.split(' ').join('')}`}>{textContent.text}</a>
            </div>
          ))}
        </div>
      </div>

      <div className='lg:col-span-3'> {/* faq */}
        {processTextContent(language, 'text-tan')}
        <div className='my-10 mb-[225px]'>
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