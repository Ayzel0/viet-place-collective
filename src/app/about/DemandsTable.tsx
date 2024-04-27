"use client";

import { useLanguage } from '../LanguageProvider';
import DemandsTableContentJSON from './demandsTableContent.json';
import { fraunces } from '../fonts';

interface IDemandsTableContent {
  [language: string]: {
    title: string;
    description: string;
    summary: {
      text: string;
      formatting: string;
    }[]
  }[]
}

const DemandsTable = () => {
  const { language, setLanguage } = useLanguage();
  const demandsTableContent: IDemandsTableContent = DemandsTableContentJSON as IDemandsTableContent;
  const demandsTable = demandsTableContent[language];

  return (
    <div className="grid grid-cols-3">
      <h1 className='font-bold bg-medium-jade py-4 px-8 rounded-l-full'>STRATEGY</h1>
      <h1 className='font-bold bg-medium-jade py-4 px-8 col-span-2 rounded-r-full'>RELEVANCE</h1>
      <div className='col-span-3'>
        {demandsTable.map((content, index) => (
          <div key={index} className='grid grid-cols-3 my-12'>
            <div className='flex flex-row items-center px-8'>
              <h2 className={`text-white font-semibold text-xl ${fraunces.className}`}>{content.title}</h2>
            </div>
            <div className='col-span-2 px-8'>
              <p>{content.description}</p>
              <div className={`text-mint my-4 text-lg ${fraunces.className}`}>
                {content.summary.map((summaryText, index) => (
                  <span key={index} className={`${summaryText.formatting}`}>
                    {summaryText.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DemandsTable;