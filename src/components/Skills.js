import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiDatabase, 
  FiCloud, 
  FiServer,
  FiLayers
} from 'react-icons/fi';

const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
`;

// Grid tech de fundo
const TechGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 80px 80px;
  animation: gridFloat 25s linear infinite;
  z-index: 1;
  pointer-events: none;

  @keyframes gridFloat {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    100% {
      transform: translate(80px, 80px) rotate(0.5deg);
    }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00d4ff, #ff6b6b, #ff00ff, #00d4ff);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: titleGlow 4s ease-in-out infinite;
  text-shadow: 0 0 30px rgba(0, 212, 255, 0.3);

  @keyframes titleGlow {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  text-align: center;
  color: #cccccc;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 0 10px rgba(204, 204, 204, 0.2);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(motion.div)`
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(15px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent);
    transition: left 0.5s;
  }

  &:hover {
    border-color: #00d4ff;
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 212, 255, 0.2);

    &::before {
      left: 100%;
    }
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const CategoryIcon = styled.div`
  font-size: 2rem;
  color: #00d4ff;
  text-shadow: 0 0 15px rgba(0, 212, 255, 0.5);
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const SkillItem = styled(motion.div)`
  background: linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(255, 107, 107, 0.1), rgba(255, 0, 255, 0.1));
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 25px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.3s;
  }

  &:hover {
    background: linear-gradient(45deg, rgba(0, 212, 255, 0.2), rgba(255, 107, 107, 0.2), rgba(255, 0, 255, 0.2));
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);

    &::before {
      left: 100%;
    }
  }
`;

const ProgressSection = styled.div`
  margin-top: 4rem;
`;

const ProgressTitle = styled(motion.h3)`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: white;
  margin-bottom: 3rem;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
`;

const ProgressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProgressCard = styled(motion.div)`
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 15px;
  padding: 1.5rem;
  backdrop-filter: blur(15px);
  transition: all 0.3s ease;

  &:hover {
    border-color: #00d4ff;
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
  }
`;

const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProgressName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
`;

const ProgressPercentage = styled.span`
  font-size: 0.9rem;
  color: #00d4ff;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(45deg, #00d4ff, #ff6b6b, #ff00ff);
  background-size: 200% 200%;
  border-radius: 4px;
  animation: progressGlow 3s ease-in-out infinite;

  @keyframes progressGlow {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
`;

const skillCategories = [
  {
    title: "Backend",
    icon: <FiServer />,
    skills: ["Node.js", "TypeScript", "Express", "REST", "GraphQL", "Microserviços","NestJS"]
  },
  {
    title: "Database",
    icon: <FiDatabase />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", , "Prisma", "DynamoDB"]
  },
  {
    title: "Cloud & DevOps",
    icon: <FiCloud />,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "GitHub Actions", "Azure"]
  },
  {
    title: "Tools & Others",
    icon: <FiLayers />,
    skills: [ "Postman", "Jest", "Cypress", "Webpack","SOLID","CleanCode","DDD","Swagger"]
  }
];

const progressData = [
  { name: "Node.js/TypeScript", percentage: 95 },
  { name: "MongoDB/PostgreSQL", percentage: 90 },
  { name: "REST APIs/GraphQL", percentage: 92 },
  { name: "NestJS", percentage: 90 },
  { name: "AWS/Docker", percentage: 88 },
];

function Skills() {
  return (
    <SkillsSection id="habilidades">
      <TechGrid />
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Habilidades
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Tecnologias e ferramentas que utilizo no desenvolvimento
        </SectionSubtitle>

        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <CategoryHeader>
                <CategoryIcon>{category.icon}</CategoryIcon>
                <CategoryTitle>{category.title}</CategoryTitle>
              </CategoryHeader>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>

        <ProgressSection>
          <ProgressTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Nível de Proficiência
          </ProgressTitle>

          <ProgressGrid>
            {progressData.map((item, index) => (
              <ProgressCard
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <ProgressHeader>
                  <ProgressName>{item.name}</ProgressName>
                  <ProgressPercentage>{item.percentage}%</ProgressPercentage>
                </ProgressHeader>
                <ProgressBar>
                  <ProgressFill
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </ProgressBar>
              </ProgressCard>
            ))}
          </ProgressGrid>
        </ProgressSection>
      </Container>
    </SkillsSection>
  );
}

export default Skills; 