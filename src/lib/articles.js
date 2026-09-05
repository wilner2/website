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
];

export function getSortedArticles() {
    return [...ARTICLES].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getArticleBySlug(slug) {
    return ARTICLES.find((article) => article.slug === slug);
}
