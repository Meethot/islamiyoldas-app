"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Force scroll to top on refresh
        window.scrollTo(0, 0);

        // Simulation of loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    window.scrollTo(0, 0); // Scroll to top before hiding
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // Total ~2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Background Subtle Radial Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-islamic-green/5 blur-[120px] rounded-full -z-10" />

                    <div className="flex flex-col items-center max-w-xs w-full">
                        {/* Logo with Glow */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative mb-8"
                        >
                            <div className="absolute inset-0 bg-islamic-green/20 blur-2xl rounded-full scale-150 animate-pulse" />
                            <Image
                                src="/app-logo.png"
                                alt="İslami Yoldaş Logo"
                                width={120}
                                height={120}
                                className="relative z-10 drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                            />
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-3xl font-bold text-white mb-2 tracking-tight"
                        >
                            İslami Yoldaş
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-[10px] text-islamic-green font-bold tracking-[0.3em] uppercase mb-12 opacity-80"
                        >
                            PREMIUM MANEVİ ASİSTAN
                        </motion.p>

                        {/* Loading Bar Container */}
                        <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                            {/* Animated Progress Bar */}
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                className="absolute top-0 left-0 h-full bg-islamic-green shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                            />
                        </div>

                        {/* Animated Percentage (Optional, for more detail) */}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[10px] text-gray-500 mt-3 font-mono"
                        >
                            {progress}%
                        </motion.span>
                    </div>

                    {/* Footer text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    >
                        <p className="text-[10px] text-gray-700 tracking-widest uppercase font-medium">
                            Ummet için ❤️ ile yapıldı
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
