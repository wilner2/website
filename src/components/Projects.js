import React, { useEffect, useState } from 'react';
import { FiGithub, FiStar, FiGitBranch, FiExternalLink } from 'react-icons/fi';
import { Button } from './ui/button';
import { useLanguage } from './ui/language-provider';

const GITHUB_USER = 'wilner2';
const CACHE_KEY = `gh-repos-cache:${GITHUB_USER}`;
const CACHE_TTL = 60 * 60 * 1000; // 1h

const Projects = () => {
  const { content } = useLanguage();
  const { projects: t } = content;

  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
        if (cached && Date.now() - cached.ts < CACHE_TTL) {
          setRepos(cached.data);
          setStatus('ready');
          return;
        }
      } catch (err) {
        // corrupted cache entry, ignore and fetch fresh
      }

      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`
        );
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        const data = await res.json();
        if (cancelled) return;

        const filtered = data
          .filter((repo) => !repo.fork && !repo.archived)
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

        setRepos(filtered);
        setStatus('ready');
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data: filtered }));
        } catch (err) {
          // storage full or unavailable, safe to ignore
        }
      } catch (err) {
        if (cancelled) return;
        try {
          const stale = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
          if (stale) {
            setRepos(stale.data);
            setStatus('ready');
            return;
          }
        } catch (parseErr) {
          // no usable stale cache
        }
        setStatus('error');
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden transition-colors duration-300 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
          {t.title}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t.subtitle}
        </p>

        {status === 'loading' && (
          <p className="text-center text-muted-foreground">{t.loading}</p>
        )}

        {status === 'error' && (
          <div className="text-center">
            <p className="text-muted-foreground mb-4">{t.error}</p>
            <Button variant="outline" size="sm" asChild>
              <a
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="mr-2 h-4 w-4" /> {t.viewAll}
              </a>
            </Button>
          </div>
        )}

        {status === 'ready' && repos.length === 0 && (
          <p className="text-center text-muted-foreground">{t.empty}</p>
        )}

        {status === 'ready' && repos.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-card text-card-foreground border border-border/60 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors break-words">
                      {repo.name}
                    </h3>
                    <FiExternalLink className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
                  </div>

                  <p className="text-sm text-muted-foreground flex-1 mb-4">
                    {repo.description || '—'}
                  </p>

                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.topics.slice(0, 4).map((topic) => (
                        <span
                          key={topic}
                          className="text-xs border px-2 py-0.5 rounded-full text-muted-foreground"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    {repo.language && (
                      <span className="inline-flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        {repo.language}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1">
                      <FiStar className="h-3.5 w-3.5" /> {repo.stargazers_count}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <FiGitBranch className="h-3.5 w-3.5" /> {repo.forks_count}
                    </span>
                  </div>

                  <p className="mt-3 text-[11px] text-muted-foreground/80">
                    {t.updated} {formatDate(repo.pushed_at)}
                  </p>
                </a>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" asChild>
                <a
                  href={`https://github.com/${GITHUB_USER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub className="mr-2 h-4 w-4" /> {t.viewAll}
                </a>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
