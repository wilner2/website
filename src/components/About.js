import React from 'react';
import { useLanguage } from './ui/language-provider';

const About = () => {
  const { content } = useLanguage();
  const { about } = content;

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/20 border-y border-border/50 relative overflow-hidden transition-colors duration-300">
      {/* Subtle texture for About */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
              {about.title}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {about.description}
            </p>
          </div>
          <div className="mx-auto max-w-3xl py-12">
            <div className="flex flex-col justify-center space-y-4 text-center text-muted-foreground">
              <p>
                {about.p1}
              </p>
              <p>
                {about.p2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
