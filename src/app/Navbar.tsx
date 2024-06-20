"use client";

import Image from "next/image";
import LanguageSlider from "./LanguageSlider";
import { useLanguage } from "./LanguageProvider";

const Navbar = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className='flex flex-row p-8 items-center'>
      <div className='relative w-[100px] h-[100px]'>
        <a href='/'>
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
            <a href='/support' className='text-black rounded-full bg-mint hover:brightness-75 px-5 py-2'>{language === 'english' ? 'Support' : 'Ủng hộ'}</a>
          </li>
          <li>
            <a href='/about'>{language === 'english' ? 'About VPC' : 'Giới thiệu'}</a>
          </li>
          <li>
            <a href='/media'>{language === 'english' ? 'Media' : 'Tin tức'}</a>
          </li>
          <li>
            <a href='/get_involved'>{language === 'english' ? 'Get Involved' : 'Tin tức'}</a>
          </li>
          <li>
            <a href='/contact'>{language === 'english' ? 'Contact' : 'Liên hệ'}</a>
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