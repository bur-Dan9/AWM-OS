import React from 'react';

const Team = () => {
    const members = [
        {
            role: "Strategist",
            name: "Алексей Соколов",
            description: "Проектирование воронок и маркетинговых стратегий роста.",
            image: "https://api.dicebear.com/7.x/bottts/svg?seed=Alpha&mouth=smile01,smile02"
        },
        {
            role: "AI Engineer",
            name: "Михаил Левин",
            description: "Разработка автономных агентов и нейросетевых архитектур.",
            image: "https://api.dicebear.com/7.x/bottts/svg?seed=Beta&mouth=smile01,smile02"
        },
        {
            role: "ROI Analyst",
            name: "Евгений Давыдов",
            description: "Аналитика окупаемости и финансовое моделирование.",
            image: "https://api.dicebear.com/7.x/bottts/svg?seed=Gamma&mouth=smile01,smile02"
        }
    ];

    return (
        <section className="py-24 bg-bg border-t border-card-border">
            <div className="page-container text-center">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-text mb-6">
                    Наши компетенции
                </h2>
                <p className="text-muted-text text-lg max-w-2xl mx-auto mb-16">
                    Комбинация человеческого интеллекта и AI-технологий для вашего превосходства.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {members.map((member, idx) => (
                        <div key={idx} className="glass-card flex flex-col items-center p-8 rounded-3xl hover:translate-y-[-5px] transition-all">
                            <div className="w-32 h-32 rounded-full overflow-hidden bg-brand-purple/10 dark:bg-brand-purple/5 mb-6 border-2 border-brand-purple/20">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="text-xs font-bold text-brand-purple uppercase tracking-widest mb-2">
                                {member.role}
                            </div>
                            <h4 className="text-xl font-bold text-text mb-3">
                                {member.name}
                            </h4>
                            <p className="text-sm text-muted-text leading-relaxed max-w-[250px]">
                                {member.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
