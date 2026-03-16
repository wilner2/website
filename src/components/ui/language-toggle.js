import React from "react";
import { useLanguage } from "./language-provider";
import { Button } from "./button";

const BrazilFlag = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72 50"
        className={className}
    >
        <rect width="72" height="50" fill="#009c3b" rx="2" ry="2" />
        <path fill="#ffdf00" d="M36,6L66,25L36,44L6,25Z" />
        <circle cx="36" cy="25" r="12" fill="#002776" />
    </svg>
);

const USAFlag = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72 50"
        className={className}
    >
        <rect width="72" height="50" fill="#fff" rx="2" ry="2" />
        <path fill="#b22234" d="M0,0H72V5H0V0ZM0,10H72V15H0V10ZM0,20H72V25H0V20ZM0,30H72V35H0V30ZM0,40H72V45H0V40Z" />
        <rect width="32" height="25" fill="#3c3b6e" rx="1" ry="1" />
        <circle cx="6" cy="6" r="1.5" fill="#fff" />
        <circle cx="16" cy="6" r="1.5" fill="#fff" />
        <circle cx="26" cy="6" r="1.5" fill="#fff" />
        <circle cx="11" cy="12" r="1.5" fill="#fff" />
        <circle cx="21" cy="12" r="1.5" fill="#fff" />
        <circle cx="6" cy="18" r="1.5" fill="#fff" />
        <circle cx="16" cy="18" r="1.5" fill="#fff" />
        <circle cx="26" cy="18" r="1.5" fill="#fff" />
    </svg>
);

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setLanguage(language === "en" ? "pt" : "en")}
            className="ml-2 h-9 w-9 rounded-full overflow-hidden border border-border/50 hover:bg-transparent"
            title={language === "en" ? "Mudar para Português" : "Switch to English"}
        >
            {language === "en" ? (
                <BrazilFlag className="h-full w-full object-cover scale-150" />
            ) : (
                <USAFlag className="h-full w-full object-cover scale-150" />
            )}
            <span className="sr-only">Toggle language</span>
        </Button>
    );
}
