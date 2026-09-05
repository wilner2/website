import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FiArrowLeft, FiFileText } from 'react-icons/fi';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from './ui/language-provider';
import { getArticleBySlug } from '../lib/articles';

const markdownComponents = {
    h1: ({ children }) => <h1 className="text-3xl font-bold text-foreground mt-10 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold text-foreground mt-8 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold text-foreground mt-6 mb-2">{children}</h3>,
    p: ({ children }) => <p className="text-base leading-relaxed text-foreground/90 mb-4">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside space-y-1 mb-4 text-foreground/90">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside space-y-1 mb-4 text-foreground/90">{children}</ol>,
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    a: ({ href, children }) => (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary/80">
            {children}
        </a>
    ),
    strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
    img: ({ src, alt }) => (
        <img
            src={src}
            alt={alt || ''}
            loading="lazy"
            className="w-full rounded-lg border border-border/60 my-2"
        />
    ),
    blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-primary/40 pl-4 italic text-muted-foreground my-4">{children}</blockquote>
    ),
    code: ({ className, children }) => {
        // Fenced code blocks get a language-* className from remark; inline `code` never does.
        const isBlock = Boolean(className);
        return isBlock ? (
            <code className={`font-mono text-sm ${className}`}>{children}</code>
        ) : (
            <code className="bg-secondary text-secondary-foreground rounded px-1.5 py-0.5 text-sm font-mono">{children}</code>
        );
    },
    pre: ({ children }) => (
        <pre className="bg-secondary text-secondary-foreground rounded-lg p-4 overflow-x-auto mb-4">{children}</pre>
    ),
};

const ArticlePage = () => {
    const { slug } = useParams();
    const { content, language } = useLanguage();
    const { articles: t } = content;
    const article = getArticleBySlug(slug);

    const formatDate = (iso) =>
        new Date(iso).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

    return (
        <>
            <Header />
            <main className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 bg-background min-h-screen">
                <div className="max-w-3xl mx-auto">
                    <Link
                        to="/#articles"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <FiArrowLeft className="h-4 w-4" /> {t.backToHome}
                    </Link>

                    {!article ? (
                        <p className="text-muted-foreground">{t.notFound}</p>
                    ) : (
                        <article>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                                <FiFileText className="h-3.5 w-3.5" />
                                <time dateTime={article.date}>{formatDate(article.date)}</time>
                            </div>
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-8">
                                {article.title}
                            </h1>
                            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                                {article.content}
                            </ReactMarkdown>
                        </article>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ArticlePage;
