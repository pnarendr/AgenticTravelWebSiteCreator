import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({ title, subtitle, heroImage }) {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax text
            gsap.to(textRef.current, {
                yPercent: 50,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
            // Parallax background
            gsap.to(bgRef.current, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center p-4">
            {/* Background Image */}
            <div ref={bgRef} className="absolute inset-0 z-0">
                <img
                    src={heroImage || "/images/hero.png"}
                    alt={title}
                    className="w-full h-[120%] object-cover object-center -mt-[10%]"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
            </div>

            {/* Content */}
            <div ref={textRef} className="relative z-10 text-center max-w-4xl mx-auto text-white">
                <span className="block font-sans text-xs md:text-sm tracking-[0.4em] uppercase mb-6 text-gold-500 animate-fade-in-up">
                    The Narendra Experience
                </span>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight animate-fade-in-up animation-delay-200">
                    {title}
                </h1>
                <p className="font-sans text-lg md:text-xl font-light tracking-wide text-white/90 animate-fade-in-up animation-delay-400">
                    {subtitle}
                </p>

            </div>
        </section>
    );
}
