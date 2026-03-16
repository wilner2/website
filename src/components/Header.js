import React from 'react';
import { Button } from './ui/button';
import { ThemeToggle } from './ui/theme-toggle';
import { LanguageToggle } from './ui/language-toggle';
import { useLanguage } from './ui/language-provider';

const Header = () => {
  const { content } = useLanguage();
  const { header } = content;

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border/40 transition-colors duration-300">
      <div className="container relative flex h-14 items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Spacer/Logo Area */}
        <div className="flex items-center">
          {/* Logo or Mobile Menu Icon could go here */}
        </div>

        {/* Centered Navigation */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-1">
          <Button variant="ghost" asChild><a href="#about">{header.about}</a></Button>
          <Button variant="ghost" asChild><a href="#experience">{header.experience}</a></Button>
          <Button variant="ghost" asChild><a href="#education">{header.education}</a></Button>
          <Button variant="ghost" asChild><a href="#contact">{header.contact}</a></Button>
        </nav>

        {/* Right side: Theme Toggle & Language Toggle */}
        <div className="flex justify-end items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
