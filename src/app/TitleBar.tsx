"use client";

import { useLanguage } from "./LanguageProvider";
import { fraunces } from "./fonts";

const TitleBar = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <p className={`text-tan text-2xl py-4 px-5 my-5 mx-12 text-center bg-medium-jade rounded-md lg:rounded-full bg-opacity-50 ${fraunces.className}`}>{language === 'english' ? 'Building power across generations to uplift + uphold the Vietnamese community’s legacy in the DMV.' : 'Tạo dựng sức mạnh cho các thế hệ cộng đồng Việt nhằm nâng đỡ và duy trì di sản cộng đồng trong khu vực DMV.'}</p>
  )
}

export default TitleBar;