import React from 'react';
import { Target, Search, Eye, PenTool, CalendarPlus, Rocket, LineChart, Globe } from 'lucide-react';

const Services = () => {
    const steps = [
        {
            icon: <Target className="w-6 h-6 text-coral" />,
            title: "Формирование заказа",
            desc: "Пользователь задаёт цель кампании или маркетинговую задачу через мобильное приложение или мини-апп в Telegram. AI-ассистенты автоматически распределяют задачи между собой."
        },
        {
            icon: <Search className="w-6 h-6 text-coral" />,
            title: "Анализ сайта и соцсетей",
            desc: "AI собирает данные о текущем контенте, активности и аудитории. Определяет слабые и сильные стороны."
        },
        {
            icon: <Eye className="w-6 h-6 text-coral" />,
            title: "Анализ конкурентов",
            desc: "AI оценивает конкурентов, выявляет лучшие практики и точки улучшения."
        },
        {
            icon: <PenTool className="w-6 h-6 text-coral" />,
            title: "Создание креативов",
            desc: "AI генерирует посты, графику, рекламные материалы в стиле бренда клиента. Контент адаптируется под платформы и соцсети."
        },
        {
            icon: <CalendarPlus className="w-6 h-6 text-coral" />,
            title: "Ведение соцсетей",
            desc: "AI планирует публикации, автоматизирует постинг, управляет профилями. Публикации и контент проходят через рекомендации AI."
        },
        {
            icon: <Rocket className="w-6 h-6 text-coral" />,
            title: "Запуск рекламы",
            desc: "AI создаёт рекламные кампании, настраивает таргетинг, распределяет бюджет. Автоматическая оптимизация для максимальной эффективности."
        },
        {
            icon: <LineChart className="w-6 h-6 text-coral" />,
            title: "Мониторинг и аналитика",
            desc: "AI отслеживает трафик, конверсии и ROI. Ассистенты дают пошаговые рекомендации для улучшения результатов."
        },
        {
            icon: <Globe className="w-6 h-6 text-coral" />,
            title: "Генерация сайтов с AI",
            desc: "При необходимости AI создаёт веб-сайт клиента под бренд и стиль компании. Сайт интегрируется с Telegram Mini App."
        }
    ];

    return (
        <section className="w-full relative overflow-hidden" id="process">
            {/* Background Glow - Now covers full width */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-full bg-magenta/10 rounded-full blur-[150px] pointer-events-none z-[-1]" />

            <div className="py-24 px-6 max-w-7xl mx-auto relative z-10">
                <div className="text-left mb-16 max-w-3xl">
                    <h2 className="text-4xl md:text-6xl font-sans font-bold mb-6 text-white tracking-tight">
                        Наш подход к <span className="text-magenta">результату</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                        Мы разделили процесс на 8 этапов, чтобы обеспечить максимальную прозрачность и контроль на каждом шаге вашего роста.
                    </p>
                </div>

                <div className="space-y-20">
                    {/* Phase 1 */}
                    <div className="relative">
                        <h3 className="text-2xl font-sans font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-magenta text-white flex items-center justify-center text-sm">1</span>
                            Стратегия и Продвижение
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {steps.slice(0, 4).map((step, idx) => (
                                <div key={idx} className="bg-white/5 border border-magenta/40 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(157,0,255,0.2)] transition-all group flex flex-col items-center text-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-b from-magenta/5 to-transparent pointer-events-none"></div>
                                    <div className="w-14 h-14 rounded-full bg-magenta/10 flex items-center justify-center mb-5 relative z-10 border border-magenta/50 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(232,28,255,0.3)]">
                                        {step.icon}
                                    </div>
                                    <h4 className="text-white font-bold mb-2 text-sm md:text-base relative z-10">{step.title}</h4>
                                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed relative z-10">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="relative">
                        <h3 className="text-2xl font-sans font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-magenta text-white flex items-center justify-center text-sm">2</span>
                            Аналитика и Масштабирование
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {steps.slice(4, 8).map((step, idx) => (
                                <div key={idx} className="bg-white/5 border border-magenta/40 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(157,0,255,0.2)] transition-all group flex flex-col items-center text-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-b from-magenta/5 to-transparent pointer-events-none"></div>
                                    <div className="w-14 h-14 rounded-full bg-magenta/10 flex items-center justify-center mb-5 relative z-10 border border-magenta/50 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(232,28,255,0.3)]">
                                        {step.icon}
                                    </div>
                                    <h4 className="text-white font-bold mb-2 text-sm md:text-base relative z-10">{step.title}</h4>
                                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed relative z-10">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-16 text-center w-full flex justify-center">
                    <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/10 w-full sm:w-auto">
                        Запросить полный список возможностей
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
