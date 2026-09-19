/**
 * Local profile assistant (BETA).
 *
 * This is a placeholder implementation that answers questions with simple
 * keyword matching over a curated knowledge base extracted from the resume.
 *
 * INTEGRATION SEAM:
 * When a real backend / LLM endpoint is available, set REACT_APP_PROFILE_BOT_URL
 * (e.g. in .env) to a URL that accepts `POST { message, language }` and returns
 * `{ answer: string }`. `askProfileBot` will use it automatically and fall back
 * to the local knowledge base on any error.
 */

const ENDPOINT = process.env.REACT_APP_PROFILE_BOT_URL || '';

const knowledgeBase = {
    pt: [
        {
            keywords: ['experiencia', 'experiência', 'trabalho', 'emprego', 'carreira', 'anos', 'empresas'],
            answer:
                'Wilner tem 5+ anos de experiência como desenvolvedor backend. Passou por: Software Engineer na Sem Parar (2026–atual), Dev Back-End Sênior na LWSA (2024–2026), Dev Back-End Pleno no Grupo GFT (2022–2024), Dev Back-End Pleno na Semantix (2021–2022) e Dev FullStack Júnior na 4mti (2020–2021).',
        },
        {
            keywords: ['sem parar', 'atual', 'agora', 'presente'],
            answer:
                'Na Sem Parar (desde mar/2026), atua como Software Engineer desenvolvendo microsserviços em Python (FastAPI, Django, Celery) e Node.js/TypeScript orquestrados via Kubernetes, com mensageria via RabbitMQ. Instrumentou 7 microsserviços com Dynatrace e é responsável pelo ciclo completo, do planejamento ao monitoramento pós-deploy.',
        },
        {
            keywords: ['lwsa', 'monolito', 'migracao', 'migração', 'custo', 'infraestrutura', '50%'],
            answer:
                'Na LWSA (2024–2026), liderou a migração de um sistema legado de rastreio para um monolito modular escalável baseado em eventos, reduzindo os custos de infraestrutura em 50%. Foi referência técnica de um time de 5 devs em Node.js/NestJS/TypeScript e implementou observabilidade com DataDog.',
        },
        {
            keywords: ['gft', 'dasa', 'stix', 'azure', 'gcp', 'google cloud'],
            answer:
                'No Grupo GFT (2022–2024), atuou em projetos para DASA (saúde) e Stix (e-commerce) em Node.js e NestJS. Liderou a migração de infraestrutura de Azure para Google Cloud na DASA e cuidou de arquitetura e integrações entre sistemas distribuídos, em ambiente Scrum.',
        },
        {
            keywords: ['semantix', 'vtex', 'totvs', 'erp', 'integracao', 'integração', 'pagamento', 'stripe'],
            answer:
                'Na Semantix (2021–2022), desenvolveu integrações com VTEX (e-commerce), TOTVS (ERP), sistemas legados e gateways de pagamento, com soluções escaláveis em Node.js focadas em confiabilidade e baixa latência.',
        },
        {
            keywords: ['4mti', 'aduna', 'áduna', 'lins', 'mpmg', 'grafo', 'elasticsearch', 'druid', 'react'],
            answer:
                'Na 4mti (2020–2021), desenvolveu o ÁDUNA (plataforma de grafos de investigação do MPMG, consultando milhões de registros via Elasticsearch) e o LINS (análise de gastos públicos de MG via Apache Druid). Frontend em React, backend em Node.js. Otimizações renderam +60% de velocidade de processamento.',
        },
        {
            keywords: ['stack', 'tecnologia', 'tecnologias', 'linguagem', 'linguagens', 'ferramenta', 'skills', 'habilidade'],
            answer:
                'Stack principal: Node.js, NestJS, TypeScript, Python, FastAPI, Django, Celery. Infra: AWS, Kubernetes, Docker, Lambda, SQS, CI/CD. Dados/mensageria: PostgreSQL, MySQL, Redis, Elasticsearch, Apache Druid, RabbitMQ. Arquitetura: DDD, Clean Architecture, SOLID, microsserviços. Observabilidade: Dynatrace, DataDog.',
        },
        {
            keywords: ['python', 'fastapi', 'django', 'celery'],
            answer:
                'Sim. Wilner tem domínio do ecossistema Python: FastAPI, Django, Celery e Pytest, usados em produção na Sem Parar para microsserviços orquestrados via Kubernetes.',
        },
        {
            keywords: ['node', 'nestjs', 'typescript', 'javascript'],
            answer:
                'Node.js/NestJS/TypeScript é um dos ecossistemas centrais do Wilner, usado em LWSA, GFT, Semantix e 4mti, com REST APIs, testes com Jest e práticas de TDD.',
        },
        {
            keywords: ['aws', 'cloud', 'nuvem', 'kubernetes', 'k8s', 'docker', 'devops'],
            answer:
                'Wilner é AWS Certified Cloud Practitioner e tem vivência com AWS, GCP e Azure. Trabalha com Kubernetes, Docker, Lambda, SQS e pipelines de CI/CD.',
        },
        {
            keywords: ['certificacao', 'certificação', 'certificado', 'curso', 'bootcamp'],
            answer:
                'Certificações e cursos: AWS Certified Cloud Practitioner; Node.js/TypeScript/TDD/DDD/Clean Architecture/SOLID (Udemy); DevOps & SRE Bootcamp (DevOps Bootcamp Live); Formação Full Stack, Frontend, Mobile e Arquitetura.',
        },
        {
            keywords: ['formacao', 'formação', 'faculdade', 'graduacao', 'graduação', 'universidade', 'educacao', 'educação', 'una'],
            answer:
                'Formação: Tecnólogo em Tecnologia da Informação pelo Centro Universitário Una (2018–2020), em Belo Horizonte, MG.',
        },
        {
            keywords: ['contato', 'email', 'e-mail', 'telefone', 'linkedin', 'falar', 'contratar'],
            answer:
                'Contato: wilnerbruno@outlook.com · +55 31 99810-7159 · linkedin.com/in/wilner-bruno-arcanjo-660b60106 · github.com/wilner2. Localização: Belo Horizonte, MG, Brasil.',
        },
        {
            keywords: ['local', 'localizacao', 'localização', 'onde', 'mora', 'cidade', 'remoto'],
            answer:
                'Wilner mora em Belo Horizonte, Minas Gerais, Brasil, e trabalha remotamente.',
        },
        {
            keywords: ['idioma', 'ingles', 'inglês', 'linguas', 'línguas', 'portugues', 'português'],
            answer:
                'Idiomas: Português (nativo) e Inglês técnico/intermediário (leitura e documentação).',
        },
        {
            keywords: ['resumo', 'sobre', 'quem', 'perfil', 'apresenta'],
            answer:
                'Wilner Bruno Arcanjo é Desenvolvedor Backend Sênior com 5+ anos de experiência em sistemas escaláveis, APIs de alta performance e microsserviços. Domina Node.js/NestJS/TypeScript e Python/FastAPI/Django, com Kubernetes e mensageria. Histórico de -50% em custos de infra e +60% em velocidade de processamento.',
        },
    ],
    en: [
        {
            keywords: ['experience', 'work', 'job', 'career', 'years', 'companies'],
            answer:
                'Wilner has 5+ years of experience as a backend developer: Software Engineer at Sem Parar (2026–present), Senior Back-End Dev at LWSA (2024–2026), Mid-Level Back-End Dev at Grupo GFT (2022–2024), Mid-Level Back-End Dev at Semantix (2021–2022), and Junior FullStack Dev at 4mti (2020–2021).',
        },
        {
            keywords: ['sem parar', 'current', 'now', 'present'],
            answer:
                'At Sem Parar (since Mar 2026), he works as a Software Engineer building microservices in Python (FastAPI, Django, Celery) and Node.js/TypeScript orchestrated via Kubernetes, with RabbitMQ messaging. He instrumented 7 microservices with Dynatrace and owns the full cycle from planning to post-deploy monitoring.',
        },
        {
            keywords: ['lwsa', 'monolith', 'migration', 'cost', 'infrastructure', '50%'],
            answer:
                'At LWSA (2024–2026), he led the migration of a legacy tracking system to a scalable event-based modular monolith, cutting infrastructure costs by 50%. He was the technical reference for a team of 5 devs in Node.js/NestJS/TypeScript and set up observability with DataDog.',
        },
        {
            keywords: ['gft', 'dasa', 'stix', 'azure', 'gcp', 'google cloud'],
            answer:
                'At Grupo GFT (2022–2024), he worked on projects for DASA (healthcare) and Stix (e-commerce) in Node.js and NestJS. He led the infrastructure migration from Azure to Google Cloud at DASA and handled architecture and integrations across distributed systems in a Scrum environment.',
        },
        {
            keywords: ['semantix', 'vtex', 'totvs', 'erp', 'integration', 'payment', 'stripe'],
            answer:
                'At Semantix (2021–2022), he built integrations with VTEX (e-commerce), TOTVS (ERP), legacy systems, and payment gateways, with scalable Node.js solutions focused on reliability and low latency.',
        },
        {
            keywords: ['4mti', 'aduna', 'lins', 'mpmg', 'graph', 'elasticsearch', 'druid', 'react'],
            answer:
                'At 4mti (2020–2021), he built ÁDUNA (an investigation graph platform for MPMG querying millions of records via Elasticsearch) and LINS (public-spending analysis for Minas Gerais via Apache Druid). Frontend in React, backend in Node.js. Query optimizations delivered +60% processing speed.',
        },
        {
            keywords: ['stack', 'technology', 'technologies', 'language', 'languages', 'tools', 'skills'],
            answer:
                'Main stack: Node.js, NestJS, TypeScript, Python, FastAPI, Django, Celery. Infra: AWS, Kubernetes, Docker, Lambda, SQS, CI/CD. Data/messaging: PostgreSQL, MySQL, Redis, Elasticsearch, Apache Druid, RabbitMQ. Architecture: DDD, Clean Architecture, SOLID, microservices. Observability: Dynatrace, DataDog.',
        },
        {
            keywords: ['python', 'fastapi', 'django', 'celery'],
            answer:
                'Yes. Wilner has strong command of the Python ecosystem: FastAPI, Django, Celery, and Pytest, used in production at Sem Parar for Kubernetes-orchestrated microservices.',
        },
        {
            keywords: ['node', 'nestjs', 'typescript', 'javascript'],
            answer:
                'Node.js/NestJS/TypeScript is one of Wilner\'s core ecosystems, used at LWSA, GFT, Semantix, and 4mti, with REST APIs, Jest testing, and TDD practices.',
        },
        {
            keywords: ['aws', 'cloud', 'kubernetes', 'k8s', 'docker', 'devops'],
            answer:
                'Wilner is an AWS Certified Cloud Practitioner with experience across AWS, GCP, and Azure. He works with Kubernetes, Docker, Lambda, SQS, and CI/CD pipelines.',
        },
        {
            keywords: ['certification', 'certificate', 'course', 'bootcamp'],
            answer:
                'Certifications and courses: AWS Certified Cloud Practitioner; Node.js/TypeScript/TDD/DDD/Clean Architecture/SOLID (Udemy); DevOps & SRE Bootcamp (DevOps Bootcamp Live); Full Stack, Frontend, Mobile and Architecture training.',
        },
        {
            keywords: ['education', 'university', 'degree', 'college', 'una', 'graduation'],
            answer:
                'Education: Technologist Degree in Information Technology from Centro Universitário Una (2018–2020), in Belo Horizonte, MG.',
        },
        {
            keywords: ['contact', 'email', 'phone', 'linkedin', 'hire', 'reach'],
            answer:
                'Contact: wilnerbruno@outlook.com · +55 31 99810-7159 · linkedin.com/in/wilner-bruno-arcanjo-660b60106 · github.com/wilner2. Location: Belo Horizonte, MG, Brazil.',
        },
        {
            keywords: ['location', 'where', 'live', 'city', 'remote'],
            answer: 'Wilner lives in Belo Horizonte, Minas Gerais, Brazil, and works remotely.',
        },
        {
            keywords: ['language', 'english', 'portuguese'],
            answer: 'Languages: Portuguese (native) and technical/intermediate English (reading and documentation).',
        },
        {
            keywords: ['summary', 'about', 'who', 'profile', 'introduce'],
            answer:
                'Wilner Bruno Arcanjo is a Senior Backend Developer with 5+ years of experience in scalable systems, high-performance APIs, and microservices. He masters Node.js/NestJS/TypeScript and Python/FastAPI/Django, with Kubernetes and messaging. Track record of -50% infra costs and +60% processing speed.',
        },
    ],
};

function normalize(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

export function answerLocally(question, language = 'pt') {
    const entries = knowledgeBase[language] || knowledgeBase.pt;
    const q = normalize(question);
    let best = null;
    let bestScore = 0;

    for (const entry of entries) {
        let score = 0;
        for (const kw of entry.keywords) {
            if (q.includes(normalize(kw))) score += 1;
        }
        if (score > bestScore) {
            bestScore = score;
            best = entry;
        }
    }

    return bestScore > 0 ? best.answer : null;
}

export async function askProfileBot(question, language = 'pt') {
    if (ENDPOINT) {
        try {
            const res = await fetch(ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: question, language }),
            });
            if (res.ok) {
                const data = await res.json();
                if (data && data.answer) return data.answer;
            }
        } catch (err) {
            // fall through to local answer
        }
    }

    return answerLocally(question, language);
}
