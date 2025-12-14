import React from 'react';

export default function Footer({ content }) {
    return (
        <footer className="bg-slate-950 border-t border-white/10 text-stone-300 py-24 px-6 md:px-12">
            {content && (
                <div className="max-w-4xl mx-auto text-left md:text-center mb-20">
                    <h4 className="font-serif text-3xl text-stone-100 mb-8">{content.title}</h4>
                    <div className="grid md:grid-cols-2 gap-12 text-stone-300 font-light text-lg">
                        {content.items.map((item, i) => (
                            <p key={i}>{item}</p>
                        ))}
                        {content.tip && (
                            <p>
                                <span className="text-gold-500 block mb-2 font-sans tracking-widest text-sm uppercase">{content.tip.label}</span>
                                {content.tip.text}
                            </p>
                        )}
                    </div>
                </div>
            )}
            <div className="max-w-4xl mx-auto text-center space-y-12">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-serif text-white">The Narendra Experience</h2>
                    <p className="font-cursive text-2xl text-gold-500 opacity-80">Voyage Sans Argent</p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 font-sans text-sm tracking-widest text-white/60 uppercase">
                    <a href="#" className="hover:text-gold-500 transition-colors duration-300">Itinerary</a>
                    <a href="#" className="hover:text-gold-500 transition-colors duration-300">Destinations</a>
                    <a href="#" className="hover:text-gold-500 transition-colors duration-300">Private Access</a>
                    <a href="#" className="hover:text-gold-500 transition-colors duration-300">Concierge</a>
                </div>

                <div className="w-12 h-px bg-white/20 mx-auto" />

                <div className="space-y-2">
                    <p className="font-sans text-xs text-white/30 tracking-wider">
                        © {new Date().getFullYear()} The Narendra Experience. All rights reserved.
                    </p>
                    <p className="font-sans text-[10px] text-white/20 uppercase tracking-widest">
                        Designed for the Honored Guest
                    </p>
                </div>
            </div>
        </footer>
    );
}
