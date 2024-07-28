import { jsxs } from "react/jsx-runtime";
import ImageCarousel from "./ImageCarousel";
import TitleBar from "./TitleBar";
import { fraunces } from "./fonts";
import FrontPageContentJSON from './frontPageContent.json';
import Image from "next/image";

interface IFrontPageContent {
  byTheNumbers: {
    amount: string,
    type: string
  }[],
  inFallsChurch: ITextContent[],
  inFallsChurchUL: ITextContent[][],
}

interface ITextContent {
  text: string
  type: string
  href?: string
  hrefText?: string
  imagePath?: string
}


export default async function Home() {
  const frontPageContent = FrontPageContentJSON as IFrontPageContent;
  const byTheNumbers = frontPageContent.byTheNumbers;
  const inFallsChurch = frontPageContent.inFallsChurch;
  const inFallsChurchUL = frontPageContent.inFallsChurchUL;

  const renderTextContent = (textContent: ITextContent, index: number) => {
    let element;

    // includes unique values cuz I didn't wanna bother putting those in json
    switch (textContent.type) {
      case 'image': 
        element = 
        <div className='flex justify-center my-5'>
          <div className='relative w-[250px] md:w-[350px] lg:w-[500px] h-[200px] md:w-[300px] lg:h-[400px]'>
            <Image 
              src={textContent.imagePath as string}
              alt={''}
              fill
              className='object-cover'
            />
            <p className='absolute bottom-0 left-0 bg-charcoal px-4 py-2 text-mint rounded-tr-3xl'>{textContent.text}
              {textContent.hrefText &&
                <a href={textContent.href} className='underline'>{textContent.hrefText}</a>
              }
            </p>
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
    <main>
      <TitleBar />
      <div className='mx-[10%] lg:mx-[12%] xl:mx-[15%] relative z-10'>
        <div className='w-full h-1 bg-medium-gold my-5' />
        <ImageCarousel />
        <div className='w-full h-1 bg-medium-gold mt-5' />
        <h2 className='text-pale-yellow mt-8 text-3xl font-semibold'>By the Numbers</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-4'>
          {byTheNumbers.map((obj, i) => (
              i < 3 &&
              <div key={i} className='bg-medium-jade py-4 px-6 flex gap-8 items-center'>
                <h3 className='text-pale-yellow text-[3rem] font-bold'>{obj.amount}</h3>
                <p className='text-pink text-xl'>{obj.type}</p>
              </div>
          ))}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4'>
          {byTheNumbers.map((obj, i) => (
            i >= 3 &&
            <div key={i} className='bg-medium-jade py-4 px-6 flex gap-8 items-center'>
              <h3 className='text-pale-yellow text-[3rem] font-bold'>{obj.amount}</h3>
              <p className='text-pink text-xl'>{obj.type}</p>
            </div>
          ))}
        </div>
        <div className='w-full h-1 bg-medium-gold my-5' />
        
        <div className="mt-8">
          {inFallsChurch.map((obj, index) => (
            <span key={index} className='text-white whitespace-pre-wrap'>
              {renderTextContent(obj, index)}
            </span>
          ))}
        </div>
        <div className='mb-10'>
          {inFallsChurchUL.map((arr, i) => ( 
            <ul key={i} className='list-disc text-white ml-10'>
              <li className='my-3'>
                {arr.map((obj, j) => (
                  <span key={j} className='text-white'>
                    {renderTextContent(obj, j)}
                  </span>
                ))}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </main>
  );
}