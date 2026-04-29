"use client";

import { motion } from "framer-motion";
import {
    BookOpen,
    MapPin,
    Bell,
    Compass,
    Heart,
    Moon
} from "lucide-react";

const features = [
    {
        title: "Günlük Ayetler",
        description: "Ruhunuza ilham verecek, özenle seçilmiş ayetleri her gün bildirim olarak alın.",
        icon: BookOpen,
    },
    {
        title: "Doğru Namaz Vakitleri",
        description: "Konumunuza ve tercihlerinize göre yüksek doğrulukta hesaplanan vakitlerle namazı kaçırmayın.",
        icon: MapPin,
    },
    {
        title: "Akıllı Bildirimler",
        description: "Ezan ve gün boyu sürecek zikir hatırlatıcıları için özelleştirilebilir uyarılar.",
        icon: Bell,
    },
    {
        title: "Kıble Bulucu",
        description: "Dünyanın her yerinden Mekke yönünü bulmak için şık ve sezgisel bir pusula.",
        icon: Compass,
    },
    {
        title: "Zikir & Tesbih",
        description: "Günlük zikirleriniz için titreşim geri bildirimli ve geçmiş takipli dijital sayaç.",
        icon: Heart,
    },
    {
        title: "Oruç Takip",
        description: "Ramazan ve nafile oruçlarınızı takip edin, seri oluşturun ve hedeflerinize ulaşın.",
        icon: Moon,
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Manevi Yolculuğunuz İçin <br />
                        <span className="text-islamic-green">İhtiyacınız Olan Her Şey</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg"
                    >
                        İslami Yoldaş, mobil cihazınızda kusursuz bir İslami deneyim sunmak için asırlık
                        gelenekleri modern teknolojiyle birleştirir.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{
                                y: -12,
                                transition: { duration: 0.2, ease: "easeOut", delay: 0 }
                            }}
                            className="glass-card p-8 group transition-all duration-300 hover:border-islamic-green/30"
                        >
                            <div className="w-14 h-14 bg-islamic-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-islamic-green group-hover:text-black transition-colors duration-300">
                                <feature.icon size={28} className="text-islamic-green group-hover:text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
