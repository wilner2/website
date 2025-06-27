import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiUser, FiBriefcase, FiCode, FiFolder, FiMail } from 'react-icons/fi';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(0, 255, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 255, 255, 0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    min-height: 50px;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    min-height: 45px;
  }
`;

const Logo = styled(motion.h1)`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #00d4ff, #ff6b6b, #ff00ff, #00d4ff);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  animation: logoGlow 4s ease-in-out infinite;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 1.3rem;
    background: linear-gradient(45deg, #00d4ff, #ff6b6b, #ff00ff, #00d4ff);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 15px rgba(0, 212, 255, 0.5);
    animation: logoGlow 4s ease-in-out infinite, codeIconPulse 2s ease-in-out infinite;
    filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.4));
    position: relative;
  }

  svg::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #00d4ff, #ff6b6b, #ff00ff);
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    animation: codeIconGlow 3s ease-in-out infinite;
  }

  @keyframes logoGlow {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes codeIconPulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  @keyframes codeIconGlow {
    0%, 100% {
      opacity: 0;
      transform: scale(1);
    }
    50% {
      opacity: 0.3;
      transform: scale(1.2);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    svg {
      font-size: 1.1rem;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    svg {
      font-size: 1rem;
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.li)`
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(255, 107, 107, 0.1), rgba(255, 0, 255, 0.1));
  background-size: 300% 300%;
  animation: navGlow 4s ease-in-out infinite;

  svg {
    font-size: 1.1rem;
    transition: all 0.3s ease;
    background: linear-gradient(45deg, #00d4ff, #ff6b6b, #ff00ff, #00d4ff);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: navGlow 4s ease-in-out infinite;
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #00d4ff, #ff6b6b, #ff00ff);
    border-radius: 10px;
    z-index: -1;
    opacity: 0;
    animation: navGlow 3s ease-in-out infinite;
  }

  &:hover {
    color: #00d4ff;
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
    transform: scale(1.05);

    svg {
      transform: scale(1.1);
      filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.6));
    }

    &::before {
      opacity: 0.3;
    }
  }

  @keyframes navGlow {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: white;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 8px;

  &:hover {
    color: #00d4ff;
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
    background: rgba(0, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 1001;
  border: 1px solid rgba(0, 255, 255, 0.2);
`;

const MobileNavLink = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 1rem 2rem;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(255, 107, 107, 0.1), rgba(255, 0, 255, 0.1));
  background-size: 300% 300%;
  animation: navGlow 4s ease-in-out infinite;

  svg {
    font-size: 1.8rem;
    transition: all 0.3s ease;
    background: linear-gradient(45deg, #00d4ff, #ff6b6b, #ff00ff, #00d4ff);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: navGlow 4s ease-in-out infinite;
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #00d4ff, #ff6b6b, #ff00ff);
    border-radius: 14px;
    z-index: -1;
    opacity: 0;
    animation: navGlow 3s ease-in-out infinite;
  }

  &:hover {
    color: #00d4ff;
    text-shadow: 0 0 15px rgba(0, 212, 255, 0.5);
    transform: scale(1.05);

    svg {
      transform: scale(1.1);
      filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.6));
    }

    &::before {
      opacity: 0.3;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 2rem;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 8px;

  &:hover {
    color: #00d4ff;
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
    background: rgba(0, 255, 255, 0.1);
  }
`;

const navItems = ['Início', 'Sobre', 'Experiência', 'Habilidades', 'Projetos', 'Contato'];

const navIcons = {
  'Início': <FiHome />,
  'Sobre': <FiUser />,
  'Experiência': <FiBriefcase />,
  'Habilidades': <FiCode />,
  'Projetos': <FiFolder />,
  'Contato': <FiMail />
};

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionName) => {
    const element = document.getElementById(sectionName.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: scrolled 
            ? 'rgba(10, 10, 10, 0.98)' 
            : 'rgba(10, 10, 10, 0.95)',
          borderBottom: scrolled 
            ? '1px solid rgba(0, 255, 255, 0.3)' 
            : '1px solid rgba(0, 255, 255, 0.2)',
          boxShadow: scrolled 
            ? '0 4px 30px rgba(0, 255, 255, 0.15)' 
            : '0 4px 20px rgba(0, 255, 255, 0.1)'
        }}
      >
        <Nav>
          <Logo
            onClick={() => scrollToSection('início')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiCode />
            {'Wilner Bruno'}
          </Logo>

          <NavLinks>
            {navItems.map((item, index) => (
              <NavLink
                key={item}
                onClick={() => scrollToSection(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {navIcons[item]}
                {item}
              </NavLink>
            ))}
          </NavLinks>

          <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
            <FiMenu />
          </MobileMenuButton>
        </Nav>
      </HeaderContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton onClick={() => setIsMobileMenuOpen(false)}>
              <FiX />
            </CloseButton>
            {navItems.map((item, index) => (
              <MobileNavLink
                key={item}
                onClick={() => scrollToSection(item)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {navIcons[item]}
                {item}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header; 