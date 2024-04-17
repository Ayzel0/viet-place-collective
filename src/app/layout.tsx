import "./globals.css";
import { LanguageProvider } from "./LanguageProvider";
import Navbar from "./Navbar";
import { Epilogue } from 'next/font/google';

const epilogue = Epilogue({ subsets: ['latin', 'vietnamese'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-dark-jade ${epilogue.className}`}>
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}