"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProcessSection() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.process-card', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 70%',
            },
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out'
        });
    }, { scope: container });

    const steps = [
        {
            title: "Visualize Your Kitchen",
            desc: "Get a quick price quote and preview your dream kitchen in just 3 clicks.",
            link: "Try the 3-Click Quote Tool ↗",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Book A Free Consultation",
            desc: "Meet a design expert to bring your ideas to life—online, in-store, or at home.",
            link: "Book A Design Consultation ↗",
            img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Track Progress Anytime",
            desc: "After booking, access your dashboard for designs, updates, and next steps.",
            link: "Go to My Dashboard ↗",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
        }
    ];

    return (
        <section ref={container} className="py-32 px-6 max-w-7xl mx-auto bg-black text-white">
            <div className="mb-20 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-light mb-6">Try the 3 click quote tool</h2>
                <p className="text-zinc-400 font-light leading-relaxed">
                    Transforming your kitchen is easy with MagickHome. Follow these three simple steps to bring your dream kitchen to life; from exploring designs to final installation.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step, i) => (
                    <div key={i} className="process-card group cursor-pointer">
                        <div className="overflow-hidden mb-6 aspect-[4/3] rounded-sm relative">
                            <div className="absolute inset-0 bg-black/20 z-10 transition-opacity duration-500 group-hover:opacity-0" />
                            <img
                                src={step.img}
                                alt={step.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                        </div>
                        <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                        <p className="text-zinc-500 text-sm font-light mb-6 leading-relaxed h-16">{step.desc}</p>
                        <span className="text-xs uppercase tracking-widest border-b border-zinc-700 pb-1 hover:border-white transition-colors">
                            {step.link}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}