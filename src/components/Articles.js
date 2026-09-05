import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiFileText } from 'react-icons/fi';
import { useLanguage } from './ui/language-provider';
import { getSortedArticles } from '../lib/articles';

const Articles = () => {
    const { content, language } = useLanguage();
    const { articles: t } = content;
    const articles = getSortedArticles();

    const formatDate = (iso) =>
        new Date(iso).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

    return (
        <section id="articles" className="py-16 sm:py-20 lg:py-24 bg-zinc-50/50 dark:bg-muted/10 relative overflow-hidden transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
                    {t.title}
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    {t.subtitle}
                </p>

                {articles.length === 0 ? (
                    <p className="text-center text-muted-foreground">{t.empty}</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {articles.map((article) => (
                            <Link
                                key={article.slug}
                                to={`/artigos/${article.slug}`}
                                className="group flex flex-col bg-card text-card-foreground border border-border/60 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                                    <FiFileText className="h-3.5 w-3.5" />
                                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                                </div>
                                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-muted-foreground flex-1 mb-4">
                                    {article.excerpt}
                                </p>
                                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                                    {t.readMore} <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Articles;
