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
];

export function getSortedArticles() {
    return [...ARTICLES].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getArticleBySlug(slug) {
    return ARTICLES.find((article) => article.slug === slug);
}
