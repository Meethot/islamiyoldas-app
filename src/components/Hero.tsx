"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export function Hero() {
    const [currentScreen, setCurrentScreen] = useState(0);
    const screens = [
        "/screen-1.png",
        "/screen-2.png",
        "/screen-3.png",
        "/screen-4.png",
        "/screen-5.png",
        "/screen-6.png",
        "/screen-7.png",
        "/screen-8.png"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentScreen((prev) => (prev + 1) % screens.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-islamic-green/10 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-8"
                    >


                        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                            İnancınızla Her Gün <br />
                            <span className="text-islamic-green text-glow">Bağ Kurun.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
                            En zarif İslami uygulama deneyimini yaşayın. İslami Yoldaş size sezgisel
                            namaz vakitleri, güzel Kuran okuma deneyimi ve günlük
                            manevi içgörüler sunar.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4">

                            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 sm:mt-0">
                                <a href="https://apps.apple.com/tr/app/i-slami-yolda%C5%9F-namaz-ramazan/id6759666173?l=tr" target="_blank" rel="noopener noreferrer" className="transition-all hover:scale-105 active:scale-95 h-[64px] flex items-center">
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                        alt="App Store"
                                        width={180}
                                        height={60}
                                        className="h-full w-auto"
                                    />
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.islamiyoldas.app" target="_blank" rel="noopener noreferrer" className="transition-all hover:scale-105 active:scale-95 h-[64px] flex items-center">
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                        alt="Google Play"
                                        width={180}
                                        height={60}
                                        className="h-full w-auto"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center overflow-hidden"
                                    >
                                        <img
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
                                            alt="User"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-black bg-islamic-green flex items-center justify-center text-black font-bold text-[10px]">
                                    +20k
                                </div>
                            </div>
                            <p>20.000&apos;den fazla kullanıcı tarafından güveniliyor</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateX: 10, rotateY: -10 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 5, rotateY: -5 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end perspective-1000"
                    >
                        {/* Phone Mockup Wrapper */}
                        <div className="relative w-[280px] h-[580px] md:w-[300px] md:h-[620px]">
                            {/* Outer Glow */}
                            <div className="absolute inset-x-0 -bottom-10 h-20 bg-islamic-green/20 blur-[60px] rounded-full -z-10" />

                            {/* Phone Frame (CSS) */}
                            {/* Outer Gold Border */}
                            <div className="absolute inset-x-[-2px] inset-y-[-2px] border-[1px] border-[#d4af37]/30 rounded-[3.2rem] z-0" />

                            <div className="absolute inset-0 bg-[#050505] rounded-[3rem] border-[10px] border-[#0a0a0a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden ring-[1px] ring-[#d4af37]/20">
                                {/* Inner Shadow for Screen Depth */}
                                <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]" />

                                {/* Dynamic Island (Refined & Minimal) */}
                                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-40 flex items-center justify-center border border-white/[0.08]">
                                    <div className="flex gap-1.5 items-center">
                                        <div className="w-1 h-1 bg-[#1a1a1a] rounded-full" />
                                        <div className="w-6 h-[3px] bg-[#1a1a1a] rounded-full" />
                                    </div>
                                </div>

                                {/* Premium Glass Reflection Overlay */}
                                <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] mix-blend-overlay" />
                                <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_50%)] z-20 animate-[pulse_8s_infinite]" />

                                {/* Screen Content Slider */}
                                <div className="absolute inset-0 z-10">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentScreen}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.6, ease: "easeInOut" }}
                                            className="w-full h-full"
                                        >
                                            <Image
                                                src={screens[currentScreen]}
                                                alt={`Screen ${currentScreen + 1}`}
                                                fill
                                                className="object-cover object-top"
                                                priority
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Floating Element 1 (Prayer Time) */}
                            <motion.div
                                animate={{ y: [0, -10, 0], rotateZ: [-1, 1, -1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -left-20 md:-left-[140px] top-16 z-30 glass-card p-4 flex items-center gap-3 backdrop-blur-3xl border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                            >
                                <div className="w-10 h-10 bg-islamic-green/20 rounded-xl flex items-center justify-center border border-islamic-green/30">
                                    <span className="text-islamic-green font-bold text-xs uppercase tracking-tighter">Fecr</span>
                                </div>
                                <div className="whitespace-nowrap">
                                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Sıradaki Namaz</p>
                                    <p className="text-sm font-bold text-white">05:12 <span className="text-[10px] font-normal text-gray-500">2s 14d</span></p>
                                </div>
                            </motion.div>

                            {/* Floating Element 2 (Daily Verse) */}
                            <motion.div
                                animate={{ y: [0, 10, 0], rotateZ: [1, -1, 1] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -right-24 md:-right-[220px] bottom-24 z-30 glass-card p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-white/20 backdrop-blur-3xl"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-1.5 h-4 bg-islamic-green rounded-full" />
                                    <p className="text-xs text-white font-bold tracking-wide uppercase">Günün Ayeti</p>
                                </div>
                                <p className="text-xs text-gray-300 italic max-w-[180px] leading-relaxed">
                                    &quot;Namazı dosdoğru kılın... O, gerçekten büyük bir iştir.&quot;
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
