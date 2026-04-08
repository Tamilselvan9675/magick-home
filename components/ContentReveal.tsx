"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ContentReveal() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        gsap.utils.toArray('.reveal-item').forEach((item: any) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
            });
        });


        gsap.to('.parallax-img', {
            scrollTrigger: {
                trigger: '.parallax-container',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
            y: -100,
            ease: 'none',
        });
    }, { scope: container });

    return (
        <section ref={container} className="py-32 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
            <div className="w-full md:w-1/2 space-y-8">
                <h2 className="reveal-item text-4xl md:text-5xl font-light">Crafting Spaces <br /> That Inspire.</h2>
                <p className="reveal-item text-lg text-gray-400 font-light leading-relaxed">
                    From concept to reality, we bring a magical touch to your home.
                    Our designs blend contemporary aesthetics with timeless elegance, ensuring
                    every corner of your space tells a unique story.
                </p>
            </div>

            <div className="parallax-container w-full md:w-1/2 h-[600px] overflow-hidden rounded-xl relative">
                <img
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"
                    alt="Modern Architecture"
                    className="parallax-img absolute inset-0 w-full h-[120%] object-cover" // Height > 100% for parallax room
                />
            </div>
        </section>
    );
}