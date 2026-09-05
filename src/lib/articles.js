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
        slug: 'exemplo-como-organizar-microsservicos',
        title: 'Como eu organizo microsserviços em produção',
        date: '2026-08-15',
        excerpt:
            'Um artigo de exemplo (placeholder) mostrando como esta seção funciona. Substitua pelo conteúdo real dos seus artigos do Medium.',
        content: `Este é um artigo de exemplo para demonstrar a seção de Artigos do portfólio.

## Como substituir este conteúdo

Edite \`src/lib/articles.js\` e adicione um objeto para cada artigo real, com os campos \`slug\`, \`title\`, \`date\`, \`excerpt\` e \`content\` (em Markdown).

## Por que hospedar o conteúdo aqui

Manter o texto completo no seu próprio domínio, em vez de só linkar pro Medium, faz o Google indexar *o seu site* como a fonte original do conteúdo — isso conta pra SEO e pra construção da sua marca pessoal a longo prazo.

Se quiser continuar publicando no Medium também, use a opção **Import a story** do Medium e aponte o campo *canonical URL* para o link deste artigo aqui no seu site. Assim o Medium ainda te dá alcance e distribuição, mas o crédito de SEO fica com o seu domínio.

### Suporte a Markdown

Este artigo é renderizado a partir de Markdown, então você pode usar:

- Listas como esta
- **Negrito** e *itálico*
- \`código inline\`
- Blocos de código:

\`\`\`js
function ola() {
  console.log('Olá, mundo!');
}
\`\`\`

> E também citações em bloco.
`,
    },
];

export function getSortedArticles() {
    return [...ARTICLES].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getArticleBySlug(slug) {
    return ARTICLES.find((article) => article.slug === slug);
}
