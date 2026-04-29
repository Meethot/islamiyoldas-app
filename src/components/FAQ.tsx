"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "İslami Yoldaş uygulamasını kullanmak ücretli mi?",
        answer: "İslami Yoldaş'ı indirmek ve temel özelliklerini (Ezan Vakitleri, Kıble Bulucu, Günlük Ayetler vb.) kullanmak tamamen ücretsizdir. Üstelik ücretsiz versiyonda bile asla reklam görmezsiniz. İbadetleriniz sırasında dikkatiniz dağılmaz. Daha gelişmiş içeriklere ve özel araçlara erişmek isterseniz Premium üyeliğe geçiş yaparak bize destek olabilirsiniz.",
    },
    {
        question: "Premium üyelik bana ne kazandırır?",
        answer: "Premium üyelerimiz; detaylı ibadet istatistikleri, widget özelleştirmeleri, farklı zikirmatik sesleri/temaları ve özel içerik kütüphanesine sınırsız erişim hakkı kazanır. Ayrıca Premium alarak bu reklamsız ve temiz yapının sürdürülebilir olmasına katkı sağlamış olursunuz.",
    },
    {
        question: "Uygulamada reklam var mı?",
        answer: "Hayır, kesinlikle yok. İslami Yoldaş, manevi huzurunuzu bozmamak için %100 reklamsız olarak tasarlanmıştır. İster ücretsiz kullanın ister Premium üye olun, karşınıza asla rahatsız edici reklamlar çıkmaz.",
    },
    {
        question: "Namaz vakitleri doğru mu?",
        answer: "Vakitlerimiz, bulunduğunuz konuma göre Diyanet İşleri Başkanlığı ve uluslararası kabul görmüş hesaplama yöntemleriyle birebir uyumlu şekilde sunulur. Güvenle ibadet edebilirsiniz.",
    },
    {
        question: "Uygulama şarjımı çok tüketir mi?",
        answer: "Hayır. İslami Yoldaş, modern kodlama teknolojileriyle (Native Performance) geliştirilmiştir. Arka planda gereksiz işlem yapmaz ve pilinizi yormaz. Telefonunuzun performansını etkilemeden, sadece ihtiyacınız olduğunda çalışan hafif bir yapısı vardır.",
    },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border border-white/10 rounded-2xl overflow-hidden hover:border-islamic-green/30 transition-colors"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
            >
                <span className="font-semibold text-white text-sm md:text-base">{question}</span>
                <ChevronDown
                    size={20}
                    className={`text-islamic-green shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
            >
                <p className="px-5 md:px-6 pb-5 md:pb-6 text-gray-400 text-sm leading-relaxed">
                    {answer}
                </p>
            </div>
        </motion.div>
    );
}

export function FAQ() {
    return (
        <section id="faq" className="py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
                    Sıkça Sorulan <span className="text-islamic-green">Sorular</span>
                </h2>
                <p className="text-gray-400 text-center mb-12 max-w-lg mx-auto">
                    Merak ettiğiniz her şeyin cevabı burada.
                </p>

                <div className="max-w-2xl mx-auto flex flex-col gap-3">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
