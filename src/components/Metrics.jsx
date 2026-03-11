import React from 'react';

const Metrics = () => {
    const metrics = [
        { label: "Performance ROI", value: "300%+", subtext: "Гарантированный рост" },
        { label: "Опыт на рынке", value: "4+ года", subtext: "Более 100 проектов" },
        { label: "Экономия бюджета", value: "60%", subtext: "За счет AI-оптимизации" }
    ];

    return (
        <section className="py-20 bg-bg">
            <div className="w-full max-w-[1200px] mx-auto px-2 sm:px-4 md:px-6">
                <div className="grid grid-cols-3 gap-1 sm:gap-4 md:gap-12">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center min-w-0">
                            <div className="font-bold text-brand-purple uppercase leading-tight mb-1 sm:mb-3 md:mb-4 tracking-wide"
                                 style={{ fontSize: 'clamp(7px, 2vw, 14px)' }}>
                                {metric.label}
                            </div>
                            <div className="font-display font-bold text-text mb-1 sm:mb-3 md:mb-4"
                                 style={{ fontSize: 'clamp(16px, 6.5vw, 72px)' }}>
                                {metric.value}
                            </div>
                            <div className="text-muted-text font-medium leading-tight"
                                 style={{ fontSize: 'clamp(8px, 2.2vw, 16px)' }}>
                                {metric.subtext}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Metrics;
