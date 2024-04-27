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
            <a href='https://www.gofundme.com/f/support-vpc' className='rounded-full bg-mint text-charcoal py-3 px-6 hover:brightness-75'>{language === 'english' ? 'Donate' : 'Quyên tặng'}</a>
          </li>
          <li>
            <a href='/about'>{language === 'english' ? 'About' : 'Giới thiệu'}</a>
          </li>
          <li>
            <a href='/news'>{language === 'english' ? 'News' : 'Tin tức'}</a>
          </li>
          <li>
            <a href='/support'>{language === 'english' ? 'Support' : 'Ủng hộ'}</a>
          </li>
          <li>
            <a href='/about'>{language === 'english' ? 'Contact' : 'Liên hệ'}</a>
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