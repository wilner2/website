import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem 2rem 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1rem;
  opacity: 0.8;
`;

const FooterLink = styled.a`
  color: #00d4ff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6b6b;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: #00d4ff;
    color: #00d4ff;
    transform: translateY(-2px);
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const QuickLink = styled(motion.a)`
  color: #cccccc;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    color: #00d4ff;
    transform: translateX(5px);
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #cccccc;
  opacity: 0.7;
`;

const HeartIcon = styled.span`
  color: #ff6b6b;
  margin: 0 0.2rem;
`;

const BackToTop = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: linear-gradient(45deg, #00d4ff, #ff6b6b);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
    font-size: 1rem;
  }
`;

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/wilner2" },
    { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/wilner-bruno-arcanjo-660b60106/" },
    { icon: <FiMail />, url: "mailto:wilnerbruno@outlook.com" }
  ];

  const quickLinks = [
    { name: "Início", href: "#início" },
    { name: "Sobre", href: "#sobre" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" }
  ];

  return (
    <>
      <FooterContainer>
        <Container>
          <FooterContent>
            <FooterSection>
              <FooterTitle>Wilner Bruno</FooterTitle>
              <FooterText>
                Desenvolvedor Back-end apaixonado por criar soluções robustas 
                para empresas inovadoras.
              </FooterText>
              <SocialLinks>
                {socialLinks.map((social, index) => (
                  <SocialLink
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </SocialLink>
                ))}
              </SocialLinks>
            </FooterSection>

            <FooterSection>
              <FooterTitle>Links Rápidos</FooterTitle>
              <QuickLinks>
                {quickLinks.map((link, index) => (
                  <QuickLink
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </QuickLink>
                ))}
              </QuickLinks>
            </FooterSection>

            <FooterSection>
              <FooterTitle>Contato</FooterTitle>
              <FooterText>
                Email: <FooterLink href="mailto:wilnerbruno@outlook.com">wilnerbruno@outlook.com</FooterLink>
              </FooterText>
              <FooterText>
                Telefone: <FooterLink href="tel:+5511999999999">+55 (31) 99810-7159</FooterLink>
              </FooterText>
              <FooterText>
                Localização: Belo Horizonte, Brasil
              </FooterText>
            </FooterSection>

            <FooterSection>
              <FooterTitle>Serviços</FooterTitle>
              <FooterText>
                • Desenvolvimento Back-end
              </FooterText>
              <FooterText>
                • APIs RESTful e GraphQL
              </FooterText>
              <FooterText>
                • Consultoria em Tecnologia
              </FooterText>
              <FooterText>
                • Manutenção e Suporte
              </FooterText>
            </FooterSection>
          </FooterContent>

          <BottomBar>
            <Copyright>
              © 2024 Wilner Bruno. Todos os direitos reservados. 
              Feito com <HeartIcon><FiHeart /></HeartIcon> em React.
            </Copyright>
          </BottomBar>
        </Container>
      </FooterContainer>

      <BackToTop
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        ↑
      </BackToTop>
    </>
  );
}

export default Footer; 