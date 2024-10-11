'use client';

import useWindowDimensions from "@/util/useWindowDimensions";
import { useLanguage } from "./LanguageProvider";
import Image from "next/image";

const BottomBar = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <section className='px-10 py-8 bg-medium-jade flex flex-col lg:flex-row items-center justify-center relative'>

      {/* footer nav links section */}
      <div className='flex flex-col'> 
        <h2 className='text-pale-yellow text-3xl font-bold'>Navigation</h2> {/* header */}
        <div className='h-1 w-full bg-bright-yellow rounded-lg my-5' /> {/* line */}
        {/* links */}
        <ul className={`grid w-full gap-5 text-tan text-xl items-center grid-cols-1 text-center lg:text-left lg:grid-cols-3`}>
          <li>
            <a href='https://givebutter.com/avietplace'>{language === 'english' ? 'Donate' : 'Ủng hộ'}</a>
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
          {/* social media icons */}
          <li className='flex justify-center lg:justify-start'>
            <div className='flex gap-5'>
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

      {/* footer logo */}
      <Image 
        src={'/vpcLogo.png'}
        alt="logo"
        width={100}
        height={100}
        className='lg:absolute mt-10 lg:mt-0'
      />
      
      {/* footer description */}
      <div className='lg:ml-auto flex justify-center items-center lg:w-[30vw]'>
        <p className='text-tan text-lg text-center lg:text-right mt-10 lg:mt-0'>Viet Place Collective builds power across generations to uplift and uphold the Vietnamese community&apos;s legacy in the DMV.</p>
      </div>
    </section>
  )
}

export default BottomBar;