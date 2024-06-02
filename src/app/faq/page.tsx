"use client";

import FAQContentJSON from './faqContent.json';
import { useLanguage } from '../LanguageProvider';

interface IFAQContent {
  [language: string]: {
    text: string,
    type: string,
  }[]
}

const Page = () => {
  const { language, setLanguage } = useLanguage();
  const faqContent: IFAQContent = FAQContentJSON as IFAQContent;

  return (
    <div className='lg:mx-[15%]'>
      <div>
        {faqContent[language].map((obj, idx) => (
          <div key={idx}>
            <p>{obj.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page;