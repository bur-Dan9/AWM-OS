import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Преимущества', href: '#trust' },
        { name: 'Возможности', href: '#process' },
        { name: 'Команда', href: '#team' },
        { name: 'Отзывы', href: '#reviews' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${(isScrolled || isMobileMenuOpen) ? 'bg-black border-b border-white/10 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3">
                    <img src="/logo.png" alt="AWM OS Logo" className="h-10 w-auto object-contain" onError={(e) => { e.target.classList.add('hidden'); }} />
                    <span className="font-sans font-bold text-2xl tracking-tighter text-white">
                        AWM OS
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex flex-1 justify-center">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <a
                        href="#audit"
                        className="text-sm font-medium text-white px-5 py-2.5 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 transition-colors"
                    >
                        Связаться
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 shadow-2xl">
                    <nav className="flex flex-col px-6 py-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-gray-300 hover:text-white py-4 border-b border-white/5"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#audit"
                            className="mt-6 text-center text-lg font-medium text-white px-5 py-3 rounded-full bg-gradient-to-r from-coral to-magenta"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Связаться
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
