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
  const [isScrolled, setIsScrolled] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

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
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      // logo
      <div className='px-10 py-8'>
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
    <> {/* nav bar desktop view */}
      {!!width && width > 1200 ? 
        <div 
          className={`relative z-50 
            bg-gradient-to-b from-dark-jade to-transparent 
            flex flex-row px-10 py-8 items-center 
            sticky top-0 transition-transform duration-300 ${isScrolled && '-translate-y-[100%]'}`}
          ref={navbarRef}
        >
          {/* logo */}
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

          {/* links */}
          <div className='ml-auto'>
            <ul className='flex flex-row gap-10 text-tan text-2xl items-center'>
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
                <a href='https://givebutter.com/avietplace' className='px-5 py-2.5 rounded-lg bg-mint text-dark-jade hover:bg-pale-yellow transition-all'>{language === 'english' ? 'Donate' : 'Ủng hộ'}</a>
              </li>
              {/* <li>
                <LanguageSlider />
              </li> */}
              <li>
                <a href='https://www.facebook.com/avietplace' target='_blank'>
                  <Image 
                    src={'/icons/facebook.svg'}
                    alt='facebook icon'
                    width={30}
                    height={30}
                  />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/avietplace' target='_blank'>
                  <Image 
                    src={'/icons/instagram.svg'}
                    alt='instagram icon'
                    width={25}
                    height={25}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        :
        <div
          className={`relative z-50 px-10 py-8
            bg-gradient-to-b from-dark-jade to-transparent 
            sticky top-0 transition-transform duration-300 ${isScrolled && '-translate-y-[100%]'}`}
        >
          {/* nav bar mobile view */}
          <div className='flex flex-row items-center relative'>
            
            <a className='ml-2 mr-auto h-[50px] flex flex-row items-center relative w-[50px] h-[50px]' href='/'>
              <Image 
                src={'/vpcLogo.png'}
                alt='VPC Logo'
                fill
                className='object-contain'
              />
            </a>
            {/* <LanguageSlider /> */}
            <Image 
              src={HamburgerMenu}
              alt={'hamburger menu'} 
              className='w-[25px] h-[25px] ml-4 mr-4 cursor-pointer'
              onClick={handleMenuClick}
            />
          </div>

          {/* nav bar mobile view upon opening hamburger menu */}
          {showMenu &&
            <div className={`fixed top-0 bottom-0 left-0 right-0 z-[500] ${menuVisible && 'bg-slate-800 bg-opacity-50'}`}>
              <div className={`absolute top-0 h-[100vh] right-0 bg-dark-jade w-[225px] transition ease-in-out duration-300 ${menuVisible ? 'translate-x-0' : 'translate-x-full'}`} ref={menuRef}>
                <ul className='flex flex-col gap-10 text-tan text-xl mt-14 items-center'>
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
                    <a href='https://givebutter.com/avietplace' className='px-5 py-2.5 rounded-lg bg-mint text-dark-jade hover:bg-pale-yellow transition-all'>{language === 'english' ? 'Donate' : 'Ủng hộ'}</a>
                  </li>
                  <li className='flex flex-row justify-center gap-10'>
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