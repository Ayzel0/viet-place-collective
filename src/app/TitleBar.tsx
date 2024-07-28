"use client";

import { useLanguage } from "./LanguageProvider";
import { fraunces } from "./fonts";
import Image from "next/image";

const TitleBar = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className='relative h-[60vh] flex items-center justify-center'>
      <Image 
        src={'/bg.jpg'}
        alt='bg'
        fill
        className='object-cover'
      />
      <p className={`absolute z-10 text-tan text-6xl text-center text-shadow-md ${fraunces.className}`}>{language === 'english' ? 'Building power across generations to uplift + uphold the Vietnamese community’s legacy in the DMV.' : 'Tạo dựng sức mạnh cho các thế hệ cộng đồng Việt nhằm nâng đỡ và duy trì di sản cộng đồng trong khu vực DMV.'}</p>
    </div>
  )
}

export default TitleBar;