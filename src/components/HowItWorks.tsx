"use client";

import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const steps = [
    {
        number: "01",
        title: "Uygulamayı İndir",
        description: "iOS ve Android'de yayında. Yolculuğunuza saniyeler içinde başlayın.",
    },
    {
        number: "02",
        title: "Profilini Kur",
        description: "Doğru namaz vakitleri ve tercihler için konumunuzu belirleyin.",
    },
    {
        number: "03",
        title: "Günlük Pratik",
        description: "Hatırlatıcılar alın, Kuran okuyun ve manevi ilerlemenizi takip edin.",
    },
];

export function HowItWorks() {
    const [particles, setParticles] = (typeof window !== 'undefined') ? useState<{ id: number; x: number; y: number }[]>([]) : [[] as any, () => { }];
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);

        // Particle Emitter Logic
        if (Math.random() > 0.7) {
            const newParticle = {
                id: Date.now(),
                x: mouseX,
                y: mouseY,
            };
            setParticles((prev: any[]) => [...prev.slice(-15), newParticle]);
            setTimeout(() => {
                setParticles((prev: any[]) => prev.filter((p: any) => p.id !== newParticle.id));
            }, 1000);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };
    return (
        <section id="how-it-works" className="py-32 bg-white/[0.02]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Basit. Güzel. <br />
                            <span className="text-islamic-green">Güçlü.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12">
                            İslami Yoldaş'ı mümkün olduğunca sezgisel olacak şekilde tasarladık.
                            Karmaşa yok, reklam yok, sadece siz ve inancınız dingin bir
                            dijital ortamda.
                        </p>

                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="flex gap-8 items-start"
                                >
                                    <span className="text-5xl font-black text-white/10 group-hover:text-islamic-green/20 transition-colors">
                                        {step.number}
                                    </span>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                        <p className="text-gray-400">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative flex justify-center items-center">
                        {/* Dramatic Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-islamic-green/10 blur-[150px] rounded-full -z-10" />

                        <motion.div
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                rotateY,
                                rotateX,
                                transformStyle: "preserve-3d",
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-full aspect-square max-w-[500px] perspective-1000"
                        >
                            {/* Outer Decorative Ring */}
                            <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_20s_linear_infinite] opacity-30" />
                            <div className="absolute inset-8 border border-islamic-green/10 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-20" />

                            {/* Floating Premium Visual Composition */}
                            <motion.div
                                className="relative w-full h-full flex items-center justify-center p-8"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Particle Emitter Layer */}
                                <div className="absolute inset-0 pointer-events-none z-30">
                                    <AnimatePresence>
                                        {particles.map((particle: any) => (
                                            <motion.div
                                                key={particle.id}
                                                initial={{ opacity: 0.8, scale: 1, x: particle.x, y: particle.y }}
                                                animate={{
                                                    opacity: 0,
                                                    scale: 0.2,
                                                    y: particle.y - 100,
                                                    x: particle.x + (Math.random() - 0.5) * 50
                                                }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                                className="absolute w-1.5 h-1.5 bg-islamic-green rounded-full shadow-[0_0_10px_#10b981]"
                                            />
                                        ))}
                                    </AnimatePresence>
                                </div>

                                {/* Glowing Background Aura */}
                                <div className="absolute inset-0 bg-islamic-green/10 blur-[100px] rounded-full animate-pulse" />

                                {/* 3D Glass Container */}
                                <div
                                    className="relative w-full aspect-square rounded-[4rem] flex items-center justify-center border border-white/10 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]"
                                    style={{ transform: "translateZ(50px)" }}
                                >
                                    {/* Reflection Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.1] to-transparent z-20 pointer-events-none" />

                                    {/* The App Icon (CENTERPIECE) */}
                                    <div className="relative z-10 w-full h-full p-0">
                                        <img
                                            src="/app-icon-tree.jpg"
                                            alt="İslami Yoldaş App Icon"
                                            className="w-full h-full object-cover transition-transform duration-500 scale-105"
                                        />
                                    </div>
                                </div>

                                {/* Floating Decorative Bits */}
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            y: [0, -40, 0],
                                            x: [0, i % 2 === 0 ? 20 : -20, 0],
                                            opacity: [0.2, 0.5, 0.2]
                                        }}
                                        transition={{
                                            duration: 3 + i,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: i * 0.5
                                        }}
                                        className="absolute w-2 h-2 bg-islamic-green rounded-full blur-[2px]"
                                        style={{
                                            top: `${10 + i * 20}%`,
                                            left: `${10 + i * 20}%`,
                                            transform: `translateZ(${20 + i * 10}px)`
                                        }}
                                    />
                                ))}
                            </motion.div>

                            {/* Decorative Floating Elements */}
                            <motion.div
                                animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                style={{ transform: "translateZ(100px)" }}
                                className="absolute -top-4 -right-4 w-12 h-12 glass border border-white/10 rounded-2xl rotate-12 flex items-center justify-center"
                            >
                                <div className="w-2 h-2 bg-islamic-green rounded-full animate-pulse" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
