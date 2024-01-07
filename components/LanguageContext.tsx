"use client";

import { useState, createContext, useContext, useEffect } from "react";

type GlobalContent = {
  language: string;
  toggleLanguage: (newLanguage: string) => void;
};

const context = createContext<GlobalContent>({
  language: "",
  toggleLanguage: (a) => {},
});


const LanguageContext = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState("EN");

  const supportLanguages = ["EN", "PT", "FR", "ES"];

  useEffect(() => {
    
    let browserLanguage: string = navigator.language.slice(0, 2).toUpperCase();

    if (supportLanguages.indexOf(browserLanguage) !== -1) {
        setLanguage(browserLanguage)
    }

  }, [])
  
  const toggleLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <context.Provider value={{ language, toggleLanguage }}>
      {children}
    </context.Provider>
  );
};

export default LanguageContext;

export const useLanguage = () => {
  const data = useContext(context);

  return {
    language: data?.language,
    toggleLanguage: data?.toggleLanguage,
  };
};
