import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0 2rem;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%);
  z-index: 1;
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  z-index: 2;
  position: relative;
`;

const Greeting = styled(motion.h2)`
  font-size: 1.2rem;
  font-weight: 500;
  color: #00d4ff;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const Name = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00d4ff, #ff6b6b, #00d4ff);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite;
`;

const Title = styled(motion.h2)`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: #cccccc;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  opacity: 0.8;
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(45deg, #00d4ff, #ff6b6b);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  margin-bottom: 3rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: #00d4ff;
    color: #00d4ff;
    transform: translateY(-2px);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #cccccc;
  cursor: pointer;
`;

const ScrollText = styled.span`
  font-size: 0.9rem;
  opacity: 0.7;
`;

const ScrollIcon = styled(motion.div)`
  font-size: 1.5rem;
  color: #00d4ff;
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
  width: 4px;
  height: 4px;
  background: #00d4ff;
  border-radius: 50%;
  opacity: 0.6;
`;

const keyframes = `
  @keyframes gradientShift {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
`;

const StyleSheet = styled.style`
  ${keyframes}
`;

function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('sobre');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2
  }));

  return (
    <HeroSection id="início">
      <StyleSheet />
      <BackgroundGradient />
      
      <FloatingElements>
        {floatingElements.map((element) => (
          <FloatingElement
            key={element.id}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6]
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

      <Content>
        <Greeting
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Olá, eu sou
        </Greeting>

        <Name
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Wilner Bruno
        </Name>

        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Desenvolvedor Back-end
        </Title>

        <Description
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
         Sou desenvolvedor back-end com mais de 5 anos de experiência criando soluções robustas, escaláveis e focadas no negócio. Atuo com Node.js e TypeScript, desenvolvendo desde microsserviços até monolitos modulares bem organizados. Tenho experiência com integração entre sistemas, mensageria, arquitetura orientada a eventos, bancos de dados relacionais e NoSQL, além de práticas DevOps e cloud.

        </Description>

        <CTAButton
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToAbout}
        >
          Conheça meu trabalho
        </CTAButton>

        <SocialLinks
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <SocialLink
            href="https://github.com/wilner2"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiGithub />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/wilner-bruno-arcanjo-660b60106/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiLinkedin />
          </SocialLink>
          <SocialLink
            href="mailto:wilnerbruno@outlook.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiMail />
          </SocialLink>
        </SocialLinks>
      </Content>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        onClick={scrollToAbout}
      >
        <ScrollText>Role para baixo</ScrollText>
        <ScrollIcon
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown />
        </ScrollIcon>
      </ScrollIndicator>
    </HeroSection>
  );
}

export default Hero; 