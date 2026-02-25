import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden px-6 pt-24 pb-8 md:pb-16">
            {/* Floating Jellyfish Element - Repositioned lower for mobile */}
            <div className="absolute right-[-30%] md:right-[0%] top-[45%] md:top-1/2 -translate-y-1/2 w-[150%] sm:w-[100%] md:w-[50rem] opacity-70 md:opacity-90 animate-float pointer-events-none z-0 flex justify-end mix-blend-screen">
                <video
                    src="/grok-video-53194d8a-8236-401e-a9f0-31c891608610.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* Background Gradients */}
            <div className="absolute top-[0%] left-[-10%] w-96 h-96 bg-coral/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute right-0 bottom-0 w-96 h-96 bg-magenta/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            {/* Bottom Fade Mask - Ensures smooth transition to pure black section below */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />


            <div className="max-w-6xl mx-auto w-full flex flex-col items-start text-left z-10 relative mt-12 md:mt-0">
                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold leading-[1.05] tracking-tight text-white mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] max-w-3xl">
                    AWM OS: Ваш маркетинг <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-magenta drop-shadow-[0_0_15px_rgba(232,28,255,0.4)]">
                        на автопилоте
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed drop-shadow-md">
                    Мы помогаем бизнесу масштабироваться и превращать посетителей в лояльных клиентов.
                </p>

                {/* Neon Badges & CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto mb-16">
                    <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-gradient-to-r from-coral to-magenta text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-[1.03] shadow-[0_0_25px_rgba(232,28,255,0.5)] border border-white/20">
                        Начать сейчас
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    {/* Small Badges */}
                    <div className="flex flex-col gap-2 mt-4 sm:mt-0 sm:ml-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-magenta/20 border border-coral/30 backdrop-blur-md">
                            <Sparkles className="w-3 h-3 text-coral" />
                            <span className="text-xs text-white font-medium">7 дней бесплатно</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-magenta/20 border border-coral/30 backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
                            <span className="text-xs text-white font-medium">10 AI-ассистентов</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Row */}
                <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-auto">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-sm">
                        <div className="text-2xl md:text-4xl font-bold text-white mb-1">300+</div>
                        <div className="text-xs md:text-sm text-gray-400 leading-tight">довольных клиентов</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-sm">
                        <div className="text-2xl md:text-4xl font-bold text-white mb-1">4+</div>
                        <div className="text-xs md:text-sm text-gray-400 leading-tight">года опыта</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-sm col-span-2 md:col-span-1">
                        <div className="text-2xl md:text-4xl font-bold text-white mb-1">60%</div>
                        <div className="text-xs md:text-sm text-gray-400 leading-tight">средний рост конверсии</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
