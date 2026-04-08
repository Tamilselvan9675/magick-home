"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PromoBanner() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to('.promo-bg', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
            y: 150,
            ease: 'none'
        });

        gsap.from('.promo-text', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 60%',
            },
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 1.5,
            ease: 'power3.out'
        });

        gsap.from('.logo-item', {
            scrollTrigger: {
                trigger: '.logos-container',
                start: 'top 85%',
            },
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 1,
            ease: 'power2.out'
        });
    }, { scope: container });

    return (
        <section ref={container} className="relative w-full bg-black flex flex-col items-center">
            <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden flex items-center justify-center">
                <img
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
                    alt="Summer Sale Living Room"
                    className="promo-bg absolute inset-0 w-full h-[130%] object-cover opacity-60 scale-105 top-[-15%]"
                />
                <div className="absolute inset-0 bg-black/30" />

                <div className="relative z-10 text-center text-white flex flex-col items-center">
                    <p className="promo-text text-sm md:text-base uppercase tracking-[0.3em] text-zinc-300 mb-4">Upto 50% Off</p>
                    <h2 className="promo-text text-6xl md:text-8xl font-light mb-8">Summer Sale</h2>
                    <a href="#" className="promo-text group relative inline-flex items-center gap-4 text-white uppercase text-xs tracking-widest pb-2 border-b border-white/30 hover:border-white transition-colors">
                        Shop Now <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                    </a>
                </div>
            </div>

            {/* Featured In Strip */}
            <div className="logos-container w-full max-w-7xl mx-auto py-20 px-6 border-b border-zinc-900">
                <p className="text-center text-xs uppercase tracking-widest text-zinc-500 mb-12">Featured In</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {['Business Standard', 'ETV Bharat', 'ANI', 'THE WEEK'].map((logo, index) => (
                        <div key={index} className="logo-item text-xl md:text-2xl font-serif text-zinc-400 font-light">
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}