"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function BestSellers() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.product-card', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 60%',
            },
            y: 80,
            opacity: 0,
            stagger: 0.15,
            duration: 1.2,
            ease: 'power3.out'
        });
    }, { scope: container });

    const products = [
        { title: "Novella Sofa 2 Seater", category: "Sofas", price: "₹57,599", img: "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=1961&auto=format&fit=crop" },
        { title: "Pietra Dining Table", category: "Dining Tables", price: "₹45,999", img: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=1924&auto=format&fit=crop" },
        { title: "Gatsby Sofa 3 Seater", category: "Sofas", price: "₹56,399", img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop" },
        { title: "Muro Upholstered Bed", category: "Beds", price: "₹38,499", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop" },
    ];

    return (
        <section ref={container} className="py-32 px-6 max-w-[1400px] mx-auto bg-black text-white">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


                <div className="product-card bg-[#B8860B] text-white p-12 flex flex-col justify-between min-h-[500px]">
                    <div>
                        <p className="text-sm uppercase tracking-widest mb-4">Don't Miss The</p>
                        <h2 className="text-6xl font-light leading-tight">Best<br />Sellers!</h2>
                    </div>
                    <a href="#" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:gap-4 transition-all">
                        View All <span className="text-lg">↗</span>
                    </a>
                </div>


                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {products.map((prod, i) => (
                        <div key={i} className="product-card group relative overflow-hidden bg-zinc-900 cursor-pointer min-h-[500px]">
                            <img
                                src={prod.img}
                                alt={prod.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
                                <div>
                                    <p className="text-xs text-zinc-400 mb-2 uppercase tracking-widest">{prod.category}</p>
                                    <h3 className="text-xl font-light mb-1">{prod.title}</h3>
                                    <p className="text-orange-400 text-sm">{prod.price}</p>
                                </div>
                                <div className="text-white opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                    <span className="flex items-center gap-2 text-xs uppercase tracking-widest border-b border-white pb-1">
                                        ♡ View ↗
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}