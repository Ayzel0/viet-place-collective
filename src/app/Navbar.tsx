"use client";

import Image from "next/image";
import LanguageSlider from "./LanguageSlider";
import { useLanguage } from "./LanguageProvider";
import useWindowDimensions from "@/util/useWindowDimensions";
import { useState, useEffect, useRef } from 'react';
import HamburgerMenu from '../../public/icons/hamburger.svg';

const Navbar = () => {
  const { height, width } = useWindowDimensions();
  const { language, setLanguage } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = () => {
    setShowMenu(true);
    setTimeout(() => setMenuVisible(true), 25);
  }

  const handleCloseMenu = () => {
    setMenuVisible(false);
    setTimeout(() => setShowMenu(false), 300);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleCloseMenu();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if (!isMounted) {
    return (
      <div className='p-8'>
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
      </div>
    );
  }

  return (
    <>
      {!!width && width > 1400 ? 
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
              <li>
                <a href='https://givebutter.com/O8i9zl' className='text-black rounded-full bg-mint hover:brightness-75 px-5 py-2'>{language === 'english' ? 'Donate' : 'Ủng hộ'}</a>
              </li>
              <li>
                <LanguageSlider />
              </li>
              <li>
                <a href='https://www.facebook.com/avietplace' target='_blank'>
                  <Image 
                    src={'/icons/facebook.svg'}
                    alt='facebook icon'
                    width={50}
                    height={50}
                  />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/avietplace' target='_blank'>
                  <Image 
                    src={'/icons/instagram.svg'}
                    alt='instagram icon'
                    width={50}
                    height={50}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        :
        <div className='relative'>
          <div className='flex flex-row items-center relative mt-2'>
            <a className='ml-2 mr-auto h-[50px] flex flex-row items-center relative w-[50px] h-[50px]' href='/'>
              <Image 
                src={'/vpcLogo.png'}
                alt='VPC Logo'
                fill
                className='object-contain'
              />
            </a>
            <LanguageSlider />
            <Image 
              src={HamburgerMenu}
              alt={'hamburger menu'} 
              className='w-[25px] h-[25px] ml-4 mr-4 cursor-pointer'
              onClick={handleMenuClick}
            />
          </div>
          {showMenu &&
            <div className={`fixed top-0 bottom-0 left-0 right-0 z-[500] ${menuVisible && 'bg-slate-800 bg-opacity-50'}`}>
              <div className={`absolute top-0 h-[100vh] right-0 bg-dark-jade w-[175px] transition ease-in-out duration-300 ${menuVisible ? 'translate-x-0' : 'translate-x-full'}`} ref={menuRef}>
                <ul className='flex flex-col ml-5 gap-5 text-white mt-5'>  
                  <li>
                    <a href='https://givebutter.com/O8i9zl' className='text-black rounded-full bg-mint hover:brightness-75 px-5 py-2'>{language === 'english' ? 'Donate' : 'Ủng hộ'}</a>
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
                  <li className='flex flex-row justify-center mr-5 gap-5'>
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
                  </li>
                </ul>
              </div>
            </div>
          }
        </div>
      }
    </>
  )
}

export default Navbar;