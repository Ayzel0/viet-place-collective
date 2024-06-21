'use client';

import { useLanguage } from "./LanguageProvider";
import Image from "next/image";

const BottomBar = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <section className='bg-medium-jade h-[50vh] lg:h-[20vh] flex flex-col lg:flex-row items-center justify-center'>
      <ul className='flex flex-col lg:flex-row gap-x-5 xl:gap-x-10 gap-y-4 text-white text-xl items-center lg:ml-10'>
        <li>
          <a href='/support'>{language === 'english' ? 'Support' : 'Ủng hộ'}</a>
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
      </ul>
      <Image 
        src={'/vpcLogo.png'}
        alt="logo"
        width={75}
        height={75}
        className='lg:ml-auto mt-5 lg:mt-0'
      />
      <div className='lg:ml-auto lg:mr-10 flex justify-center items-center md:w-[40vw] mx-[5%]'>
        <p className='text-white text-xl text-center lg:text-right mt-10 lg:mt-0'>Viet Place Collective builds power across generations to uplift and uphold the Vietnamese community's legacy in the DMV.</p>
      </div>
    </section>
  )
}

export default BottomBar;