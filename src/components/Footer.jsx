import React from 'react';
import { Facebook, Instagram, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#050505] border-t border-white/10 py-12 px-6 mt-auto relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Logo and Copyright */}
                <div className="flex flex-col items-center md:items-start gap-3">
                    <a href="#" className="flex items-center gap-3">
                        <img src="/logo.png" alt="AWM OS Logo" className="h-10 w-auto object-contain" onError={(e) => { e.target.classList.add('hidden'); }} />
                        <span className="font-sans font-bold text-2xl tracking-tighter text-white">
                            AWM OS
                        </span>
                    </a>
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} AWM OS. Все права защищены.
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-magenta hover:border-magenta/50 hover:bg-magenta/10 transition-all duration-300"
                    >
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-magenta hover:border-magenta/50 hover:bg-magenta/10 transition-all duration-300"
                    >
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a
                        href="https://t.me/yourtelegram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-magenta hover:border-magenta/50 hover:bg-magenta/10 transition-all duration-300"
                    >
                        <Send className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
