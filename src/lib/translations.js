export const translations = {
    pt: {
        header: {
            about: "Sobre",
            experience: "Experiência",
            education: "Educação",
            projects: "Projetos",
            contact: "Contato",
        },
        hero: {
            role: "Software Engineer",
            tagline: "Node.js · Python · TypeScript · AWS · Kubernetes",
            email: "Email"
        },
        about: {
            title: "Sobre Mim",
            description: "Desenvolvedor Backend Sênior com 5+ anos de experiência construindo sistemas escaláveis, APIs de alta performance e arquiteturas de microsserviços em ambientes de produção de larga escala.",
            p1: "Tenho domínio em dois ecossistemas de backend: Node.js/NestJS/TypeScript e Python/FastAPI/Django, com orquestração via Kubernetes e mensageria com RabbitMQ e Celery. Sólida vivência em AWS (Certified Cloud Practitioner), integração de gateways de pagamento (Stripe) e observabilidade (Dynatrace, DataDog).",
            p2: "Aplico TDD, DDD, Clean Architecture e SOLID para entregar código sustentável com testes robustos. Histórico de resultados mensuráveis: redução de 50% em custos de infraestrutura e ganho de 60% em velocidade de processamento. Gosto de atuar em times colaborativos, atuando como referência técnica em decisões de arquitetura e revisão de código."
        },
        experience: {
            title: "Experiência",
            list: [
                {
                    role: 'Software Engineer',
                    company: 'Sem Parar',
                    date: 'Mar 2026 - Presente · Remoto',
                    description: 'Desenvolvimento de microsserviços em Python (FastAPI, Django, Celery) e Node.js/TypeScript, orquestrados via Kubernetes com mensageria assíncrona via RabbitMQ. Instrumentação de 7 microsserviços com Dynatrace, implementando métricas de negócio customizadas. Responsável pelo ciclo completo: do planejamento com o time de produto ao deploy em produção e monitoramento pós-entrega.',
                },
                {
                    role: 'Desenvolvedor Back-End Sênior',
                    company: 'LWSA',
                    date: 'Mai 2024 - Mar 2026 · Remoto',
                    description: 'Liderou a migração de um sistema legado de rastreio (monolito) para uma arquitetura de monolito modular escalável com comunicação baseada em eventos, resultando em redução de 50% nos custos de infraestrutura. Referência técnica de um time de 5 desenvolvedores em Node.js, NestJS e TypeScript. Observabilidade com DataDog: dashboards, alertas e rastreamento de performance em produção.',
                },
                {
                    role: 'Desenvolvedor Back-End Pleno',
                    company: 'Grupo GFT',
                    date: 'Abr 2022 - Mar 2024 · Remoto',
                    description: 'Projetos para clientes de grande porte como DASA (saúde) e Stix (e-commerce), desenvolvendo soluções críticas em Node.js e NestJS sobre AWS, GCP e Azure. Liderou a migração de infraestrutura de Azure para Google Cloud na DASA. Responsável por análise de requisitos, definição de arquitetura e integrações entre sistemas distribuídos com foco em alta disponibilidade e segurança. Ambiente ágil (Scrum).',
                },
                {
                    role: 'Desenvolvedor Back-End Pleno',
                    company: 'Semantix',
                    date: 'Ago 2021 - Abr 2022',
                    description: 'Desenvolveu integrações com plataformas de grande escala: VTEX (e-commerce), TOTVS (ERP), sistemas legados e gateways de pagamento, garantindo comunicação segura e eficiente entre plataformas. Implementação de soluções escaláveis em Node.js com foco em confiabilidade e baixa latência.',
                },
                {
                    role: 'Desenvolvedor FullStack Júnior',
                    company: '4mti',
                    date: 'Fev 2020 - Ago 2021 · Belo Horizonte, MG',
                    description: 'Desenvolveu o ÁDUNA, plataforma de inteligência e investigação do MPMG: sistema de grafos que cruza e visualiza relacionamentos entre pessoas, empresas, CNPJs, telefones e placas, consultando milhões de registros via Elasticsearch em tempo real. Desenvolveu o LINS, plataforma de análise de gastos públicos de Minas Gerais via Apache Druid. Frontend em React e backend em Node.js. Otimização de consultas com aumento de 60% na velocidade de processamento.',
                },
            ]
        },
        education: {
            title: "Educação & Certificações",
            subtitle: "Aprendizado contínuo e validação de competências técnicas.",
            list: [
                {
                    title: "Tecnólogo em Tecnologia da Informação",
                    organization: "Centro Universitário Una",
                    type: "Graduação",
                    typeKey: "degree",
                    description: "Formação superior em Tecnologia da Informação. Belo Horizonte, MG · 2018 - 2020."
                },
                {
                    title: "AWS Certified Cloud Practitioner",
                    organization: "Amazon Web Services (AWS)",
                    type: "Certificação",
                    typeKey: "certification",
                    description: "Validação de conhecimento geral sobre a plataforma de nuvem AWS, incluindo conceitos de segurança e conformidade."
                },
                {
                    title: "Node.js, TypeScript, TDD, DDD, Clean Architecture e SOLID",
                    organization: "Udemy · Formação Full Stack",
                    type: "Curso",
                    typeKey: "course",
                    description: "Domínio de TDD, DDD, Clean Architecture e princípios SOLID aplicados a Node.js e TypeScript."
                },
                {
                    title: "DevOps & SRE Bootcamp",
                    organization: "DevOps Bootcamp Live",
                    type: "Bootcamp",
                    typeKey: "bootcamp",
                    description: "Práticas modernas de DevOps, SRE e automação de infraestrutura para entrega contínua e escalabilidade."
                },
                {
                    title: "Desenvolvimento Full Stack, Frontend, Mobile e Arquitetura",
                    organization: "Formação Completa",
                    type: "Curso",
                    typeKey: "course",
                    description: "Desenvolvimento Full Stack (Frontend, Mobile), focando em padrões modernos de arquitetura de software."
                },
            ]
        },
        skills: {
            title: "Proficiência Técnica",
            mainTitle: "Habilidades & Tecnologias",
            subtitle: "Minha caixa de ferramentas técnica especializada em construção de sistemas distribuídos.",
            categories: {
                backend: "Backend & APIs",
                backendDesc: "Criando soluções robustas, escaláveis e de alta performance.",
                cloud: "Cloud & DevOps",
                cloudDesc: "Gerenciamento de infraestrutura e automação de deploys.",
                arch: "Arquitetura & Qualidade",
                archDesc: "Boas práticas para garantir código sustentável e testável.",
                frontend: "Frontend & Database",
                frontendDesc: "Experiência complementar em interfaces e persistência de dados."
            }
        },
        projects: {
            title: "Projetos no GitHub",
            subtitle: "Repositórios públicos, ordenados pelas atualizações mais recentes.",
            loading: "Carregando repositórios...",
            error: "Não foi possível carregar os repositórios do GitHub agora.",
            empty: "Nenhum repositório público encontrado.",
            viewRepo: "Ver repositório",
            viewAll: "Ver todos no GitHub",
            updated: "Atualizado em"
        },
        chatbot: {
            title: "Pergunte sobre meu perfil",
            beta: "Beta · em desenvolvimento",
            placeholder: "Digite sua pergunta...",
            send: "Enviar",
            open: "Abrir chat",
            close: "Fechar chat",
            greeting: "Olá! Sou um assistente em desenvolvimento. Posso responder perguntas sobre a experiência, stack e formação do Wilner. O que você gostaria de saber?",
            fallback: "Ainda estou aprendendo e não encontrei uma resposta para isso. Tente perguntar sobre experiência, tecnologias, certificações, contato ou formação.",
            disclaimer: "Respostas geradas localmente a partir do currículo. Integração com IA em breve."
        },
        contact: {
            title: "Entre em Contato",
            getInTouch: "Mande uma mensagem",
            form: {
                name: "Seu Nome",
                email: "Seu Email",
                message: "Sua Mensagem",
                submit: "Enviar Mensagem"
            },
            info: {
                title: "Informações de Contato",
                email: "Email",
                phone: "Telefone",
                location: "Localização",
                social: "Social"
            }
        },
        footer: {
            rights: "Todos os direitos reservados."
        }
    },
    en: {
        header: {
            about: "About",
            experience: "Experience",
            education: "Education",
            projects: "Projects",
            contact: "Contact",
        },
        hero: {
            role: "Software Engineer",
            tagline: "Node.js · Python · TypeScript · AWS · Kubernetes",
            email: "Email"
        },
        about: {
            title: "About Me",
            description: "Senior Backend Developer with 5+ years of experience building scalable systems, high-performance APIs, and microservice architectures in large-scale production environments.",
            p1: "I have expertise in two backend ecosystems: Node.js/NestJS/TypeScript and Python/FastAPI/Django, with orchestration via Kubernetes and messaging with RabbitMQ and Celery. Solid experience with AWS (Certified Cloud Practitioner), payment gateway integration (Stripe), and observability (Dynatrace, DataDog).",
            p2: "I apply TDD, DDD, Clean Architecture, and SOLID to deliver sustainable code with robust tests. Track record of measurable results: 50% reduction in infrastructure costs and 60% gain in processing speed. I enjoy working in collaborative teams, acting as a technical reference in architecture decisions and code review."
        },
        experience: {
            title: "Experience",
            list: [
                {
                    role: 'Software Engineer',
                    company: 'Sem Parar',
                    date: 'Mar 2026 - Present · Remote',
                    description: 'Development of microservices in Python (FastAPI, Django, Celery) and Node.js/TypeScript, orchestrated via Kubernetes with asynchronous messaging via RabbitMQ. Instrumentation of 7 microservices with Dynatrace, implementing custom business metrics. Responsible for the full cycle: from planning with the product team to production deployment and post-delivery monitoring.',
                },
                {
                    role: 'Senior Back-End Developer',
                    company: 'LWSA',
                    date: 'May 2024 - Mar 2026 · Remote',
                    description: 'Led the migration of a legacy tracking system (monolith) to a scalable modular monolith architecture with event-based communication, resulting in a 50% reduction in infrastructure costs. Technical reference for a team of 5 developers in Node.js, NestJS, and TypeScript. Observability with DataDog: dashboards, alerts, and performance tracing in production.',
                },
                {
                    role: 'Mid-Level Back-End Developer',
                    company: 'Grupo GFT',
                    date: 'Apr 2022 - Mar 2024 · Remote',
                    description: 'Projects for large clients such as DASA (healthcare) and Stix (e-commerce), building critical solutions in Node.js and NestJS on AWS, GCP, and Azure. Led the infrastructure migration from Azure to Google Cloud at DASA. Responsible for requirements analysis, architecture definition, and integrations between distributed systems with a focus on high availability and security. Agile environment (Scrum).',
                },
                {
                    role: 'Mid-Level Back-End Developer',
                    company: 'Semantix',
                    date: 'Aug 2021 - Apr 2022',
                    description: 'Built integrations with large-scale platforms: VTEX (e-commerce), TOTVS (ERP), legacy systems, and payment gateways, ensuring secure and efficient communication between platforms. Implementation of scalable solutions in Node.js focused on reliability and low latency.',
                },
                {
                    role: 'Junior FullStack Developer',
                    company: '4mti',
                    date: 'Feb 2020 - Aug 2021 · Belo Horizonte, MG',
                    description: 'Built ÁDUNA, an intelligence and investigation platform for MPMG (Minas Gerais Public Prosecutor Office): a graph system that cross-references and visualizes relationships between people, companies, tax IDs, phone numbers, and license plates, querying millions of records via Elasticsearch in real time. Built LINS, a public-spending analysis platform for Minas Gerais via Apache Druid. Frontend in React and backend in Node.js. Query optimization with a 60% increase in processing speed.',
                },
            ]
        },
        education: {
            title: "Education & Certifications",
            subtitle: "Continuous learning and validation of technical competencies.",
            list: [
                {
                    title: "Technologist Degree in Information Technology",
                    organization: "Centro Universitário Una",
                    type: "Degree",
                    typeKey: "degree",
                    description: "Higher education in Information Technology. Belo Horizonte, MG · 2018 - 2020."
                },
                {
                    title: "AWS Certified Cloud Practitioner",
                    organization: "Amazon Web Services (AWS)",
                    type: "Certification",
                    typeKey: "certification",
                    description: "Validation of overall AWS cloud platform knowledge, including security and compliance concepts."
                },
                {
                    title: "Node.js, TypeScript, TDD, DDD, Clean Architecture and SOLID",
                    organization: "Udemy · Full Stack Training",
                    type: "Course",
                    typeKey: "course",
                    description: "Mastery of TDD, DDD, Clean Architecture, and SOLID principles applied to Node.js and TypeScript."
                },
                {
                    title: "DevOps & SRE Bootcamp",
                    organization: "DevOps Bootcamp Live",
                    type: "Bootcamp",
                    typeKey: "bootcamp",
                    description: "Modern DevOps, SRE, and infrastructure automation practices for continuous delivery and scalability."
                },
                {
                    title: "Full Stack, Frontend, Mobile and Architecture Development",
                    organization: "Complete Training",
                    type: "Course",
                    typeKey: "course",
                    description: "Full Stack Development (Frontend, Mobile), focusing on modern software architecture patterns."
                },
            ]
        },
        skills: {
            title: "Technical Proficiency",
            mainTitle: "Skills & Technologies",
            subtitle: "My technical toolbox specialized in building distributed systems.",
            categories: {
                backend: "Backend & APIs",
                backendDesc: "Creating robust, scalable, high-performance solutions.",
                cloud: "Cloud & DevOps",
                cloudDesc: "Infrastructure management and deployment automation.",
                arch: "Architecture & Quality",
                archDesc: "Best practices to ensure sustainable and testable code.",
                frontend: "Frontend & Database",
                frontendDesc: "Complementary experience in interfaces and data persistence."
            }
        },
        projects: {
            title: "GitHub Projects",
            subtitle: "Public repositories, sorted by most recent updates.",
            loading: "Loading repositories...",
            error: "Could not load GitHub repositories right now.",
            empty: "No public repositories found.",
            viewRepo: "View repository",
            viewAll: "View all on GitHub",
            updated: "Updated on"
        },
        chatbot: {
            title: "Ask about my profile",
            beta: "Beta · in development",
            placeholder: "Type your question...",
            send: "Send",
            open: "Open chat",
            close: "Close chat",
            greeting: "Hi! I'm an assistant in development. I can answer questions about Wilner's experience, stack, and education. What would you like to know?",
            fallback: "I'm still learning and couldn't find an answer for that. Try asking about experience, technologies, certifications, contact, or education.",
            disclaimer: "Answers generated locally from the resume. AI integration coming soon."
        },
        contact: {
            title: "Contact Me",
            getInTouch: "Get in Touch",
            form: {
                name: "Your Name",
                email: "Your Email",
                message: "Your Message",
                submit: "Send Message"
            },
            info: {
                title: "Contact Information",
                email: "Email",
                phone: "Phone",
                location: "Location",
                social: "Social"
            }
        },
        footer: {
            rights: "All rights reserved."
        }
    }
};
