"use client";

import { useState } from 'react';
import { useLanguage } from '../LanguageProvider';
import SupportTabsContentJSON from './supportTabsContent.json';

interface ISupportTabsContent {
  [language: string]: {
    [title: string]: {
      content: {
        text: string;
        type: string;
      }[]
      links: {
        text: string;
        link: string;
      }[]
    }
  }
}

const SupportTabsMenu = () => {
  const { language, setLanguage } = useLanguage();
  const supportTabsContent: ISupportTabsContent = SupportTabsContentJSON as ISupportTabsContent;
  const [currentTab, setCurrentTab] = useState(Object.keys(supportTabsContent[language])[0]);
  const handleChangeTab = (newTabName: string) => {
    setCurrentTab(newTabName);
  }

  return (
    <div className='flex'>
      <div className='flex flex-col text-charcoal w-[25%]'>
        {Object.keys(supportTabsContent[language]).map((tabName, index) => (
          <div key={index} className='bg-tan p-5 hover:brightness-75 h-full flex flex-row items-center' onClick={() => handleChangeTab(tabName)}>
            <h1>{tabName}</h1>
          </div>
        ))}
      </div>
      <div className='bg-pale-yellow w-[75%] p-4'>
        <div>
          {supportTabsContent[language][currentTab].content.map((textObject, index) => (
            <div key={index}>
              {textObject.type === 'header1' ?
                <h1 className='text-2xl text-charcoal'>{textObject.text}</h1>
                :
                <p>{textObject.text}</p>
              }
            </div>
          ))}
        </div>
        <div>
          {supportTabsContent[language][currentTab].links.map((linkObject, index) => (
            <div 
              key={index} 
              className='cursor-pointer bg-charcoal p-4 rounded-full text-tan w-[full] lg:w-[25%] text-center my-4' 
              onClick={() => {window.open(linkObject.link, '_blank')?.focus()}}
            >
              {linkObject.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SupportTabsMenu;