import React, { useState } from 'react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of the first project.',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    repoUrl: '#',
    category: 'Web App',
  },
  {
    title: 'Project Two',
    description: 'A brief description of the second project.',
    tags: ['Python', 'Django', 'PostgreSQL'],
    liveUrl: '#',
    repoUrl: '#',
    category: 'Web App',
  },
  {
    title: 'Project Three',
    description: 'A brief description of the third project.',
    tags: ['React Native', 'Firebase'],
    liveUrl: '#',
    repoUrl: '#',
    category: 'Mobile App',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
          Projects
        </h2>
        <div className="flex justify-center space-x-4 mb-12">
          {['All', 'Web App', 'Mobile App'].map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              onClick={() => setFilter(category)}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-card text-card-foreground border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                   <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                      {project.category}
                   </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs border px-2 py-1 rounded-full text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-secondary/20 border-t flex space-x-4">
                <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={project.liveUrl}>Live Demo</a>
                </Button>
                <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={project.repoUrl}>GitHub</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
