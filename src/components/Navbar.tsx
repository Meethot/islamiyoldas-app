"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Özellikler", href: "#features" },
    { name: "Nasıl Çalışır", href: "#how-it-works" },
    { name: "Yorumlar", href: "#testimonials" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-black/60 backdrop-blur-md border-white/10 py-4"
                    : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 relative overflow-hidden rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                        <Image
                            src="/app-logo.png"
                            alt="Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="text-xl md:text-2xl font-bold tracking-tight text-white whitespace-nowrap">
                        İslami Yoldaş
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-400 hover:text-islamic-green transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="https://apps.apple.com/tr/app/i-slami-yolda%C5%9F-namaz-ramazan/id6759666173?l=tr" target="_blank" rel="noopener noreferrer" className="bg-islamic-green hover:bg-islamic-green-dark text-black px-6 py-2.5 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                        Hemen İndir
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-6 transition-all duration-300 ease-out will-change-transform",
                    isMobileMenuOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                )}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-medium text-gray-300 hover:text-islamic-green transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
                <a href="https://apps.apple.com/tr/app/i-slami-yolda%C5%9F-namaz-ramazan/id6759666173?l=tr" target="_blank" rel="noopener noreferrer" className="bg-islamic-green text-black px-6 py-4 rounded-2xl font-bold text-center block">
                    Hemen İndir
                </a>
            </div>
        </nav>
    );
}
