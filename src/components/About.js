import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCode, FiTrendingUp, FiUsers, FiAward } from 'react-icons/fi';

const AboutSection = styled.section`
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #cccccc;
  margin-bottom: 2rem;
  opacity: 0.9;
  text-shadow: 0 0 5px rgba(204, 204, 204, 0.1);
`;

const HighlightText = styled.span`
  color: #00d4ff;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  grid-column: 1 / -1;
`;

const StatCard = styled(motion.div)`
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  backdrop-filter: blur(10px);
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
    transform: translateY(-5px);
    border-color: #00d4ff;
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);

    &::before {
      left: 100%;
    }
  }
`;

const StatIcon = styled.div`
  font-size: 2rem;
  color: #00d4ff;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
`;

const StatNumber = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const StatLabel = styled.p`
  font-size: 0.9rem;
  color: #cccccc;
  opacity: 0.8;
`;

const VisualContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    order: 1;
  }
`;

const ProfileCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 107, 107, 0.1), rgba(255, 0, 255, 0.1));
  border: 2px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(15px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 212, 255, 0.1);

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

  &:hover {
    border-color: #00d4ff;
    box-shadow: 0 15px 50px rgba(0, 212, 255, 0.2);
  }
`;

const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(45deg, #00d4ff, #ff6b6b, #ff00ff);
  background-size: 200% 200%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  font-weight: 700;
  animation: profileGlow 3s ease-in-out infinite;
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.3);

  @keyframes profileGlow {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
`;

const ProfileName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const ProfileRole = styled.p`
  font-size: 1rem;
  color: #00d4ff;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
`;

const ProfileDescription = styled.p`
  font-size: 0.9rem;
  color: #cccccc;
  line-height: 1.6;
  opacity: 0.8;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 6px;
  height: 6px;
  background: #00d4ff;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
`;

function About() {
  const stats = [
    { icon: <FiCode />, number: "5+", label: "Anos de Experiência" },
    { icon: <FiTrendingUp />, number: "50+", label: "Projetos Concluídos" },
    { icon: <FiUsers />, number: "20+", label: "Clientes Satisfeitos" },
    { icon: <FiAward />, number: "15+", label: "Certificações" }
  ];

  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 4 + Math.random() * 3
  }));

  return (
    <AboutSection id="sobre">
      <TechGrid />
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Sobre Mim
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Conheça um pouco mais sobre minha jornada e experiência
        </SectionSubtitle>

        <ContentGrid>
          <TextContent>
            <AboutText
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Sou um <HighlightText>desenvolvedor Back-end apaixonado</HighlightText> por criar soluções digitais eficientes e escaláveis. Com mais de 5 anos de experiência em desenvolvimento web, 
              tenho atuado em projetos que vão desde monolitos modulares até arquiteturas distribuídas com microsserviços, sempre buscando alto desempenho, segurança e manutenibilidade.
            </AboutText>

            <AboutText
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
           >

              Minha principal stack envolve<HighlightText> Node.js e TypeScript</HighlightText>, com forte atuação em integrações entre sistemas, <HighlightText>mensageria, APIs REST, filas e arquitetura orientada a eventos.</HighlightText> 
              Também tenho experiência com <HighlightText> bancos de dados relacionais e NoSQL, além de infraestrutura em nuvem</HighlightText>, principalmente com <HighlightText>AWS</HighlightText>.

            </AboutText>

            <AboutText
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
           >


              Gosto de pensar além do código: me interesso por <HighlightText>arquitetura de software, padrões de projeto, boas práticas de engenharia</HighlightText> e tudo que contribui para a entrega de sistemas robustos e preparados para crescer. 
              Acredito na importância de aprender continuamente e evoluir junto com as<HighlightText> necessidades do negócio</HighlightText> .
            </AboutText>
          </TextContent>

          <VisualContent>
            <FloatingElements>
              {floatingElements.map((element) => (
                <FloatingElement
                  key={element.id}
                  style={{
                    left: `${element.x}%`,
                    top: `${element.y}%`
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{
                    duration: element.duration,
                    delay: element.delay,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </FloatingElements>

            <ProfileCard
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <ProfileImage>WA</ProfileImage>
              <ProfileName>Wilner Bruno</ProfileName>
              <ProfileRole>Back-end Developer</ProfileRole>
              <ProfileDescription>
                Desenvolvimento Back-end moderno, 
                focado em criar soluções escaláveis 
                para empresas inovadoras.

                Além do desenvolvimento, sou um <HighlightText>entusiasta de arquitetura de sistemas </HighlightText> 
                e sempre busco aprender e me atualizar com as últimas tendências do mercado. 
                Acredito que a inovação constante é a chave para o sucesso.
              </ProfileDescription>
            </ProfileCard>
          </VisualContent>
        </ContentGrid>

        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <StatIcon>{stat.icon}</StatIcon>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </Container>
    </AboutSection>
  );
}

export default About; 