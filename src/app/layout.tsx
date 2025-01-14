import "./globals.css";
import { LanguageProvider } from "./LanguageProvider";
import Navbar from "./Navbar";
import { cookies } from "next/headers";
import { epilogue } from "./fonts";
import BottomBar from "./BottomBar";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Viet Place Collective',
  description: 'Website for Viet Place Collective, a volunteer organization advocating for the preservation of Eden Center in Northern Virginia.',
  icons: {
    icon: '/favicon.svg'
  },
}

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

  const initialLanguage: string = getInitialLanguage();

  return (
    <html lang="en" className={`bg-dark-jade ${epilogue.className}`}>
      <body>
        <LanguageProvider initialLanguage={initialLanguage}>
          <div className='flex flex-col min-h-screen'>
            <Navbar />
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