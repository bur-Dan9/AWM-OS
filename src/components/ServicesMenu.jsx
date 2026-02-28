import React from 'react';
import { Sparkles, LayoutGrid, SearchCode, Zap } from 'lucide-react';

const ServicesMenu = ({ onJoinWaitlist }) => {
    const services = [
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: "AI-Маркетинг Автопилот",
            badge: "Subscription",
            description: "Полное сопровождение вашего бизнеса AI-агентами 24/7.",
            action: "Настроить автопилот"
        },
        {
            icon: <LayoutGrid className="w-6 h-6" />,
            title: "Разработка экосистемы",
            badge: "One-off",
            description: "Создание сайта и Telegram Mini-App под ключ.",
            action: "Создать инфраструктуру"
        },
        {
            icon: <SearchCode className="w-6 h-6" />,
            title: "Глубокий AI-аудит",
            badge: "Diagnostic",
            description: "Полная диагностика воронок и поиск точек роста.",
            action: "Начать аудит"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Content & Ads Turbo",
            badge: "Boost",
            description: "Мгновенное ускорение трафика и креативов.",
            action: "Запустить буст"
        }
    ];

    return (
        <section className="py-24 bg-brand-purple-soft border-t border-card-border" id="services">
            <div className="page-container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-text mb-6">
                        Меню услуг SOFFI
                    </h2>
                    <p className="text-muted-text text-lg max-w-2xl mx-auto">
                        Выберите формат сотрудничества, который подходит вашему бизнесу сегодня.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <div key={idx} className="glass-card p-8 rounded-[32px] flex flex-col group border border-slate-200 dark:border-white/5 hover:border-brand-purple/40 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-6 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <div className="inline-flex px-2 py-0.5 rounded-md bg-brand-purple/5 text-brand-purple text-[10px] font-bold uppercase tracking-wider mb-4 w-fit">
                                {service.badge}
                            </div>
                            <h4 className="text-lg font-bold text-text mb-4">
                                {service.title}
                            </h4>
                            <p className="text-sm text-muted-text leading-relaxed mb-8 flex-grow">
                                {service.description}
                            </p>
                            <button
                                onClick={() => onJoinWaitlist(service.title)}
                                className="w-full py-3 rounded-xl border-2 border-brand-purple text-sm font-bold text-brand-purple hover:bg-brand-purple hover:text-white transition-all shadow-sm shadow-brand-purple/20"
                            >
                                {service.action}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesMenu;
