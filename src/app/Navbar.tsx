"use client";

import Image from "next/image";
import LanguageSlider from "./LanguageSlider";
import { useLanguage } from "./LanguageProvider";

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  console.log(language);

  return (
    <div className='flex flex-row p-8 items-center'>
      <div className='relative w-[100px] h-[100px]'>
        <a>
          <Image 
            src={'/vpcLogo.png'}
            alt='VPC Logo'
            fill
            className='object-contain'
          />
        </a>
      </div>
      <div className='ml-auto'>
        <ul className='flex flex-row gap-10 text-white text-3xl items-center'>
          <li>
            <a>{language === 'english' ? 'About' : 'Giới thiệu'}</a>
          </li>
          <li>
            <a>{language === 'english' ? 'News' : 'Tin tức'}</a>
          </li>
          <li>
            <a>{language === 'english' ? 'Support' : 'Quyên tặng'}</a>
          </li>
          <li>
            <a>{language === 'english' ? 'Culture' : 'Văn hoá'}</a>
          </li>
          <li>
            <a>{language === 'english' ? 'Contact' : 'Liên hệ'}</a>
          </li>
          <li>
            <LanguageSlider />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;