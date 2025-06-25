import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode, FiGlobe } from 'react-icons/fi';

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 3rem 0.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00d4ff, #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  text-align: center;
  color: #cccccc;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  background: ${props => props.active ? 'linear-gradient(45deg, #00d4ff, #ff6b6b)' : 'rgba(255, 255, 255, 0.05)'};
  border: 1px solid ${props => props.active ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  overflow: hidden;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  width: 100%;
  max-width: 100%;

  &:hover {
    border-color: #00d4ff;
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 107, 107, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #00d4ff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(0, 212, 255, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1rem;
  opacity: 0.8;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(255, 107, 107, 0.1));
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 15px;
  padding: 0.3rem 0.8rem;
  font-size: 0.8rem;
  color: #00d4ff;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(45deg, #00d4ff, #ff6b6b);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.75rem;
    gap: 0.3rem;
  }
`;

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com sistema de pagamentos, gestão de produtos e painel administrativo.",
    image: <FiGlobe />,
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/wilner2/ecommerce"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com drag & drop, notificações e colaboração em tempo real.",
    image: <FiCode />,
    category: "web",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    liveUrl: "https://task-app-demo.com",
    githubUrl: "https://github.com/wilner2/task-app"
  },
  {
    id: 3,
    title: "API Gateway Service",
    description: "Serviço de gateway de API com autenticação, rate limiting e monitoramento de performance.",
    image: <FiCode />,
    category: "api",
    technologies: ["Node.js", "Express", "Redis", "JWT"],
    liveUrl: "https://api-gateway-demo.com",
    githubUrl: "https://github.com/wilner2/api-gateway"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Site portfólio moderno e responsivo com animações e design interativo.",
    image: <FiGlobe />,
    category: "web",
    technologies: ["React", "Framer Motion", "Styled Components"],
    liveUrl: "https://portfolio-demo.com",
    githubUrl: "https://github.com/wilner2/portfolio"
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "Dashboard meteorológico com previsões em tempo real e gráficos interativos.",
    image: <FiGlobe />,
    category: "web",
    technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind"],
    liveUrl: "https://weather-demo.com",
    githubUrl: "https://github.com/wilner2/weather-app"
  },
  {
    id: 6,
    title: "User Management System",
    description: "Sistema completo de gerenciamento de usuários com autenticação e autorização.",
    image: <FiCode />,
    category: "api",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
    liveUrl: "https://user-management-demo.com",
    githubUrl: "https://github.com/wilner2/user-management"
  }
];

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'web', name: 'Web Apps' },
  { id: 'api', name: 'APIs' }
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <ProjectsSection id="projetos">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projetos Destacados
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Alguns dos meus trabalhos mais recentes e relevantes
        </SectionSubtitle>

        <FilterButtons>
          {categories.map((category, index) => (
            <FilterButton
              key={category.id}
              active={activeFilter === category.id}
              onClick={() => handleFilter(category.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </FilterButton>
          ))}
        </FilterButtons>

        <ProjectsGrid>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <ProjectImage>
                  {project.image}
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTech>
                    {project.technologies.map((tech, techIndex) => (
                      <TechTag key={techIndex}>{tech}</TechTag>
                    ))}
                  </ProjectTech>
                  <ProjectLinks>
                    <ProjectLink
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink />
                      Demo
                    </ProjectLink>
                    <ProjectLink
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub />
                      Código
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
}

export default Projects; 