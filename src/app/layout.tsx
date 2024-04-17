import "./globals.css";
import { LanguageProvider } from "./LanguageProvider";
import Navbar from "./Navbar";
import { cookies } from "next/headers";
import { epilogue } from "./Fonts";

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
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}