import React, { createContext, useContext, useState, useMemo } from 'react';
import { LANG } from '../data/languages';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("ja");
    
    const t = useMemo(() => LANG[lang], [lang]);
    
    const toggleLanguage = () => {
        setLang(prev => prev === "ja" ? "en" : "ja");
    };

    const value = {
        lang,
        setLang,
        t,
        toggleLanguage
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
