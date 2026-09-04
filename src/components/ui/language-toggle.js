import React from "react";
import { useLanguage } from "./language-provider";
import { Button } from "./button";

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "pt" : "en")}
            className="ml-2 h-9 px-3 font-semibold tracking-wide"
            title={language === "en" ? "Mudar para Português" : "Switch to English"}
        >
            {language === "en" ? "PT" : "EN"}
            <span className="sr-only">Toggle language</span>
        </Button>
    );
}
