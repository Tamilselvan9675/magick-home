"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Testimonials() {
    const container = useRef<HTMLDivElement>(null);
    const scrollWrapper = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const sections = gsap.utils.toArray('.testimony-card');
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: container.current,
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => `+=${scrollWrapper.current?.offsetWidth || 2000}`,
            }
        });


        gsap.from('.section-title', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
            opacity: 0,
            y: 30,
            duration: 1
        });

    }, { scope: container });

    const testimonials = [
        {
            name: "Ms. Anakashree and Family",
            text: "I don't think any other brand would have made doing interiors for two homes this easy. If I asked the team something, before I can even ask for an update the task would be completed. Best team to work with.",
            img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop"
        },
        {
            name: "Mr. Magizharaj",
            text: "It would be an understatement to say that MagickHome exceeded my expectations. The transparency was commendable. I am more than satisfied and happy with their services.",
            img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop"
        },
        {
            name: "Mr. Angel and Family",
            text: "I'm extremely happy with the quality of the furniture - it's sturdy, well-crafted, and looks fantastic in my space. You can really tell that a lot of care went into the design and materials.",
            img: "https://images.unsplash.com/photo-1541844053589-346841d0b34c?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <section ref={container} className="bg-zinc-950 text-white overflow-hidden h-screen flex flex-col justify-center relative">
            <div className="absolute top-20 left-6 md:left-20 z-10">
                <h2 className="section-title text-4xl md:text-6xl font-light">Client<br />Stories.</h2>
            </div>


            <div ref={scrollWrapper} className="flex w-[300vw] h-[60vh] mt-24 items-center pl-6 md:pl-20">
                {testimonials.map((item, i) => (
                    <div key={i} className="testimony-card w-screen max-w-[800px] flex-shrink-0 flex flex-col md:flex-row gap-8 pr-12 md:pr-32">

                        <div className="w-full md:w-1/2 h-[300px] md:h-[450px] overflow-hidden rounded-sm relative group">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                            />
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
                            <div className="flex gap-1 text-orange-400 text-sm">
                                ★★★★★
                            </div>
                            <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-300">
                                "{item.text}"
                            </p>
                            <div className="w-12 h-[1px] bg-zinc-700 my-4"></div>
                            <p className="text-xs uppercase tracking-widest text-zinc-500">
                                {item.name}
                            </p>
                        </div>

                    </div>
                ))}
            </div>


            <div className="absolute bottom-12 left-6 md:left-20 flex items-center gap-4 text-xs uppercase tracking-widest text-zinc-500">
                <div className="w-16 h-[1px] bg-zinc-700 overflow-hidden relative">
                    <div className="w-full h-full bg-white absolute top-0 left-[-100%] animate-[slideRight_2s_ease-in-out_infinite]" />
                </div>
                Scroll to explore
            </div>
        </section>
    );
}