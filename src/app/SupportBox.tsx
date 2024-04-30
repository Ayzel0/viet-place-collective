"use client";

import { useLanguage } from "./LanguageProvider";
import SupportBoxContentJSON from './supportBoxContent.json';
import { fraunces } from "./fonts";

interface ISupportBoxContent {
  [boxTitle: string]: {
    title: string,
    text: string,
    link: string,
    linkText: string,
  }
}

const SupportBox = () => {
  const { language, setLanguage } = useLanguage();
  const supportBoxContent: ISupportBoxContent = SupportBoxContentJSON as ISupportBoxContent;

  return (
    <div className='grid lg:grid-cols-3 gap-8 rounded-xl my-4'>
      {Object.keys(supportBoxContent).map(boxName => (
        <div key={boxName} className='bg-mint p-4 rounded-xl flex flex-col'>
          <h2 className='text-dark-jade text-2xl font-semibold'>{supportBoxContent[boxName].title}</h2>
          <p className='text-charcoal my-2 grow'>{supportBoxContent[boxName].text}</p>
          <div 
            className={`cursor-pointer bg-charcoal text-white p-2 text-center rounded-full text-lg hover:brightness-125 ${fraunces.className}`}
            onClick={() => {window.location.href = supportBoxContent[boxName].link}}
          >{supportBoxContent[boxName].linkText}</div>
        </div>
      ))}
    </div>
  )
}

export default SupportBox;