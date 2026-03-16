import React from 'react';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { useLanguage } from './ui/language-provider';

const Experience = () => {
  const { content } = useLanguage();
  const { experience } = content;
  const experiences = experience.list;

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-muted/20 dark:bg-background relative overflow-hidden transition-colors duration-300">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/5 opacity-20 blur-[100px]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
          {experience.title}
        </h2>
        <div className="relative">
          {/* Central Line with Gradient */}
          <div className="absolute w-0.5 h-full bg-gradient-to-b from-primary/80 via-muted to-transparent left-1/2 transform -translate-x-1/2 hidden md:block rounded-full"></div>

          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row items-center w-full group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              <div className="w-full md:w-1/2"></div>
              <div className="w-full md:w-1/2 px-4 relative">
                {/* Dot on the line */}
                <div className={`absolute top-6 w-5 h-5 bg-background border-4 border-primary rounded-full hidden md:block transform -translate-y-1/2 z-20 shadow-md group-hover:scale-125 transition-transform duration-300
                  ${index % 2 === 0 ? '-left-[10px]' : '-right-[11px]'}`}
                ></div>

                <div className="bg-card border border-border/50 text-card-foreground p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group-hover:border-primary/20">
                  {/* Subtle decorative blob inside card */}
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="flex items-center mb-2 relative z-10">
                    <FiBriefcase className="text-primary mr-2 h-5 w-5" />
                    <h3 className="text-xl font-bold">
                      {experience.role}
                    </h3>
                  </div>
                  <p className="text-muted-foreground font-medium mb-2">{experience.company}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <FiCalendar className="mr-2 h-4 w-4" />
                    <span>{experience.date}</span>
                  </div>
                  <p className="text-sm leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
