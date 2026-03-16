import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../../lib/translations";

const LanguageContext = createContext({
    language: "en",
    setLanguage: () => null,
    t: (key) => key,
    content: translations.en
});

export function LanguageProvider({ children, defaultLanguage = "en", storageKey = "vite-ui-language", ...props }) {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem(storageKey) || defaultLanguage;
    });

    useEffect(() => {
        localStorage.setItem(storageKey, language);
    }, [language, storageKey]);

    const value = {
        language,
        setLanguage,
        t: (key) => {
            // Helper to access nested keys like "hero.role"
            // Not strictly necessary if we expose the full content object, but good for simple lookups
            const keys = key.split('.');
            let result = translations[language];
            for (const k of keys) {
                if (result && result[k]) {
                    result = result[k];
                } else {
                    return key;
                }
            }
            return result;
        },
        content: translations[language]
    };

    return (
        <LanguageContext.Provider {...props} value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined)
        throw new Error("useLanguage must be used within a LanguageProvider");
    return context;
};
