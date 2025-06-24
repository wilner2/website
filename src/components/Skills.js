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
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    border-color: #00d4ff;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
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
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const SkillItem = styled(motion.div)`
  background: linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(255, 107, 107, 0.1));
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 25px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, rgba(0, 212, 255, 0.2), rgba(255, 107, 107, 0.2));
    transform: scale(1.05);
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
`;

const ProgressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProgressCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
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
`;

const ProgressPercentage = styled.span`
  font-size: 0.9rem;
  color: #00d4ff;
  font-weight: 600;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(45deg, #00d4ff, #ff6b6b);
  border-radius: 4px;
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
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Habilidades & Tecnologias
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Tecnologias que domino e utilizo no meu dia a dia
        </SectionSubtitle>

        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
                    transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Nível de Proficiência
          </ProgressTitle>

          <ProgressGrid>
            {progressData.map((item, index) => (
              <ProgressCard
                key={item.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProgressHeader>
                  <ProgressName>{item.name}</ProgressName>
                  <ProgressPercentage>{item.percentage}%</ProgressPercentage>
                </ProgressHeader>
                <ProgressBar>
                  <ProgressFill
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
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