import React from 'react';
import { FiAward, FiBook, FiCheckCircle } from 'react-icons/fi';
import { useLanguage } from './ui/language-provider';

// Map icons to types for dynamic rendering based on translation
const iconMap = {
    "Certification": <FiAward className="h-6 w-6 text-primary" />,
    "Certificação": <FiAward className="h-6 w-6 text-primary" />,
    "Course": <FiBook className="h-6 w-6 text-primary" />,
    "Curso": <FiBook className="h-6 w-6 text-primary" />,
    "Bootcamp": <FiCheckCircle className="h-6 w-6 text-primary" />,
    "Specialization": <FiCheckCircle className="h-6 w-6 text-primary" />,
    "Especialização": <FiCheckCircle className="h-6 w-6 text-primary" />,
    "Formação Profissional": <FiBook className="h-6 w-6 text-primary" />,
    "Professional Training": <FiBook className="h-6 w-6 text-primary" />,
    "Treinamento Intensivo": <FiCheckCircle className="h-6 w-6 text-primary" />,
    "Intensive Training": <FiCheckCircle className="h-6 w-6 text-primary" />,
};

const getIcon = (type) => {
    // Default fallback
    return iconMap[type] || <FiCheckCircle className="h-6 w-6 text-primary" />;
};


const Education = () => {
    const { content } = useLanguage();
    const { education } = content;
    const certifications = education.list;

    return (
        <section id="education" className="py-16 sm:py-20 lg:py-24 bg-zinc-50/50 dark:bg-muted/10 relative overflow-hidden transition-colors duration-300">
            {/* Decorative background: Diagonal Stripes */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[repeating-linear-gradient(45deg,#0000_0px,#0000_10px,#00000008_10px,#00000008_11px)] dark:bg-[repeating-linear-gradient(45deg,#0000_0px,#0000_10px,#ffffff03_10px,#ffffff03_11px)] opacity-50"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
                    {education.title}
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    {education.subtitle}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((item, index) => {
                        const icon = getIcon(item.type);
                        return (
                            <div
                                key={index}
                                className="group relative bg-card border border-border/60 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    {icon}
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="mt-1 bg-primary/10 p-3 rounded-lg text-primary">
                                        {icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center text-sm text-muted-foreground mt-1 mb-2">
                                            <span className="font-semibold">{item.organization}</span>
                                            <span className="mx-2">•</span>
                                            <span className="bg-secondary px-2 py-0.5 rounded text-xs text-secondary-foreground border border-border">
                                                {item.type}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Education;