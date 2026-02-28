import React, { useState, useRef } from 'react';
import { ArrowRight, Play, Shield, Zap, BarChart, Users } from 'lucide-react';

const Hero = ({ onJoinWaitlist }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const scrollPosition = scrollRef.current.scrollLeft;
        const itemWidth = scrollRef.current.clientWidth;
        const newIndex = Math.round(scrollPosition / itemWidth);
        setActiveIndex(newIndex);
    };

    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-20">
            {/* Background Glows */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-purple/20 dark:bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-brand-magenta/10 dark:bg-brand-magenta/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="page-container w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 relative">
                {/* Left Content */}
                <div className="flex flex-col items-start text-left min-w-0">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-bold mb-8 border border-brand-purple/20 animate-pulse">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple"></span>
                        </span>
                        AWM OS Beta: Осталось 12 мест на этот месяц
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight text-text mb-6">
                        AWM OS: <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-magenta">
                            ВАШ МАРКЕТИНГ <br /> НА АВТОПИЛОТЕ
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-text mb-10 max-w-xl leading-relaxed">
                        Единая AI-экосистема в Telegram, которая заменяет целый отдел маркетинга. Пока вы отдыхаете, наши агенты работают 24/7.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-12">
                        <button
                            onClick={onJoinWaitlist}
                            className="bg-gradient-to-r from-brand-purple to-brand-magenta text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-brand-purple/25 hover:scale-105 transition-all flex items-center gap-2"
                        >
                            Вступить в Waitlist <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-text border border-card-border hover:bg-gray-50/10 transition-all">
                            <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center">
                                <Play className="w-4 h-4 text-white fill-white" />
                            </div>
                            Смотреть демо
                        </button>
                    </div>
                </div>

                {/* Right Content - Phone Mockup */}
                <div className="relative flex justify-center lg:justify-end min-w-0">
                    <div className="absolute inset-0 bg-brand-purple/20 blur-[100px] rounded-full scale-75 -z-10 animate-pulse"></div>
                    <div className="relative w-full max-w-[800px] animate-float">
                        <div class="relative w-full drop-shadow-2xl aspect-[9/16] overflow-hidden awm-phone">
                            {/* LIGHT (white) */}
                            <img alt="AWM OS Telegram Interface"
                                class="absolute inset-0 w-full h-full object-contain awm-slide awm-slide-1 awm-light"
                                src="/assets/wite 1.png" />
                            <img alt=""
                                class="absolute inset-0 w-full h-full object-contain awm-slide awm-slide-2 awm-light"
                                src="/assets/wite 2.png" />
                            <img alt=""
                                class="absolute inset-0 w-full h-full object-contain awm-slide awm-slide-3 awm-light"
                                src="/assets/wite 3.png" />

                            {/* DARK (black) */}
                            <img alt="AWM OS Telegram Interface (dark)"
                                class="absolute inset-0 w-full h-full object-contain awm-slide awm-slide-1 awm-dark"
                                src="/assets/black 1.png" />
                            <img alt=""
                                class="absolute inset-0 w-full h-full object-contain awm-slide awm-slide-2 awm-dark"
                                src="/assets/black 2.png" />
                            <img alt=""
                                class="absolute inset-0 w-full h-full object-contain awm-slide awm-slide-3 awm-dark"
                                src="/assets/black 3.png" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Value Cards Row */}
            <div className="page-container w-full z-10 relative">
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto pb-8 md:grid md:grid-cols-3 gap-6 snap-x snap-mandatory hide-scrollbar"
                >
                    <div className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group hover:translate-y-[-5px] transition-all w-[85vw] shrink-0 md:w-auto snap-center">
                        <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center mb-6 text-brand-purple">
                            <Shield className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-text mb-2">0% человеческого фактора</h3>
                        <p className="text-sm text-muted-text leading-relaxed">Система никогда не устает, не допускает ошибок в настройках и работает без выходных.</p>
                    </div>
                    <div className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group hover:translate-y-[-5px] transition-all border-brand-purple/20 w-[85vw] shrink-0 md:w-auto snap-center">
                        <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center mb-6 text-brand-purple">
                            <Users className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-text mb-2">10+ AI-ассистентов</h3>
                        <p className="text-sm text-muted-text leading-relaxed">Специализированные агенты для контента, рекламы, аналитики и стратегии в одном окне.</p>
                    </div>
                    <div className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group hover:translate-y-[-5px] transition-all w-[85vw] shrink-0 md:w-auto snap-center">
                        <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center mb-6 text-brand-purple">
                            <BarChart className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-text mb-2">Real-time Аналитика</h3>
                        <p className="text-sm text-muted-text leading-relaxed">Молниеносная реакция на изменения рынка и автоматическая корректировка кампаний.</p>
                    </div>
                </div>

                {/* Mobile Swipe Indicator */}
                <div className="flex md:hidden items-center justify-center gap-2 mt-4 text-brand-purple/60 pb-6">
                    <div className="flex gap-1.5">
                        {[0, 1, 2].map((idx) => (
                            <div
                                key={idx}
                                className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? "w-4 bg-brand-purple" : "w-1.5 bg-brand-purple/40"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
