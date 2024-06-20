"use client";

import "./globals.css";
import { LanguageProvider } from "./LanguageProvider";
import Navbar from "./Navbar";
import { cookies } from "next/headers";
import { epilogue } from "./fonts";
import BottomBar from "./BottomBar";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const getInitialLanguage = () => {
    const language = cookies().get('language')?.value;  
    if (language === 'english' || language === 'vietnamese') {
      return language;
    }
    return 'english';
  }

  const pathname = usePathname();

  const initialLanguage: string = getInitialLanguage();

  return (
    <html lang="en" className={`bg-dark-jade ${epilogue.className}`}>
      <body>
        <LanguageProvider initialLanguage={initialLanguage}>
          <div className='flex flex-col min-h-screen'>
            <div className='bg-gradient-to-b from-dark-jade to-transparent relative z-10'>
              <Navbar />
            </div>
            {pathname === '/' &&
              <div className='fixed w-[100vw] h-[100vh] z-0 opacity-20'>
                <Image 
                  src={'/bg.jpg'}
                  alt='bg'
                  fill
                  className='object-cover'
                />
              </div>
            }
            <div className='grow'>
              {children}
            </div>
            <div className='relative z-10'>
              <BottomBar />
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}