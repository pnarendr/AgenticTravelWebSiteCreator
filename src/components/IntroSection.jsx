import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function IntroSection({ headline, body, introImage }) {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-32 text-center px-6 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={introImage || "/images/hero.png"}
                    alt={headline}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div ref={textRef} className="relative z-10 max-w-3xl mx-auto">
                <h2 className="font-serif text-5xl md:text-6xl text-white mb-8 leading-tight drop-shadow-lg">
                    {headline}
                </h2>
                <p className="font-sans text-lg md:text-xl text-white/90 leading-relaxed font-light drop-shadow-md">
                    {body}
                </p>
            </div>
        </section>
    );
}
