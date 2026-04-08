"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Footer() {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {

        gsap.from('.footer-col', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 90%',
            },
            y: 40,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: 'power3.out'
        });


        gsap.from('.seo-text-block', {
            scrollTrigger: {
                trigger: '.seo-section',
                start: 'top 95%',
            },
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 1.2,
            ease: 'power2.out',
            delay: 0.3
        });
    }, { scope: container });

    const seoBlocks = [
        {
            title: "Welcome to MagickHome: Transforming Spaces, One Piece at a Time",
            desc: "At MagickHome, we don't just offer furniture online; we offer the magic of transformation. Picture this: a cozy living room that whispers serenity, a dining set that sets the stage for countless memories, and a sofa that invites conversations and comfort in equal measure. Our pieces don't just fill spaces; they breathe life into them. Every corner of your home is an opportunity to reflect who you are—and MagickHome helps you make it unforgettable with modular furniture solutions."
        },
        {
            title: "Curate Your Space With Our Exquisite Bespoke Furniture Collection",
            desc: "Why settle for ordinary when your home can be extraordinary? With MagickHome, your home furniture is more than functional; it's a statement. Whether you're looking to add a splash of elegance with a sofa, find the perfect dining table set for family dinners, or snuggle up in a bed that redefines comfort, we've curated collections that suit every mood, style, and dream. Let your home be a gallery of the things you love, filled with designer furniture that tells your story."
        },
        {
            title: "Crafted for Comfort, Designed to Last",
            desc: "At MagickHome, craftsmanship is not just a promise—it's a guarantee. From meticulously sourced materials to carefully designed structures, our modern furniture blends durability with unmatched aesthetics. Whether it's a buttery leather recliner that becomes your favorite evening retreat or a sturdy wooden dining table built for decades of dinners, every piece is built to last, with beauty that withstands time. If you're looking for quality furniture, MagickHome is where durable furniture meets luxury."
        },
        {
            title: "Furniture for the Modern Lifestyle",
            desc: "Life moves fast, but your home should always feel like your personal retreat. Our modular, smart furniture options adapt to the rhythm of your life. Hosting friends? Our L-shaped sofas provide ample seating. Need a quick transformation? Try our sofa cum beds for both elegance and practicality. From space-saving furniture to pieces that enhance your daily living, MagickHome merges innovation with functionality, making everyday life both effortless and stylish."
        },
        {
            title: "Personalize Your Space with Custom Furniture",
            desc: "No two homes are the same, and we believe your furniture should reflect that. At MagickHome, we offer a personalized furniture shopping experience like no other. Whether you're browsing furniture online or visiting our showrooms, we provide expert guidance and tailored recommendations to fit your needs. Choose from a wide variety of colors, finishes, and fabrics to bring your vision to life. Whether your style is modern, contemporary, or classic furniture, we've got the perfect pieces waiting for you."
        },
        {
            title: "Step Into the Future of Furniture",
            desc: "The furniture industry is evolving, and it's modular, sustainable, and simply stunning. Say goodbye to stiff, one-size-fits-all designs and hello to the flexibility of customized living spaces. With MagickHome, you're not just investing in home interiors; you're investing in a lifestyle that grows with you. Ready to discover the magic? Browse our furniture collections, visit a showroom, or chat with our home interior design team to bring the MagickHome experience to your doorstep."
        }
    ];

    return (
        <footer ref={container} className="bg-zinc-950 text-white pt-24 pb-12 px-6 md:px-16 border-t border-zinc-900 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">


                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">


                    <div className="footer-col md:col-span-1">
                        <h2 className="text-2xl font-light tracking-widest text-orange-500 mb-2">MAGICK<br />HOME</h2>
                        <p className="text-xs text-zinc-500 tracking-widest uppercase">Where Design Meets Delight</p>
                    </div>


                    <div className="footer-col">
                        <h3 className="text-xs font-semibold tracking-widest text-orange-500 uppercase mb-6">Offerings</h3>
                        <ul className="space-y-4 text-sm font-light text-zinc-400">
                            {['Sofas', 'Dining Tables', 'Dining Chairs', 'Beds', 'Offers'].map(link => (
                                <li key={link}><a href="#" className="hover:text-white hover:pl-2 transition-all duration-300">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3 className="text-xs font-semibold tracking-widest text-orange-500 uppercase mb-6">Corporate</h3>
                        <ul className="space-y-4 text-sm font-light text-zinc-400">
                            <li><a href="#" className="hover:text-white hover:pl-2 transition-all duration-300">About Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3 className="text-xs font-semibold tracking-widest text-orange-500 uppercase mb-6">Important Links</h3>
                        <ul className="space-y-4 text-sm font-light text-zinc-400">
                            {['Privacy Policy', 'Shipping', 'Returns & Refunds', 'Warranty', 'Terms & Conditions'].map(link => (
                                <li key={link}><a href="#" className="hover:text-white hover:pl-2 transition-all duration-300">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3 className="text-xs font-semibold tracking-widest text-orange-500 uppercase mb-6">More</h3>
                        <ul className="space-y-4 text-sm font-light text-zinc-400">
                            {['FAQs', 'Blog', 'Contact Us'].map(link => (
                                <li key={link}><a href="#" className="hover:text-white hover:pl-2 transition-all duration-300">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>


                <div className="footer-col border-t border-zinc-800 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-zinc-500 font-light">
                        Copyright @ {new Date().getFullYear()} All Rights Reserved by MagickHome.
                    </p>
                    <div className="flex gap-6 text-zinc-400">

                        <a href="#" className="hover:text-white transition-colors text-sm uppercase tracking-widest">IG</a>
                        <a href="#" className="hover:text-white transition-colors text-sm uppercase tracking-widest">FB</a>
                        <a href="#" className="hover:text-white transition-colors text-sm uppercase tracking-widest">YT</a>
                        <a href="#" className="hover:text-white transition-colors text-sm uppercase tracking-widest">IN</a>
                    </div>
                </div>


                <div className="seo-section border-t border-zinc-800 pt-16 mt-8">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-12 text-justify">
                        {seoBlocks.map((block, i) => (
                            <div key={i} className="seo-text-block break-inside-avoid mb-10">
                                <h4 className="text-xs font-medium tracking-wide text-zinc-300 mb-3">{block.title}</h4>
                                <p className="text-[10px] leading-relaxed tracking-wide text-zinc-600 font-light">
                                    {block.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}