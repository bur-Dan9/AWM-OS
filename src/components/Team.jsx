import React from 'react';

const Team = () => {
    const members = [
        {
            name: "Алексей",
            role: "Ведущий стратег",
            spec: "Специализируется на выводе локальных брендов на рынки Европы.",
            result: "Помог 15 компаниям уйти от модели «продажи только по рекомендации» к стабильному потоку лидов из сети."
        },
        {
            name: "Мария",
            role: "AI-инженер",
            spec: "Упрощает внедрение нейросетей для владельцев бизнеса без IT-бэкграунда.",
            result: "Сократила время на обработку входящих заявок в проектах клиентов на 40% через автоматизацию."
        },
        {
            name: "Дмитрий",
            role: "Аналитик окупаемости",
            spec: "Находит «дыры» в маркетинговом бюджете и перенаправляет средства в работающие каналы.",
            result: "В 12 проектах добился ROI 300%+, исправив ошибки предыдущих подрядчиков, сливавших бюджет впустую."
        }
    ];

    return (
        <section className="py-24 px-6 bg-black relative overflow-hidden" id="team">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-16">
                    Команда, работающая на ваш <span className="text-magenta">ROI</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {members.map((member, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center transition-colors">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-magenta to-purple-600 p-[2px] mb-6 shadow-[0_0_20px_rgba(232,28,255,0.3)]">
                                <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-2xl font-serif font-bold">
                                    {member.name.charAt(0)}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            <p className="text-magenta text-sm mb-6">{member.role}</p>

                            <p className="text-gray-400 text-sm mb-6 px-4">{member.spec}</p>

                            <div className="mt-auto w-full pt-6 border-t border-white/10">
                                <p className="text-sm font-medium leading-relaxed">{member.result}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
