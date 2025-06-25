import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiUsers, FiMapPin, FiAward, FiCode } from 'react-icons/fi';

const ExperienceSection = styled.section`
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #00d4ff, #ff6b6b, #ff00ff);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const ExperienceCard = styled(motion.div)`
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  position: relative;
  transition: all 0.3s ease;
  width: calc(50% - 2rem);

  &:nth-child(odd) {
    margin-left: 0;
    margin-right: auto;

    @media (max-width: 768px) {
      width: calc(100% - 3rem);
      margin-left: 3rem;
    }
  }

  &:nth-child(even) {
    margin-left: auto;
    margin-right: 0;

    @media (max-width: 768px) {
      width: calc(100% - 3rem);
      margin-left: 3rem;
    }
  }

  &:hover {
    transform: translateY(-5px);
    border-color: #00d4ff;
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background: #00d4ff;
    border-radius: 50%;
    transform: translateY(-50%);
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);

    @media (max-width: 768px) {
      left: -40px;
    }
  }

  &:nth-child(odd)::before {
    right: -60px;

    @media (max-width: 768px) {
      right: auto;
      left: -40px;
    }
  }

  &:nth-child(even)::before {
    left: -60px;

    @media (max-width: 768px) {
      left: -40px;
    }
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const CompanyIcon = styled.div`
  font-size: 1.5rem;
  color: #00d4ff;
  margin-right: 1rem;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.25rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const JobTitle = styled.h4`
  font-size: 1.1rem;
  color: #00d4ff;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const JobDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const JobDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #cccccc;
`;

const JobDetailIcon = styled.div`
  color: #00d4ff;
  font-size: 0.9rem;
`;

const Description = styled.p`
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

const ClientsSection = styled.div`
  margin-top: 1.5rem;
`;

const ClientsTitle = styled.h5`
  font-size: 1rem;
  color: #ff6b6b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
`;

const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

const ClientCard = styled.div`
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.2);
  border-radius: 8px;
  padding: 0.75rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: #ff6b6b;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.2);
  }
`;

const ClientName = styled.p`
  color: white;
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const ClientType = styled.p`
  color: #cccccc;
  font-size: 0.8rem;
  opacity: 0.8;
`;

const Technologies = styled.div`
  margin-top: 1rem;
`;

const TechTitle = styled.h5`
  font-size: 0.9rem;
  color: #ff00ff;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: rgba(255, 0, 255, 0.1);
  border: 1px solid rgba(255, 0, 255, 0.3);
  border-radius: 15px;
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
  color: #ff00ff;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 0, 255, 0.2);
    border-color: #ff00ff;
  }
