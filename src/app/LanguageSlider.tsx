"use client";

import Cookies from 'js-cookie';
import { useLanguage } from './LanguageProvider';

export default function LanguageSlider() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = () => {
    if (language === 'english') {
      setLanguage('vietnamese');
    } else if (language === 'vietnamese') {
      setLanguage('english');
    } else {
      setLanguage('english');
    }
  }

  return (
    <div className='relative'>
      <div 
        className='flex flex-row w-[115px] h-[60px] bg-medium-jade items-center p-[5px] rounded-lg hover:brightness-75'
        onClick={handleLanguageChange}
      >
        <div className={`w-[50px] h-[50px] bg-bright-jade rounded-lg transition-transform
          ${language === 'vietnamese' && 'translate-x-[55px]'}`} 
        />
        <div className={`text-base absolute left-[25%] -translate-x-[40%] leading-none text-charcoal ${language === 'english' && 'font-bold'}`}>EN</div>
        <div className={`text-base absolute right-[25%] translate-x-[40%] leading-none text-charcoal ${language === 'vietnamese' && 'font-bold'}`}>VN</div>
      </div>
    </div>
  )
}