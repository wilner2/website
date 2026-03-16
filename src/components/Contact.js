import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useLanguage } from './ui/language-provider';

const Contact = () => {
  const { content } = useLanguage();
  const { contact } = content;

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden transition-colors duration-300 border-t border-border/40">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center">
          {contact.title}
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {contact.getInTouch}
            </h3>
            <form className="space-y-4">
              <Input type="text" placeholder={contact.form.name} className="bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-ring" />
              <Input type="email" placeholder={contact.form.email} className="bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-ring" />
              <Textarea placeholder={contact.form.message} className="bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-ring min-h-[120px]" />
              <Button type="submit" className="w-full font-semibold">{contact.form.submit}</Button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {contact.info.title}
            </h3>
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="p-3 rounded-full bg-secondary/50 mr-4 group-hover:bg-primary/20 transition-colors border border-border/50">
                  <FiMail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{contact.info.email}</p>
                  <a
                    href="mailto:wilnerbruno@outlook.com"
                    className="text-lg text-foreground hover:text-primary transition-colors"
                  >
                    wilnerbruno@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="p-3 rounded-full bg-secondary/50 mr-4 group-hover:bg-primary/20 transition-colors border border-border/50">
                  <FiPhone className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{contact.info.phone}</p>
                  <span className="text-lg text-foreground">+55 31 99810-7159</span>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="p-3 rounded-full bg-secondary/50 mr-4 group-hover:bg-primary/20 transition-colors border border-border/50">
                  <FiMapPin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{contact.info.location}</p>
                  <span className="text-lg text-foreground">
                    Belo Horizonte, Minas Gerais, Brasil
                  </span>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="p-3 rounded-full bg-secondary/50 mr-4 group-hover:bg-primary/20 transition-colors border border-border/50">
                  <FiLinkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{contact.info.social}</p>
                  <a
                    href="https://www.linkedin.com/in/wilner-bruno-arcanjo-660b60106"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-foreground hover:text-primary transition-colors"
                  >
                    Perfil LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