`;

function Experience() {
  const experiences = [
    {
      id: 1,
      company: "LWSA",
      position: "Desenvolvedor Back-End Sênior",
      period: "Mai 2024 - Presente",
      location: "Pelotas, RS (Remota)",
      description: "Atuo como desenvolvedor back-end com foco em performance, escalabilidade e qualidade de código, utilizando tecnologias como Node.js, NestJS, TypeScript, PHP, AWS e Jest. Sou referência técnica no time, apoiando decisões de arquitetura, revisão de código e definição de boas práticas. Além do desenvolvimento, participo da análise de requisitos e da construção de soluções alinhadas com os objetivos do negócio. Contribuo na criação de documentações técnicas e na estruturação de sistemas observáveis com DataDog, sempre com foco em eficiência e entregas de alto impacto.",
      clients: [
        { name: "Projetos Internos", type: "Sistemas Proprietários" },
      ],
      technologies: ["Node.js", "NestJS", "TypeScript", "PHP", "AWS", "Jest", "DataDog","Docker","CI/CD"]
    },
    {
      id: 2,
      company: "GFT Technologies",
      position: "Desenvolvedor Back-End Pleno",
      period: "Abr 2022 - Mar 2024",
      location: "Remota",
      description: "Trabalhei em projetos de grande porte utilizando Node.js, NestJS e plataformas de nuvem como AWS, GCP e Azure. Fui responsável pela análise de requisitos, definição de arquitetura e desenvolvimento de integrações entre sistemas, garantindo segurança, desempenho e alta disponibilidade. Atuei no monitoramento e otimização de aplicações críticas, com foco na eficiência operacional e experiência do usuário. A colaboração com times multidisciplinares era parte essencial do meu dia a dia.",
      clients: [
        { name: "Stix", type: "E-commerce" },
        { name: "Supergasbras", type: "integração com salesforce" },
        { name: "Dasa/Google", type: "Migração cloud" },
      ],
      technologies: ["Typescript", "NestJS", "AWS", "GCP", "Azure", "Bancos de Dados","Docker", "CI/CD", "Grafana"]
    },
    {
      id: 3,
      company: "Semantix",
      position: "Desenvolvedor Back-End Pleno",
      period: "Ago 2021 - Abr 2022",
      location: "Remota",
      description: "Desenvolvimento de sistemas back-end utilizando Node.js, com foco na integração de sistemas e serviços. Colaboração em projetos para garantir a comunicação eficiente e segura entre plataformas. Proposição de soluções eficazes e entrega de sistemas escaláveis e robustos.",
      clients: [
        { name: "Colgate", type: "Integrações com sistemas" },
        { name: "Samsung", type: "Integrações com sistemas" },
        { name: "Afya", type: "Integrações com sistemas" }
      ],
      technologies: ["Node.js", "AWS", "Bancos de Dados", "APIs", "Microserviços","SOAP","integração com sistemas"]
    },
    {
      id: 4,
      company: "4mti",  
      position: "Desenvolvedor FullStack Junior",
      period: "Fev 2020 - Ago 2021",
      location: "Belo Horizonte, MG",
      description: "Desenvolvimento de aplicações full-stack com Node.js (back-end) e React (front-end) em projetos com grande volume de dados. Gestão de infraestrutura na AWS, garantindo escalabilidade e disponibilidade dos sistemas.",
      clients: [
        { name: "MPMG", type: "Aplicações Full-Stack" },
        { name: "Projetos Internos", type: "Infraestrutura" },
      ],
      technologies: ["Node.js", "React", "AWS", "Bancos de Dados Relacionais", "KVM","Druid","Elasticsearch","KVM","CI/CD"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <ExperienceSection id="experience">
      <TechGrid />
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experiência Profissional
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Minha jornada profissional com carteira de trabalho e os clientes que tive o prazer de atender
        </SectionSubtitle>

        <Timeline>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                variants={cardVariants}
              >
                <CompanyHeader>
                  <CompanyIcon>
                    <FiBriefcase />
                  </CompanyIcon>
                  <CompanyInfo>
                    <CompanyName>{experience.company}</CompanyName>
                    <JobTitle>{experience.position}</JobTitle>
                  </CompanyInfo>
                </CompanyHeader>

                <JobDetails>
                  <JobDetail>
                    <JobDetailIcon>
                      <FiCalendar />
                    </JobDetailIcon>
                    {experience.period}
                  </JobDetail>
                  <JobDetail>
                    <JobDetailIcon>
                      <FiMapPin />
                    </JobDetailIcon>
                    {experience.location}
                  </JobDetail>
                </JobDetails>

                <Description>{experience.description}</Description>

                <ClientsSection>
                  <ClientsTitle>
                    <FiUsers />
                    Clientes Atendidos
                  </ClientsTitle>
                  <ClientsGrid>
                    {experience.clients.map((client, clientIndex) => (
                      <ClientCard key={clientIndex}>
                        <ClientName>{client.name}</ClientName>
                        <ClientType>{client.type}</ClientType>
                      </ClientCard>
                    ))}
                  </ClientsGrid>
                </ClientsSection>

                <Technologies>
                  <TechTitle>
                    <FiCode />
                    Tecnologias Utilizadas
                  </TechTitle>
                  <TechTags>
                    {experience.technologies.map((tech, techIndex) => (
                      <TechTag key={techIndex}>{tech}</TechTag>
                    ))}
                  </TechTags>
                </Technologies>
              </ExperienceCard>
            ))}
          </motion.div>
        </Timeline>
      </Container>
    </ExperienceSection>
  );
}

export default Experience; 