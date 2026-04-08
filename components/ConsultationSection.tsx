"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ConsultationSection() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.feature-item', {
            scrollTrigger: {
                trigger: '.features-container',
                start: 'top 80%',
            },
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from('.form-element', {
            scrollTrigger: {
                trigger: '.form-container',
                start: 'top 75%',
            },
            x: 50,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: 'power3.out'
        });


        gsap.from('.consultation-img', {
            scrollTrigger: {
                trigger: '.image-container',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
            scale: 1.15,
            ease: 'none'
        });
    }, { scope: container });

    return (
        <section ref={container} className="py-24 bg-zinc-950 text-white">

            <div className="features-container max-w-7xl mx-auto px-6 mb-24 text-center">
                <h2 className="feature-item text-4xl md:text-5xl font-light mb-6">Why Choose MagickHome?</h2>
                <p className="feature-item text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed mb-16">
                    More than building spaces, MagickHome creates experiences that blend creativity, imagination, and innovation in every corner of your home.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-800 pt-12">
                    {[
                        "360° Home Makeover",
                        "30 Years Of Excellence",
                        "In-House Production, Export Quality",
                        "Unmatched Customer Experience"
                    ].map((text, i) => (
                        <div key={i} className="feature-item flex flex-col items-center text-center space-y-4">
                            <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-orange-400">
                                <span className="text-sm">0{i + 1}</span>
                            </div>
                            <span className="text-sm font-light text-zinc-300 uppercase tracking-wider">{text}</span>
                        </div>
                    ))}
                </div>
            </div>


            <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row min-h-[800px]">
                <div className="image-container lg:w-1/2 relative overflow-hidden h-[500px] lg:h-auto">
                    <img
                        src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop"
                        alt="Premium Kitchen"
                        className="consultation-img absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="form-container lg:w-1/2 bg-zinc-900 p-10 lg:p-20 flex flex-col justify-center">
                    <h3 className="form-element text-3xl font-light mb-10">Book Your Free Design Consultation</h3>

                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="form-element flex flex-col border-b border-zinc-700 pb-2">
                                <label className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Full Name*</label>
                                <input type="text" placeholder="Please Enter Full Name" className="bg-transparent outline-none text-white placeholder:text-zinc-600 font-light" />
                            </div>
                            <div className="form-element flex flex-col border-b border-zinc-700 pb-2">
                                <label className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Mobile Number*</label>
                                <input type="tel" placeholder="10 Digit Mobile Number" className="bg-transparent outline-none text-white placeholder:text-zinc-600 font-light" />
                            </div>
                            <div className="form-element flex flex-col border-b border-zinc-700 pb-2">
                                <label className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Email Address*</label>
                                <input type="email" placeholder="Please Enter Email Address" className="bg-transparent outline-none text-white placeholder:text-zinc-600 font-light" />
                            </div>
                            <div className="form-element flex flex-col border-b border-zinc-700 pb-2">
                                <label className="text-xs text-zinc-500 uppercase tracking-widest mb-2">City Selection*</label>
                                <input type="text" placeholder="Select Your City" className="bg-transparent outline-none text-white placeholder:text-zinc-600 font-light" />
                            </div>
                        </div>

                        <div className="form-element flex flex-col border-b border-zinc-700 pb-2">
                            <label className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Budget Range*</label>
                            <input type="text" placeholder="Select Budget Range" className="bg-transparent outline-none text-white placeholder:text-zinc-600 font-light" />
                        </div>

                        <div className="form-element flex items-start gap-4 pt-4">
                            <input type="checkbox" className="mt-1 accent-orange-500 bg-zinc-800" />
                            <p className="text-xs text-zinc-500 leading-relaxed font-light">
                                I hereby provide my explicit consent to MagickHome Interiors Private Limited (MHIPL) to contact me, notwithstanding my registration under the Do Not Disturb (DND) registry, in accordance with applicable TRAI regulations.
                            </p>
                        </div>

                        <div className="form-element pt-8 flex justify-end">
                            <button type="button" className="group relative inline-flex items-center gap-4 text-orange-400 text-lg font-light overflow-hidden">
                                <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-full">Next</span>
                                <span className="absolute inset-0 z-10 transition-transform duration-500 translate-y-full group-hover:translate-y-0">Next</span>
                                <div className="w-8 h-[1px] bg-orange-400 transition-all duration-300 group-hover:w-12"></div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}