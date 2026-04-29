"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        content: "Tasarım nefes kesici. Modern bir yazılım gibi hissettiren ilk İslami uygulama.",
        author: "Zarah",
        size: "large",
    },
    {
        content: "Namaz vakitleri tam isabet ve bildirimler çok zarif ama bir o kadar da yardımcı.",
        author: "Ömer",
        size: "small",
    },
    {
        content: "Zikir sayacını çok sevdim. Titreşim geri bildirimi gerçekmiş gibi hissettiriyor.",
        author: "Ahmed",
        size: "small",
    },
    {
        content: "İslami Yoldaş, günlük manevi rutinimin vazgeçilmez bir parçası oldu. Bu uygulama için minnettarım.",
        author: "Leyla",
        size: "small",
    },
    {
        content: "Sonunda, sinir bozucu reklamlar veya karmaşık menüler olmayan bir uygulama. Saf huzur.",
        author: "İbrahim",
        size: "small",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                    Topluluk Tarafından <span className="text-islamic-green">Sevildi</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={cn(
                                "glass-card p-8 flex flex-col justify-between group hover:border-islamic-green/40 transition-all",
                                t.size === "large" ? "md:col-span-2" : "",
                                t.size === "medium" ? "md:row-span-2" : ""
                            )}
                        >
                            <div>
                                <div className="flex gap-1 mb-4 text-islamic-green">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <p className={cn(
                                    "text-gray-300 italic mb-6 leading-relaxed",
                                    t.size === "large" ? "text-xl md:text-2xl" : "text-base"
                                )}>
                                    "{t.content}"
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center font-bold text-islamic-green text-sm shrink-0">
                                    {t.author[0]}
                                </div>
                                <h4 className="font-bold text-white text-sm">{t.author}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Helper function locally since it's used in the template
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
