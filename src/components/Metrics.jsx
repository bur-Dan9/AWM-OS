import React from 'react';

const Metrics = () => {
    const metrics = [
        { label: "Performance ROI", value: "300%+", subtext: "Гарантированный рост" },
        { label: "Опыт на рынке", value: "4+ года", subtext: "Более 100 проектов" },
        { label: "Экономия бюджета", value: "60%", subtext: "За счет AI-оптимизации" }
    ];

    return (
        <section className="py-20 bg-bg">
            <div className="page-container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center">
                            <div className="text-sm font-bold text-brand-purple uppercase tracking-[0.2em] mb-4">
                                {metric.label}
                            </div>
                            <div className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-text mb-4 whitespace-nowrap">
                                {metric.value}
                            </div>
                            <div className="text-muted-text font-medium">
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
