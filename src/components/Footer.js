import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useLanguage } from './ui/language-provider';

const Footer = () => {
  const { content } = useLanguage();
  const { footer } = content;

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Wilner. {footer.rights}
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FiGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/wilner-bruno-arcanjo-660b60106/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FiLinkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:example@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FiMail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
