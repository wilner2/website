import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';

const ContactSection = styled.section`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const ContactCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    border-color: #00d4ff;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
  }
`;

const ContactHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: #00d4ff;
`;

const ContactTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
`;

const ContactText = styled.p`
  font-size: 1rem;
  color: #cccccc;
  line-height: 1.6;
  opacity: 0.8;
`;

const ContactLink = styled.a`
  color: #00d4ff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6b6b;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
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

const ContactForm = styled.div`
  @media (max-width: 768px) {
    order: 1;
  }
`;

const Form = styled.form`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00d4ff;
    box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.2);
  }

  &::placeholder {
    color: #cccccc;
    opacity: 0.6;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00d4ff;
    box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.2);
  }

  &::placeholder {
    color: #cccccc;
    opacity: 0.6;
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(45deg, #00d4ff, #ff6b6b);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(45deg, rgba(0, 255, 0, 0.1), rgba(0, 255, 0, 0.05));
  border: 1px solid rgba(0, 255, 0, 0.3);
  border-radius: 10px;
  padding: 1rem;
  color: #00ff00;
  text-align: center;
  margin-top: 1rem;
`;

const FooterText = styled.p`
  font-size: 1rem;
  color: #cccccc;
  margin-top: 2rem;
`;

const FooterLink = styled.a`
  color: #00d4ff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6b6b;
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email",
      text: "wilnerbruno@outlook.com",
      link: "mailto:wilnerbruno@outlook.com"
    },
    {
      icon: <FiPhone />,
      title: "Telefone",
      text: "+55 (31) 99810-7159",
      link: "tel:+5511999999999"
    },
    {
      icon: <FiMapPin />,
      title: "Localização",
      text: "Belo Horizonte, Brasil",
      link: null
    }
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/wilner2" },
    { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/wilner-bruno-arcanjo-660b60106/" },
  ];

  return (
    <ContactSection id="contato">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Entre em Contato
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Vamos trabalhar juntos! Entre em contato para discutir seu projeto
        </SectionSubtitle>

        <ContactGrid>
          <ContactInfo>
            {contactInfo.map((info, index) => (
              <ContactCard
                key={info.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <ContactHeader>
                  <ContactIcon>{info.icon}</ContactIcon>
                  <ContactTitle>{info.title}</ContactTitle>
                </ContactHeader>
                <ContactText>
                  {info.link ? (
                    <ContactLink href={info.link}>{info.text}</ContactLink>
                  ) : (
                    info.text
                  )}
                </ContactText>
              </ContactCard>
            ))}

            <ContactCard
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ContactHeader>
                <ContactIcon><FiGithub /></ContactIcon>
                <ContactTitle>Redes Sociais</ContactTitle>
              </ContactHeader>
              <ContactText>
                Siga-me nas redes sociais para acompanhar meus projetos e novidades
              </ContactText>
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
            </ContactCard>
          </ContactInfo>

          <ContactForm>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Nome</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="subject">Assunto</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto da mensagem"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Mensagem</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-me sobre seu projeto..."
                  required
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiSend />
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </SubmitButton>

              <AnimatePresence>
                {showSuccess && (
                  <SuccessMessage
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    Mensagem enviada com sucesso! Entrarei em contato em breve.
                  </SuccessMessage>
                )}
              </AnimatePresence>
            </Form>
          </ContactForm>
        </ContactGrid>

      </Container>
    </ContactSection>
  );
}

export default Contact; 