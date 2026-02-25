import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="py-24 px-6 max-w-5xl mx-auto text-center" id="audit">
            <div className="bg-gradient-to-t from-magenta/10 to-transparent border border-white/10 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden flex flex-col items-center">

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-magenta/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-900/40 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-magenta" />
                        <span className="text-sm text-gray-300 font-medium">Будущее уже здесь</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-sans font-black mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        AWM OS
                    </h2>
                    <h3 className="text-xl md:text-2xl font-serif font-semibold text-coral mb-8 drop-shadow-md">
                        AI Web Marketing Operating System
                    </h3>

                    <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
                        Хватит кормить конкурентов. Запустите AI-маркетинг за присутствие в сети. Мы покажем точки роста вашего бизнеса и рассчитаем потенциальную прибыль без «воды».
                    </p>

                    <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-coral to-magenta text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-[1.02] shadow-[0_0_40px_rgba(232,28,255,0.4)] border border-white/20">
                        Перейти в Telegram
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
