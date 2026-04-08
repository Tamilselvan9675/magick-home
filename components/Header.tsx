"use client";

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const [lastScrollY, setLastScrollY] = useState(0);


    useGSAP(() => {
        gsap.from(headerRef.current, {
            yPercent: -100,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.2,
        });

        gsap.from('.nav-item', {
            opacity: 0,
            y: -10,
            stagger: 0.05,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.8,
        });
    }, { scope: headerRef });


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 100 && currentScrollY > lastScrollY) {

                gsap.to(headerRef.current, { yPercent: -100, duration: 0.5, ease: 'power2.inOut' });
            } else {

                gsap.to(headerRef.current, { yPercent: 0, duration: 0.5, ease: 'power2.out' });
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 w-full z-50 flex flex-col transition-colors duration-300 bg-black/80 backdrop-blur-lg border-b border-white/5"
        >

            <div className="hidden md:flex justify-between items-center px-8 py-2 border-b border-white/5 text-[9px] uppercase tracking-[0.2em] text-zinc-400">
                <div className="flex gap-6 nav-item">
                    <a href="tel:18002703068" className="hover:text-white transition-colors flex items-center gap-2">
                        <span>✆</span> 1800 270 3068
                    </a>
                    <a href="mailto:hello@magickhome.com" className="hover:text-white transition-colors flex items-center gap-2">
                        <span>✉</span> hello@magickhome.com
                    </a>
                </div>
                <div className="nav-item text-orange-400 font-medium">
                    Upto 50% Off On Selected Products
                </div>
                <div className="flex gap-4 nav-item">
                    {['IG', 'FB', 'YT', 'IN'].map((social) => (
                        <a key={social} href="#" className="hover:text-white transition-colors">{social}</a>
                    ))}
                </div>
            </div>


            <div className="flex justify-between items-center px-8 py-4">


                <div className="nav-item flex flex-col cursor-pointer">
                    <h1 className="text-xl font-light tracking-widest text-white leading-none">
                        <span className="text-orange-500 font-medium">MAGICK</span>HOME
                    </h1>
                    <span className="text-[8px] uppercase tracking-widest text-zinc-500 mt-1">Where Design Meets Delight</span>
                </div>


                <nav className="hidden lg:flex gap-10 text-[11px] uppercase tracking-widest font-light text-zinc-300">
                    {['Modular', 'Furniture', 'Offers', 'More'].map((link) => (
                        <div key={link} className="nav-item group relative cursor-pointer flex items-center gap-1 hover:text-white transition-colors">
                            {link}
                            <span className="text-[8px] opacity-50 group-hover:rotate-180 transition-transform duration-300">▼</span>

                            <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
                        </div>
                    ))}
                </nav>


                <div className="flex items-center gap-6">
                    <button className="nav-item hidden md:block bg-orange-500 hover:bg-orange-600 text-white text-[10px] uppercase tracking-widest py-3 px-6 rounded-sm transition-all duration-300">
                        Book a Free Consultation
                    </button>

                    <div className="flex items-center gap-4 text-zinc-300 nav-item">

                        <button className="hover:text-white transition-colors w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center">👤</button>
                        <button className="hover:text-orange-500 transition-colors text-lg">♡</button>
                        <button className="hover:text-orange-500 transition-colors text-lg">🛒</button>
                    </div>
                </div>
            </div>



        </header>
    );
}