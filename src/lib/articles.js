/**
 * Article content lives here so it's owned by this site (better for SEO)
 * instead of only existing on Medium. To add a real article, push a new
 * entry to ARTICLES below and replace/remove the placeholder.
 *
 * If you also publish on Medium, use Medium's "Import a story" feature
 * and set the canonical URL to this article's page on your own domain -
 * that way Medium still gives you distribution, but search engines credit
 * your site as the original source.
 */

const ARTICLES = [
    {
        slug: 'aplicacao-web-escalavel-elastic-beanstalk-dynamodb',
        title:
            'Implementação de uma Aplicação Web Escalável utilizando os serviços do Elastic Beanstalk, DynamoDB, CloudFront e Edge Location da AWS',
        date: '2024-03-26',
        excerpt:
            'Como implementei uma aplicação web para suportar mais de 10.000 usuários simultâneos numa conferência global, combinando Elastic Beanstalk, DynamoDB, Auto Scaling, Load Balancer e CloudFront na AWS.',
        content: `![](https://cdn-images-1.medium.com/max/1024/1*uO71Uqxfr-SjbPRcbDFD0Q.png)

Nesse projeto baseado em um cenário do mundo real, fui responsável por implementar uma aplicação que precisa suportar a alta demanda de um grande número de usuários acessando simultaneamente. Esta aplicação foi utilizada em uma grande conferência que contou com mais de 10.000 pessoas, presencialmente e online, contando com participantes de todo o mundo.

O evento foi transmitido pela internet e presencialmente e foram sorteados 10 vouchers para 3 certificações de Cloud. Nesse momento os mais de 10.000 conferencistas cadastraram seus e-mails para garantir a participação no sorteio.

Na AWS, foram utilizados os serviços do Elastic Beanstalk para deploy da aplicação web, DynamoDB para armazenar os e-mails, CloudFront para fazer o caching dos arquivos estáticos e dinâmicos em uma Edge Location próxima ao usuário.

![](https://cdn-images-1.medium.com/max/1024/1*v58PALrUM4m6EH_0MWYBGQ.png)

A primeira etapa consistiu na criação do Banco de Dados Amazon DynamoDB, onde foram criadas as tabelas necessárias para o funcionamento da aplicação. O processo de criação do banco é simples e tranquilo.

Após a criação do banco, foi necessário criar uma Role no IAM (Identity and Access Management).

![](https://cdn-images-1.medium.com/max/957/1*qQDsKb_QLgiIl_lwHkhauA.png)

Essas roles permite que o AWS Beanstalk gerencie as instâncias EC2 e tenha acesso ao Amazon DynamoDB, garantindo o correto funcionamento da aplicação.

![No EC2 Instance Profile, foi necessário vincular a role criada anteriormente](https://cdn-images-1.medium.com/max/895/1*knUrGanuc-8WohxC6ll3Mg.png)
*No EC2 Instance Profile, foi necessário vincular a role criada anteriormente*

A combinação do Auto Scaling e Elastic Load Balancer (ELB) proporciona uma solução robusta para garantir alta disponibilidade, escalabilidade e desempenho das aplicações na AWS. Por isso, foi configurado no AWS Beanstalk.

![Exemplo de configuração de Auto Scaling](https://cdn-images-1.medium.com/max/758/1*Eoa1Q6fDjhmZ5T3f1Q0IhA.png)
*Exemplo de configuração de Auto Scaling:*

![Exemplo de configuração do Load Balancer](https://cdn-images-1.medium.com/max/625/1*ohR4J3ELAsN2ODAGKfPPvA.png)
*Exemplo de configuração do Load Balancer:*

Considerando que o escopo do projeto é global, é importante utilizar o Amazon CloudFront. Esta ferramenta é poderosa para melhorar a velocidade, disponibilidade e segurança da entrega de conteúdo na web.

![Exemplo de configuração do CloudFront](https://cdn-images-1.medium.com/max/543/1*ydC-AaQhlLkWP2SL-GBpGw.png)
*Exemplo de configuração do CloudFront:*

Ao combinar esses serviços da AWS em uma aplicação web, obtém uma solução escalável, de alto desempenho e altamente disponível. A aplicação pode lidar facilmente com picos de tráfego, oferece uma experiência rápida e confiável aos usuários finais e permite que você se concentre no desenvolvimento e na melhoria da aplicação sem se preocupar com a infraestrutura subjacente.
`,
    },
    {
        slug: 'migracao-usuarios-iam-aws',
        title:
            'Migração de usuários de forma automatizada e gerenciamento dos recursos do IAM (Identity and Access Management) da AWS',
        date: '2024-03-25',
        excerpt:
            'Como automatizei a migração de 100 usuários para o IAM da AWS com grupos de segurança de menor privilégio, um script shell para criação em massa e uma política que exige MFA em todas as contas.',
        content: `![](https://cdn-images-1.medium.com/max/1024/1*ektoEQZJZOgIRACxpoxodg.png)

Nesse projeto baseado em um cenário real, tive que atuar como Especialista Cloud para realizar a migração de usuários de forma automatizada e gerenciar os recursos do IAM (Identity and Access Management) da AWS.

Haviam 100 usuários que precisaram ser migrados e ter o MFA — Autenticação por múltiplos fatores (Multi-factor Authentication) habilitado nas contas, pois esta é uma melhor prática de segurança.

Para não ser uma tarefa repetitiva e manual na console da AWS, precisei ter o pensamento voltado a automatizar os processos.

![](https://cdn-images-1.medium.com/max/1024/1*LMZyP9rylkfmos3twRAq8g.png)

O primeiro passo foi criar grupos de segurança (RedesAdmin, LinuxAdmin, CloudAdmin, DBA e Estagiários) no IAM, seguindo o conceito de acesso com o mínimo de privilégios recomendado pela AWS. Por exemplo, o grupo de DBA possui políticas de permissão como *AmazonRDSDataFullAccess*.

![](https://cdn-images-1.medium.com/max/596/1*QpKCNDtZuRnn9QbjlS4EtQ.png)

Com os grupos de seguranças criados, preparando o ambiente na CloudShell para executar script instalando o dos2unix.

\`\`\`bash
$ sudo yum install dos2unix -y
\`\`\`

Esse pacote é importante para executar o script, pois ele realiza a conversão de arquivos do Windows para Unix. Como os dados dos usuários estão em um arquivo .csv, essa conversão é necessária. Após a instalação, o script Shell foi criado e o arquivo csv foi movido para o CloudShell.

\`\`\`bash
#!/bin/bash
# Proposito: Automatiza a criação de usuários na AWS
# Utilizacao: ./aws-iam-cria-usuario.sh <formato arquivo entrada .csv>
# Formato do arquivo de entrada: usuarios,grupo,senha
# Autor: Jean Rodrigues
# ------------------------------------------

INPUT=$1
OLDIFS=$IFS
IFS=',;'

[ ! -f $INPUT ] && { echo "$INPUT arquivo nao encontrado"; exit 99; }

command -v dos2unix >/dev/null || { echo "utilitario dos2unix nao encontrado. Por favor, instale dos2unix antes de rodar o script."; exit 1; }

dos2unix $INPUT

while read -r usuario grupo senha || [ -n "$usuario" ]
do
    if [ "$usuario" != "usuarios" ]; then
	    aws iam create-user --user-name $usuario
        aws iam create-login-profile --password-reset-required --user-name $usuario --password $senha
        aws iam add-user-to-group --group-name $grupo --user-name $usuario
	fi

done < $INPUT

IFS=$OLDIFS
\`\`\`

\`\`\`bash
$ chmod +x aws-iam-cria-usuario.sh
\`\`\`

Importante o script ter a permissão de execução.

\`\`\`bash
$ ./aws-iam-cria-usuario.sh listaUsuarios.csv
\`\`\`

Após a execução do script o usuários serão criados.

![](https://cdn-images-1.medium.com/max/246/1*Zdgrq498z4bsNvIhrdL6ng.png)

Para aumentar a segurança das contas, é fundamental habilitar a Autenticação de Múltiplos Fatores (Multi-factor Authentication) por meio da criação de uma política específica e anexar essa política a todos os grupos de segurança criado.

\`\`\`json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowViewAccountInfo",
            "Effect": "Allow",
            "Action": "iam:ListVirtualMFADevices",
            "Resource": "*"
        },
        {
            "Sid": "AllowManageOwnVirtualMFADevice",
            "Effect": "Allow",
            "Action": [
                "iam:CreateVirtualMFADevice",
                "iam:DeleteVirtualMFADevice"
            ],
            "Resource": "arn:aws:iam::*:mfa/\${aws:username}"
        },
        {
            "Sid": "AllowManageOwnUserMFA",
            "Effect": "Allow",
            "Action": [
                "iam:DeactivateMFADevice",
                "iam:EnableMFADevice",
                "iam:GetUser",
                "iam:ListMFADevices",
                "iam:ResyncMFADevice"
            ],
            "Resource": "arn:aws:iam::*:user/\${aws:username}"
        },
        {
            "Sid": "DenyAllExceptListedIfNoMFA",
            "Effect": "Deny",
            "NotAction": [
                "iam:ListUsers",
                "iam:CreateVirtualMFADevice",
                "iam:EnableMFADevice",
                "iam:GetUser",
                "iam:ListMFADevices",
                "iam:ListVirtualMFADevices",
                "iam:ResyncMFADevice",
                "iam:ChangePassword",
                "iam:CreateUser",
                "iam:CreateLoginProfile",
                "iam:AddUserToGroup",
                "sts:GetSessionToken"
            ],
            "Resource": "*",
            "Condition": {
                "BoolIfExists": {
                    "aws:MultiFactorAuthPresent": "false"
                }
            }
        }
    ]
}
\`\`\`

Dessa forma é possível criar uma grande quantidade de usuários de forma automatizada e aplicando com obrigatoriedade o uso do MFA para melhor segurança das contas.
`,
    },
    {
        slug: 'campo-undefined-observabilidade-dynatrace',
        title:
            'Um campo undefined que derrubou pagamentos e marketing: como a observabilidade nos salvou 3 horas de dor de cabeça',
        date: '2026-09-05',
        excerpt:
            'Um incidente pequeno na origem, grande no impacto — e o papel do Dynatrace em transformar horas de investigação em 10 minutos.',
        content: `Toda equipe de engenharia tem uma história parecida com essa: um bug pequeno, quase invisível, que se espalha por partes do sistema que, à primeira vista, não têm nada a ver com ele. Esta semana vivemos exatamente isso na nossa produção — e a forma como conseguimos identificar a causa raiz em minutos, em vez de horas, mostra bem por que observabilidade deixou de ser luxo de time de infra e virou parte central da engenharia de software.

Este artigo é um relato direto desse incidente: o que aconteceu, como o Dynatrace nos ajudou a enxergar o problema, e a lição que ele deixou.

## O gatilho: um campo que não deveria estar vazio

Tudo começou com uma mudança no frontend que passou a enviar o campo \`license_plate\` (placa do veículo) como \`undefined\` para o backend. Isoladamente, isso já seria um problema simples: o backend não sabia lidar com esse valor e começou a retornar **erros 500** em várias requisições.

Só que esse campo não ficava só dentro do nosso sistema. O backend repassava o \`license_plate\` para uma **API de terceiros**. E foi aí que o problema saiu do campo técnico e virou um problema de negócio.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-label="Frontend envia license_plate undefined para o backend, que encaminha o payload para uma API de terceiros. Pagamentos e Marketing também chamam essa mesma API para fins não relacionados a placas de veículo. A API bloqueia o IP após o volume de valores undefined, derrubando os três consumidores ao mesmo tempo." style="width:100%;height:auto;">
<defs>
<marker id="arrowhead1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M1 1L8 5L1 9" fill="none" stroke="context-stroke" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
</defs>
<rect x="20" y="24" width="140" height="48" rx="8" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="90" y="53" text-anchor="middle" font-size="13" fill="currentColor">Frontend</text>
<rect x="20" y="120" width="140" height="48" rx="8" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="90" y="149" text-anchor="middle" font-size="13" fill="currentColor">Backend</text>
<rect x="20" y="216" width="140" height="48" rx="8" fill="hsl(var(--destructive) / 0.12)" stroke="hsl(var(--destructive))" stroke-width="1.2"/>
<text x="90" y="240" text-anchor="middle" font-size="13" fill="currentColor">Pagamentos</text>
<text x="90" y="256" text-anchor="middle" font-size="11" fill="hsl(var(--destructive))">indisponível</text>
<rect x="190" y="216" width="140" height="48" rx="8" fill="hsl(var(--destructive) / 0.12)" stroke="hsl(var(--destructive))" stroke-width="1.2"/>
<text x="260" y="240" text-anchor="middle" font-size="13" fill="currentColor">Marketing</text>
<text x="260" y="256" text-anchor="middle" font-size="11" fill="hsl(var(--destructive))">indisponível</text>
<rect x="430" y="108" width="190" height="84" rx="8" fill="hsl(var(--destructive) / 0.12)" stroke="hsl(var(--destructive))" stroke-width="1.6"/>
<text x="525" y="136" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">API de terceiros</text>
<text x="525" y="156" text-anchor="middle" font-size="11" fill="hsl(var(--destructive))">bloqueia o IP</text>
<text x="525" y="172" text-anchor="middle" font-size="11" fill="hsl(var(--destructive))">após volume de undefined</text>
<line x1="90" y1="72" x2="90" y2="118" stroke="currentColor" stroke-width="1.4" marker-end="url(#arrowhead1)"/>
<text x="98" y="98" font-size="11" fill="currentColor">license_plate: undefined</text>
<line x1="160" y1="144" x2="428" y2="144" stroke="currentColor" stroke-width="1.4" marker-end="url(#arrowhead1)"/>
<text x="200" y="136" font-size="11" fill="currentColor">encaminha o payload</text>
<line x1="160" y1="230" x2="428" y2="168" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrowhead1)"/>
<line x1="330" y1="230" x2="428" y2="182" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrowhead1)"/>
<text x="345" y="206" font-size="11" fill="currentColor">chamadas sem relação com placas</text>
</svg>
<figcaption>O bug ficava isolado no fluxo de placas de veículo, mas o bloqueio de IP na API de terceiros — compartilhada por Pagamentos e Marketing — espalhou a indisponibilidade para áreas sem nenhuma relação com o bug original.</figcaption>
</figure>

## O efeito cascata: quando o sintoma esconde o verdadeiro problema

Como o valor \`undefined\` estava sendo enviado repetidamente, em volume, a API terceira interpretou aquilo como um padrão anômalo — e fez o que qualquer API bem protegida faz: **bloqueou o IP do nosso backend**.

O problema é que essa mesma API era compartilhada por outras frentes do sistema, sem relação direta com placas de veículo: **atualização de pagamento, integrações de marketing, entre outras**. Com o IP bloqueado, **100% das requisições para essa API passaram a ser negadas**, independentemente de qual fluxo de negócio estava chamando.

Ou seja: um bug de validação em um campo específico se transformou em uma indisponibilidade que atingia áreas completamente diferentes do produto. Esse é um padrão clássico de sistemas distribuídos — falhas não ficam contidas onde nasceram, elas se propagam através das dependências.

## Onde a observabilidade fez a diferença

Sem uma stack de observabilidade madura, esse tipo de incidente costuma virar uma caça ao tesouro: alguém percebe erros de pagamento, outra pessoa percebe falha em marketing, e o time começa a investigar em direções separadas, sem saber que é a mesma causa raiz.

Não foi o que aconteceu aqui. O **Dynatrace disparou o alerta automaticamente** assim que o volume de erros 500 começou a subir. A partir daí, dois recursos foram decisivos:

- **Traces distribuídos**, que mostraram exatamente em qual serviço e em qual chamada o erro estava se originando — deixando claro que a falha vinha da chamada à API de terceiros, e não de múltiplos pontos desconectados.
- **Logs estruturados**, que permitiram correlacionar o erro ao payload problemático (o \`license_plate\` chegando como \`undefined\`) sem precisar reproduzir o cenário manualmente ou vasculhar logs não estruturados linha por linha.

O resultado: **10 minutos após o alerta**, o time já tinha identificado a causa raiz completa — do erro 500 ao bloqueio de IP. Esse é o tipo de ganho que observabilidade bem implementada entrega: não é só saber *que* algo está errado, é saber *onde* e *por quê* quase em tempo real.

## Por que a resolução levou 3 horas, então?

Aqui está um ponto que vale destacar, porque não é sobre tecnologia — é sobre processo. Identificar a causa raiz levou minutos. **Resolver completamente o incidente levou cerca de 3 horas**, e o motivo foi a natureza do problema: o bloqueio não estava no nosso controle.

<figure>
<svg viewBox="0 0 640 180" role="img" aria-label="Linha do tempo do incidente: detecção automática via Dynatrace em 10 minutos, contrastando com 180 minutos até a resolução completa, com fix aplicado, contato com o fornecedor e war room ocorrendo nesse intervalo mais longo." style="width:100%;height:auto;">
<line x1="30" y1="100" x2="62" y2="100" stroke="hsl(var(--primary))" stroke-width="8" stroke-linecap="round"/>
<line x1="62" y1="100" x2="610" y2="100" stroke="currentColor" stroke-width="8" stroke-linecap="round" opacity="0.25"/>
<circle cx="30" cy="100" r="4" fill="currentColor"/>
<circle cx="62" cy="100" r="4" fill="hsl(var(--primary))"/>
<circle cx="199" cy="100" r="4" fill="currentColor"/>
<circle cx="336" cy="100" r="4" fill="currentColor"/>
<circle cx="473" cy="100" r="4" fill="currentColor"/>
<circle cx="610" cy="100" r="4" fill="currentColor"/>
<line x1="30" y1="96" x2="30" y2="84" stroke="currentColor" stroke-width="1"/>
<line x1="199" y1="96" x2="199" y2="84" stroke="currentColor" stroke-width="1"/>
<line x1="473" y1="96" x2="473" y2="84" stroke="currentColor" stroke-width="1"/>
<line x1="62" y1="104" x2="62" y2="116" stroke="hsl(var(--primary))" stroke-width="1"/>
<line x1="336" y1="104" x2="336" y2="116" stroke="currentColor" stroke-width="1"/>
<line x1="610" y1="104" x2="610" y2="116" stroke="currentColor" stroke-width="1"/>
<text x="30" y="80" text-anchor="middle" font-size="12" fill="currentColor">Alerta</text>
<text x="30" y="65" text-anchor="middle" font-size="11" fill="currentColor">0 min</text>
<text x="199" y="80" text-anchor="middle" font-size="12" fill="currentColor">Fix aplicado</text>
<text x="473" y="80" text-anchor="middle" font-size="12" fill="currentColor">War room</text>
<text x="62" y="122" text-anchor="middle" font-size="12" fill="hsl(var(--primary))">Causa raiz</text>
<text x="62" y="137" text-anchor="middle" font-size="11" fill="hsl(var(--primary))">10 min</text>
<text x="336" y="122" text-anchor="middle" font-size="12" fill="currentColor">Contato fornecedor</text>
<text x="610" y="122" text-anchor="middle" font-size="12" fill="currentColor">Resolvido</text>
<text x="610" y="137" text-anchor="middle" font-size="11" fill="currentColor">180 min</text>
</svg>
<figcaption>Detecção automática via Dynatrace levou 10 minutos; resolução completa levou 180 — a diferença entre os dois foi processo e comunicação entre times, não tecnologia.</figcaption>
</figure>

Foi necessário:

1. **Aplicar o fix** de validação — tanto no frontend quanto no backend — para impedir que valores inválidos de \`license_plate\` continuassem sendo enviados.
2. **Entrar em contato com o time da API de terceiros**, explicar a causa técnica do bloqueio e negociar o desbloqueio do nosso IP.
3. **Abrir uma war room**, reunindo pessoas técnicas e de negócio, para comunicar com clareza o impacto em pagamentos e marketing enquanto o desbloqueio estava em andamento — algo essencial quando a indisponibilidade extrapola o time de engenharia e afeta áreas do negócio que precisam se posicionar externamente.

Isso reforça algo que muitas vezes é subestimado: **o MTTD (tempo até detectar) pode ser rápido, mas o MTTR (tempo até resolver) muitas vezes depende de fatores fora do código** — comunicação entre times, dependências externas, alinhamento com o negócio. Observabilidade acelera a primeira parte de forma dramática; a segunda ainda exige processo e comunicação bem alinhados.

## A lição que mais dói (no bom sentido)

Se tem uma conclusão que resume esse incidente inteiro, é esta: **uma validação simples de tamanho de caractere no campo \`license_plate\` — antes de repassá-lo à API de terceiros — teria evitado tudo.**

> Não o alerta, não o bloqueio de IP, não as 3 horas de indisponibilidade em pagamentos e marketing, não a war room. Uma linha de validação.

É um lembrete valioso: observabilidade não substitui boas práticas de defesa em profundidade (validação de schema, sanitização de input, circuit breakers para dependências externas). Ela é o que garante que, **quando** essas lacunas existirem — e elas vão existir — você descubra em minutos, e não em horas.

## O que fica desse episódio

- **Erros pequenos podem ter efeito cascata em sistemas distribuídos**, especialmente quando dependências externas são compartilhadas por múltiplos fluxos de negócio.
- **Observabilidade bem implementada (traces + logs estruturados) reduz drasticamente o tempo de diagnóstico** — no nosso caso, de um problema que poderia ter levado horas para ser entendido, para 10 minutos.
- **MTTD e MTTR são coisas diferentes.** Detectar rápido é resultado de boa instrumentação; resolver rápido depende também de comunicação, processo e, às vezes, de terceiros fora do seu controle.
- **Validação de input continua sendo uma das defesas mais baratas e mais negligenciadas** em arquiteturas de microsserviços.

---

No fim das contas, esse incidente não foi só sobre uma placa de veículo mal validada. Foi um lembrete de que observabilidade e boas práticas de engenharia não competem entre si — elas se complementam. Uma reduz o tempo de descoberta, a outra reduz a chance de o problema acontecer.
`,
    },
    {
        slug: 'dificuldades-monolito-modular',
        title: 'Dificuldades de uma arquitetura monólito modular que eu passei',
        date: '2026-09-05',
        excerpt:
            'Três atritos reais de projetar um sistema de rastreamento de pacotes multi-transportadora como monólito modular — e o que cada um nos ensinou sobre acoplamento.',
        content: `Monólito modular é frequentemente vendido como o "meio-termo sensato" entre o monólito tradicional e microsserviços: você organiza o código em módulos bem definidos, mantém um único deploy, e adia a complexidade operacional de uma arquitetura distribuída completa. Na teoria, funciona bem. Na prática, alguns dos problemas que essa arquitetura promete evitar simplesmente aparecem mais tarde — e de formas menos óbvias.

Este artigo é um relato de um projeto real onde isso aconteceu: um sistema de rastreamento de pacotes de múltiplas transportadoras, construído como monólito modular, e as três dificuldades que nos forçaram a repensar decisões de arquitetura no meio do caminho.

## O contexto: rastreamento de pacotes multi-transportadora

A arquitetura era composta por três camadas lógicas dentro do mesmo monólito:

- **Inbound** — um serviço responsável por receber a entrada de novos pacotes vindos das transportadoras.
- **Serviços por transportadora** — módulos separados por transportadora, cada um capaz de escalar horizontal e verticalmente, responsáveis por buscar atualizações de status diretamente na transportadora e detectar mudanças de evento no pacote.
- **Outbound** — a camada que, ao detectar uma mudança relevante em um pacote, disparava um webhook ou mensagem para as demais frentes internas da empresa interessadas naquele pacote.

Já sabíamos, desde o início, que o projeto legado que estávamos substituindo era uma mistura de comunicação síncrona e assíncrona — e que a nova arquitetura provavelmente enfrentaria decisões parecidas. O que não estava claro era exatamente onde essas decisões iriam doer primeiro.

Vale um contexto importante antes de entrar nas dificuldades: o time responsável por esse projeto era enxuto, assim como os recursos disponíveis. Isso não é um detalhe menor — ele explica boa parte das escolhas que vêm a seguir. Com um time pequeno, cada decisão de arquitetura precisava equilibrar robustez contra velocidade de entrega. Não dava para parar o roadmap por meses para migrar tudo para microsserviços "do jeito certo" antes de colocar o produto em produção. As soluções que vieram — janelas de manutenção em vez de zero-downtime desde o dia um, deploy dividido em duas partes em vez de N partes independentes, ECS dedicado só onde o problema já doía de verdade — são reflexo direto dessa realidade: trade-offs conscientes, não atalhos por falta de conhecimento.

<figure>
<svg viewBox="0 0 680 300" role="img" aria-label="Inbound recebe pacotes das transportadoras e encaminha para serviços independentes por transportadora, cada um em seu próprio ECS; todos publicam eventos em uma fila SNS/SQS que atua como buffer de resiliência antes de chegar à camada outbound, responsável pelos webhooks." style="width:100%;height:auto;">
<defs>
<marker id="arrow3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
</defs>
<rect x="20" y="112" width="120" height="56" rx="8" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="80" y="136" text-anchor="middle" font-size="13" fill="currentColor">Inbound</text>
<text x="80" y="152" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.7">novos pacotes</text>
<line x1="140" y1="140" x2="176" y2="140" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow3)"/>
<rect x="180" y="30" width="150" height="48" rx="8" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="255" y="50" text-anchor="middle" font-size="13" fill="currentColor">Transp. A</text>
<text x="255" y="65" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.7">ECS próprio</text>
<rect x="180" y="88" width="150" height="48" rx="8" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="255" y="108" text-anchor="middle" font-size="13" fill="currentColor">Transp. B</text>
<text x="255" y="123" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.7">ECS próprio</text>
<rect x="180" y="146" width="150" height="48" rx="8" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="255" y="166" text-anchor="middle" font-size="13" fill="currentColor">Transp. C</text>
<text x="255" y="181" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.7">ECS próprio</text>
<rect x="180" y="204" width="150" height="48" rx="8" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="255" y="224" text-anchor="middle" font-size="13" fill="currentColor">Transp. D</text>
<text x="255" y="239" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.7">ECS próprio</text>
<line x1="330" y1="54" x2="404" y2="128" stroke="currentColor" stroke-width="1" marker-end="url(#arrow3)"/>
<line x1="330" y1="112" x2="404" y2="136" stroke="currentColor" stroke-width="1" marker-end="url(#arrow3)"/>
<line x1="330" y1="170" x2="404" y2="144" stroke="currentColor" stroke-width="1" marker-end="url(#arrow3)"/>
<line x1="330" y1="228" x2="404" y2="152" stroke="currentColor" stroke-width="1" marker-end="url(#arrow3)"/>
<rect x="410" y="112" width="150" height="56" rx="8" fill="hsl(var(--primary) / 0.12)" stroke="hsl(var(--primary))" stroke-width="1.6"/>
<text x="485" y="136" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">SNS / SQS</text>
<text x="485" y="153" text-anchor="middle" font-size="9" fill="hsl(var(--primary))">retém eventos na indisponibilidade</text>
<line x1="560" y1="140" x2="592" y2="140" stroke="currentColor" stroke-width="1.2" marker-end="url(#arrow3)"/>
<rect x="596" y="112" width="64" height="56" rx="8" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="628" y="136" text-anchor="middle" font-size="12" fill="currentColor">Outbound</text>
<text x="628" y="152" text-anchor="middle" font-size="9" fill="currentColor" opacity="0.7">webhooks</text>
</svg>
<figcaption>Cada transportadora roda em seu próprio serviço ECS, escalando de forma independente; a fila SNS/SQS funciona como buffer de resiliência entre essas camadas e o outbound, absorvendo indisponibilidades sem perder eventos.</figcaption>
</figure>

## Dificuldade 1: banco compartilhado e migrations bloqueantes

O primeiro problema sério apareceu na camada de dados. Como era um monólito modular, o banco de dados era **compartilhado entre todos os módulos** — inbound, os serviços por transportadora, e outbound liam e escreviam nas mesmas tabelas.

O atrito ficou evidente na hora de aplicar migrations. Sempre que uma migration precisava alterar uma tabela usada por múltiplos workers, era necessário **parar o projeto inteiro** — caso contrário, workers rodando com o schema antigo começavam a falhar contra o schema novo (ou vice-versa) no meio da execução.

Na prática, isso significava:

- Uma mudança de schema em um módulo específico virava um evento coordenado, não uma alteração isolada.
- A mitigação inicial foi agendar migrations de impacto em horários de baixo movimento — o que reduzia o risco de downtime percebido pelo negócio, mas não resolvia o problema de fundo: o acoplamento continuava lá, só escondido atrás de uma janela de manutenção.

### A solução: comunicação orientada a eventos com SNS/SQS

Com o problema mapeado, a decisão foi migrar toda a comunicação entre as camadas para eventos usando **SNS/SQS**. A lógica é simples e poderosa: se o sistema ficar indisponível por causa de uma migration (ou qualquer outro motivo), a mensagem não se perde — ela fica retida na fila e é reprocessada assim que o sistema volta.

Isso não eliminou o banco compartilhado nem a necessidade de coordenar migrations, mas mudou o efeito colateral de um problema: em vez de erros descartados silenciosamente ou retries manuais, o sistema passou a tolerar indisponibilidade temporária sem perda de dados. A fila virou um buffer de resiliência entre módulos que, arquiteturalmente, ainda estavam mais acoplados do que gostaríamos.

## Dificuldade 2: deploy acoplado

O segundo atrito veio do processo de deploy. Como inbound, os serviços por transportadora e outbound viviam no mesmo código-base, qualquer mudança — mesmo pequena, mesmo isolada a uma única transportadora — corria o risco de exigir um deploy que tocava o sistema inteiro.

A solução aplicada foi dividir o deploy em unidades menores: **inbound e outbound passaram a ter pipelines de deploy separados**. Isso reduziu o raio de impacto de cada mudança — um ajuste na lógica de outbound não precisava mais arrastar um redeploy da camada de inbound, e vice-versa.

Foi uma melhoria real, mas parcial: ainda não era uma separação completa por transportadora, e sim por camada funcional. Um bug introduzido em outbound, por exemplo, ainda afetava o webhook de todas as transportadoras ao mesmo tempo — só que agora sem precisar redeployar inbound junto.

## Dificuldade 3: escalabilidade desigual entre transportadoras

O terceiro problema é bem característico de sistemas que integram múltiplos parceiros externos: **cada transportadora gera um volume de pacotes completamente diferente**. Uma transportadora grande pode gerar dez vezes mais tráfego do que uma pequena, e esse volume muda ao longo do tempo, por sazonalidade ou crescimento do parceiro.

Em um monólito "puro", isso seria um problema sério: escalar o sistema inteiro para atender o pico de uma única transportadora desperdiça recursos com todas as outras. A resposta, aqui, foi dar a **cada transportadora seu próprio serviço ECS, com número de tasks independente**. Isso permitiu escalar horizontal e verticalmente cada frente de acordo com sua demanda real, sem impactar as demais.

Vale notar o que isso realmente significa: na prática, esse ajuste já é um passo fora do monólito modular "clássico" em direção a algo mais próximo de serviços independentes — ainda que compartilhando código-base e banco de dados. É um lembrete de que, quando a demanda de escala diverge o suficiente entre módulos, a arquitetura tende a ser empurrada para fora do monólito, com ou sem uma decisão formal nesse sentido.

## O que fica desses três atritos

- **Banco compartilhado tem um custo que só aparece na operação**, não no design inicial — migrations que "parecem simples" no papel se tornam pontos de coordenação obrigatória em produção.
- **Comunicação orientada a eventos (SNS/SQS) não resolve acoplamento, mas absorve sua consequência mais dolorosa**: perda de mensagens durante indisponibilidade. É uma rede de segurança, não uma cura.
- **Deploy acoplado se resolve incrementalmente** — não é preciso quebrar tudo em microsserviços de uma vez; dividir por camada funcional (inbound/outbound) já reduz bastante o raio de impacto.
- **Escalabilidade desigual entre integrações externas é um sinal precoce** de que partes do seu "monólito modular" já deveriam ser tratadas como serviços independentes, mesmo que o código ainda viva junto.

---

Monólito modular não é uma arquitetura errada — é uma escolha de trade-off, como qualquer outra. Mas vale entrar nela sabendo que alguns dos problemas que ela promete adiar (acoplamento de deploy, escalabilidade desigual, coordenação de schema) não desaparecem: eles só esperam o momento certo para aparecer, geralmente quando o sistema já está em produção e o custo de resolver é maior.

Com um time e recursos enxutos, essas soluções incrementais não foram uma limitação vergonhosa — foram a decisão certa dado o contexto. O ganho real dessa experiência não foi encontrar a arquitetura perfeita — foi aprender a reconhecer esses sinais mais cedo da próxima vez, e a escolher, de forma consciente, onde vale a pena investir tempo de reescrita e onde uma mitigação pontual resolve bem o suficiente.
`,
    },
];

export function getSortedArticles() {
    return [...ARTICLES].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getArticleBySlug(slug) {
    return ARTICLES.find((article) => article.slug === slug);
}
