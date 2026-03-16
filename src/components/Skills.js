import React, { useState, useRef } from 'react';
import { FiDatabase, FiCloud, FiServer, FiCpu } from 'react-icons/fi';
import { cn } from '../lib/utils';
import { useLanguage } from './ui/language-provider';

// Simple Badge component
const SkillBadge = ({ children, className }) => (
  <span className={cn(
    "inline-flex items-center rounded-md border border-border bg-secondary px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-secondary-foreground hover:bg-secondary/80",
    className
  )}>
    {children}
  </span>
);



const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(var(--foreground), 0.05), transparent 40%)`,
        }}
        aria-hidden="true"
      />
      <div className="relative h-full z-20">{children}</div>
    </div>
  );
};

const Skills = () => {
  const { content } = useLanguage();
  const { skills } = content;

  // Re-construct the skills array using the translated content
  const skillsData = [
    {
      category: skills.categories.backend,
      icon: <FiServer className="h-6 w-6" />,
      description: skills.categories.backendDesc,
      items: ['Node.js', 'NestJS', 'TypeScript', 'PHP', 'Python', 'REST', 'GraphQL'],
    },
    {
      category: skills.categories.cloud,
      icon: <FiCloud className="h-6 w-6" />,
      description: skills.categories.cloudDesc,
      items: ['AWS (Certified)', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD Pipelines'],
    },
    {
      category: skills.categories.arch,
      icon: <FiCpu className="h-6 w-6" />,
      description: skills.categories.archDesc,
      items: ['SOLID', 'Clean Architecture', 'DDD', 'TDD', 'Jest', 'Microservices'],
    },
    {
      category: skills.categories.frontend,
      icon: <FiDatabase className="h-6 w-6" />,
      description: skills.categories.frontendDesc,
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'React', 'React Native', 'Flutter'],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-background relative overflow-hidden border-t border-border/40 transition-colors duration-300">
      {/* Background Decorative Element - Masked Grid with distinct style */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="absolute h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
            <FiCpu className="mr-2 h-4 w-4" />
            {skills.title}
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
            {skills.mainTitle}
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillsData.map((skill, index) => (
            <SpotlightCard key={index} className="h-full group">
              <div className="p-8 flex flex-col h-full bg-card/50 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-secondary/50 rounded-lg border border-border/50 group-hover:border-primary/20 transition-colors">
                    <span className="text-primary">{skill.icon}</span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">0{index + 1}</span>
                </div>

                <h3 className="text-2xl font-bold mb-2 tracking-tight group-hover:text-primary transition-colors">{skill.category}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {skill.description}
                </p>

                <div className="border-t border-border pt-6 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <SkillBadge key={itemIndex} className="bg-secondary/50 hover:bg-secondary">
                        {item}
                      </SkillBadge>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
