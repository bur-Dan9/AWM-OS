import React, { useState } from 'react';
import { X, Send, CheckCircle2, User, Briefcase, MessageSquare } from 'lucide-react';

const WaitlistModal = ({ isOpen, onClose, service }) => {
    const [step, setStep] = useState('form'); // 'form' or 'success'
    const [formData, setFormData] = useState({
        name: '',
        niche: '',
        contact: ''
    });
    const [errors, setErrors] = useState({});

    if (!isOpen) return null;

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Введите ваше имя';
        if (!formData.niche.trim()) newErrors.niche = 'Введите нишу бизнеса';
        if (!formData.contact.trim()) newErrors.contact = 'Введите контактные данные';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Here we would typically send data to a backend
            console.log('Sending waitlist data:', { ...formData, service });
            setStep('success');
        }
    };

    const handleClose = () => {
        setStep('form');
        setFormData({ name: '', niche: '', contact: '' });
        setErrors({});
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                id="modalOverlay"
                className="absolute inset-0 bg-bg/80 backdrop-blur-md"
                onClick={handleClose}
            ></div>

            {/* Modal Content */}
            <div className="glass-card w-full max-w-lg rounded-[40px] overflow-hidden relative z-10 animate-in zoom-in-95 duration-300 border-brand-purple/20">
                <button
                    id="closeModal"
                    onClick={handleClose}
                    className="absolute top-6 right-6 p-2 text-muted-text hover:text-text hover:bg-white/10 rounded-full transition-colors z-20"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-8 md:p-12">
                    {step === 'form' ? (
                        <>
                            <div className="inline-flex px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-[10px] font-bold uppercase tracking-widest mb-6 border border-brand-purple/20">
                                Waitlist: {service || 'General'}
                            </div>

                            <h3 className="text-3xl md:text-4xl font-display font-bold text-text mb-2">
                                WAITLIST
                            </h3>
                            <p className="text-muted-text mb-8 text-sm">
                                Оставьте заявку, чтобы получить ранний доступ и забронировать место в очереди.
                            </p>

                            <form id="waitlistForm" onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-1">
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-text" />
                                        <input
                                            type="text"
                                            data-lead="name"
                                            placeholder="Ваше имя"
                                            value={formData.name}
                                            onChange={(e) => {
                                                setFormData({ ...formData, name: e.target.value });
                                                if (errors.name) setErrors({ ...errors, name: '' });
                                            }}
                                            className={`w-full bg-bg/50 border ${errors.name ? 'border-red-500/50' : 'border-card-border'} rounded-2xl py-4 pl-12 pr-4 text-text focus:outline-none focus:border-brand-purple transition-all`}
                                        />
                                    </div>
                                    {errors.name && <p className="text-[10px] text-red-500 ml-4">{errors.name}</p>}
                                </div>

                                <div className="space-y-1">
                                    <div className="relative">
                                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-text" />
                                        <input
                                            type="text"
                                            data-lead="niche"
                                            placeholder="Ниша вашего бизнеса"
                                            value={formData.niche}
                                            onChange={(e) => {
                                                setFormData({ ...formData, niche: e.target.value });
                                                if (errors.niche) setErrors({ ...errors, niche: '' });
                                            }}
                                            className={`w-full bg-bg/50 border ${errors.niche ? 'border-red-500/50' : 'border-card-border'} rounded-2xl py-4 pl-12 pr-4 text-text focus:outline-none focus:border-brand-purple transition-all`}
                                        />
                                    </div>
                                    {errors.niche && <p className="text-[10px] text-red-500 ml-4">{errors.niche}</p>}
                                </div>

                                <div className="space-y-1">
                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-text" />
                                        <input
                                            type="text"
                                            data-lead="contact"
                                            placeholder="Telegram @username или телефон"
                                            value={formData.contact}
                                            onChange={(e) => {
                                                setFormData({ ...formData, contact: e.target.value });
                                                if (errors.contact) setErrors({ ...errors, contact: '' });
                                            }}
                                            className={`w-full bg-bg/50 border ${errors.contact ? 'border-red-500/50' : 'border-card-border'} rounded-2xl py-4 pl-12 pr-4 text-text focus:outline-none focus:border-brand-purple transition-all`}
                                        />
                                    </div>
                                    {errors.contact && <p className="text-[10px] text-red-500 ml-4">{errors.contact}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-brand-purple to-brand-magenta text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-brand-purple/20 hover:scale-[1.02] transition-all mt-4"
                                >
                                    СООБЩИТЬ МНЕ О ЗАПУСКЕ
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-4">
                            <div className="w-20 h-20 rounded-3xl bg-brand-purple/10 flex items-center justify-center text-brand-purple mx-auto mb-8 animate-bounce">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>

                            <h3 className="text-3xl font-display font-bold text-text mb-4">
                                Успешно!
                            </h3>
                            <p className="text-muted-text mb-10 leading-relaxed text-lg">
                                Мы получили вашу заявку. <br />
                                Подпишитесь на нашего бота, чтобы мгновенно узнать о запуске и вашей позиции в очереди.
                            </p>

                            <a
                                href="https://t.me/AWMOS_bot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full bg-brand-purple hover:bg-brand-magenta text-white py-5 rounded-2xl font-bold text-xl transition-all shadow-xl shadow-brand-purple/30"
                            >
                                Открыть бота в Telegram <Send className="w-6 h-6" />
                            </a>

                            <button
                                onClick={handleClose}
                                className="mt-8 text-sm font-semibold text-muted-text hover:text-text transition-colors"
                            >
                                Вернуться на сайт
                            </button>
                        </div>
                    )}

                    <div className="mt-10 pt-8 border-t border-card-border flex items-center justify-center gap-4">
                        <div className="flex -space-x-3">
                            <div className="w-8 h-8 rounded-full border-2 border-bg bg-indigo-500 flex items-center justify-center text-[10px] text-white">A</div>
                            <div className="w-8 h-8 rounded-full border-2 border-bg bg-purple-500 flex items-center justify-center text-[10px] text-white">B</div>
                            <div className="w-8 h-8 rounded-full border-2 border-bg bg-pink-500 flex items-center justify-center text-[10px] text-white">C</div>
                        </div>
                        <span className="text-xs text-muted-text">
                            <strong className="text-text">1,240+</strong> человек уже в очереди
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaitlistModal;
