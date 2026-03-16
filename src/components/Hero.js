import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useLanguage } from './ui/language-provider';

const Hero = () => {
  const { content } = useLanguage();
  const { hero } = content;

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-background overflow-hidden border-b border-border/40">
      {/* Background with Gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background transition-colors duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(0,0,0,0))]"></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-3xl mx-auto space-y-6 relative z-10">
        <div className="flex justify-center">
          <Avatar className="h-40 w-40 border-4 border-muted">
            <AvatarImage src="/myphoto.jpg" alt="Wilner Bruno" className="object-cover" />
            <AvatarFallback className="text-4xl">WB</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground lg:text-7xl">
          Wilner Bruno Arcanjo
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          {hero.role}
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FiGithub className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://www.linkedin.com/in/wilner-bruno-arcanjo-660b60106/" target="_blank" rel="noopener noreferrer">
              <FiLinkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:example@example.com">
              <FiMail className="mr-2 h-4 w-4" /> {hero.email}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
