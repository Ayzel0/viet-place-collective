'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

const LanguageContext = createContext({
  language: 'english',
  setLanguage: (lang: string) => {}
});

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({children}: LanguageProviderProps) {
  const [language, setLanguage] = useState('english')

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext);
}