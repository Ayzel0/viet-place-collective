'use client';

import useWindowDimensions from "@/util/useWindowDimensions";
import { useLanguage } from "./LanguageProvider";
import Image from "next/image";

const BottomBar = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <section className='bg-medium-jade h-[75vh] lg:h-[40vh] xl:h-[30vh] flex flex-col lg:flex-row items-center justify-center relative'>
      <div className='flex flex-col'>
        <h1 className='text-mint lg:ml-10 text-2xl font-semibold'>Site Navigation</h1>
        <div className='h-1 bg-mint lg:ml-10 my-2'/>
        <ul className={`mt-5 grid gap-4 lg:gap-y-8 text-left text-white text-xl items-center lg:ml-10 grid-cols-1 text-center lg:text-left lg:grid-cols-3 lg:gap-x-8`}>
          <li>
            <a href='https://givebutter.com/O8i9zl'>{language === 'english' ? 'Donate' : 'Ủng hộ'}</a>
          </li>
          <li>
            <a href='/about'>{language === 'english' ? 'About VPC' : 'Giới thiệu'}</a>
          </li>
          <li>
            <a href='/media'>{language === 'english' ? 'Media' : 'Tin tức'}</a>
          </li>
          <li>
            <a href='/get_involved'>{language === 'english' ? 'Get Involved' : 'Đóng Góp'}</a>
          </li>
          <li>
            <a href='/contact'>{language === 'english' ? 'Contact' : 'Liên hệ'}</a>
          </li>
          <li className='flex justify-center lg:justify-start'>
            <div className='flex gap-2'>
              <a href='https://www.facebook.com/avietplace' target='_blank'>
                <Image 
                  src={'/icons/facebook.svg'}
                  alt='facebook icon'
                  width={30}
                  height={30}
                />
              </a>
              <a href='https://www.instagram.com/avietplace' target='_blank'>
                <Image 
                  src={'/icons/instagram.svg'}
                  alt='instagram icon'
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </li>
        </ul>
      </div>
      <Image 
        src={'/vpcLogo.png'}
        alt="logo"
        width={75}
        height={75}
        className='lg:absolute mt-5 lg:mt-0'
      />
      <div className='lg:ml-auto lg:mr-10 flex justify-center items-center lg:w-[30vw] mx-[5%]'>
        <p className='text-white text-xl text-center lg:text-right mt-10 lg:mt-0'>Viet Place Collective builds power across generations to uplift and uphold the Vietnamese community&apos;s legacy in the DMV.</p>
      </div>
    </section>
  )
}

export default BottomBar;