import React from 'react';
import { Clock, ShieldCheck, BarChart } from 'lucide-react';

const Trust = () => {
    const cards = [
        {
            icon: <Clock className="w-8 h-8 text-coral mb-4" />,
            title: "72 часа до первых результатов",
            text: "Запускаем AI-аналитику и первые гипотезы в 20 раз быстрее, чем традиционные агентства.",
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-coral mb-4" />,
            title: "0 скрытых платежей",
            text: "В договоре фиксируется конечная стоимость без ежегодных обязательств и «платных консультаций».",
        },
        {
            icon: <BarChart className="w-8 h-8 text-coral mb-4" />,
            title: "45+ кейсов в СНГ и Европе",
            text: "Имеем подтвержденный опыт масштабирования бизнеса именно в вашем регионе, а не только теорию.",
        }
    ];

    return (
        <section className="w-full relative overflow-hidden border-t border-white/10" id="trust">
            {/* Ambient Glow - Now covers full width */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-magenta/10 rounded-full blur-[150px] pointer-events-none z-[-1]" />

            <div className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/5 hover:border-magenta/50 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-magenta/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                {card.icon}
                                <h3 className="text-2xl font-sans font-bold text-white mt-6 mb-4">{card.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{card.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trust;
