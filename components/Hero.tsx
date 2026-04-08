"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();


        tl.from('.hero-text', {
            y: 100,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: 'power4.out',
            delay: 0.5,
        })

            .from('.hero-image', {
                scale: 1.2,
                opacity: 0,
                duration: 2,
                ease: 'power3.out',
            }, "-=1.5");
    }, { scope: container });

    return (
        <section ref={container} className="relative h-screen w-full flex items-center justify-center overflow-hidden">

            <div className="hero-image absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
                    alt="MagickHome Interior"
                    className="w-full h-full object-cover opacity-60"
                />
            </div>

            <div className="z-10 text-center flex flex-col items-center">
                <div className="overflow-hidden">
                    <h1 className="hero-text text-6xl md:text-8xl font-light tracking-tighter uppercase mb-4">
                        MagickHome
                    </h1>
                </div>
                <div className="overflow-hidden">
                    <p className="hero-text text-xl md:text-2xl font-light tracking-widest text-gray-300">
                        India's Premium Interiors
                    </p>
                </div>
            </div>
        </section>
    );
}