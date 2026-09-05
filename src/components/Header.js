import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { Button } from './ui/button';
import { ThemeToggle } from './ui/theme-toggle';
import { LanguageToggle } from './ui/language-toggle';
import { useLanguage } from './ui/language-provider';

const NAV_ITEMS = [
  { href: '/#about', key: 'about' },
  { href: '/#experience', key: 'experience' },
  { href: '/#education', key: 'education' },
  { href: '/#skills', key: 'skills' },
  { href: '/#projects', key: 'projects' },
  { href: '/#articles', key: 'articles' },
  { href: '/#contact', key: 'contact' },
];

const Header = () => {
  const { content } = useLanguage();
  const { header } = content;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border/40 transition-colors duration-300">
      <div className="container relative flex h-14 items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Brand */}
        <Link to="/" className="flex items-center font-bold text-foreground tracking-tight">
          WB
        </Link>

        {/* Centered Navigation (desktop) */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-1">
          {NAV_ITEMS.map((item) => (
            <Button key={item.key} variant="ghost" asChild>
              <Link to={item.href}>{header[item.key]}</Link>
            </Button>
          ))}
        </nav>

        {/* Right side: Mobile menu toggle, Theme & Language */}
        <div className="flex justify-end items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={mobileOpen ? header.closeMenu : header.openMenu}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-border/40 bg-background px-4 py-3 flex flex-col">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-base text-foreground border-b border-border/20 last:border-b-0"
            >
              {header[item.key]}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
