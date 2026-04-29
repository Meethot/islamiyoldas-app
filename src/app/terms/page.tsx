"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const content = {
    tr: {
        back: "Ana Sayfa'ya Dön",
        title: "Kullanım Şartları",
        date: "Son Güncelleme: 12.02.2026",
        intro: 'Lütfen İslami Yoldaş uygulamasını ("Uygulama") kullanmadan önce bu Kullanım Şartlarını ("Şartlar") dikkatlice okuyun. Uygulamayı indirerek veya kullanarak bu şartları kabul etmiş sayılırsınız.',
        sections: [
            {
                num: "1",
                title: "Kullanım Lisansı",
                text: "Acargur Studio, size Uygulamayı yalnızca kişisel ve ticari olmayan kullanımınız için indirme, kurma ve kullanma konusunda sınırlı, devredilemez bir lisans verir. Uygulamanın kaynak kodlarını kopyalamak, değiştirmek veya tersine mühendislik yapmak yasaktır.",
            },
            {
                num: "2",
                title: "Abonelikler ve Ödemeler",
                cards: [
                    {
                        icon: "💎",
                        title: "Premium Üyelik",
                        text: "Uygulamanın bazı gelişmiş özellikleri ücretli abonelik gerektirebilir.",
                    },
                    {
                        icon: "💳",
                        title: "Ödeme",
                        text: "Ödemeler, satın alma onayı ile Google Play Store veya Apple App Store hesabınızdan tahsil edilir.",
                    },
                    {
                        icon: "🔄",
                        title: "Otomatik Yenileme",
                        text: "Abonelik süresi bitiminden en az 24 saat önce iptal edilmediği sürece aboneliğiniz otomatik olarak yenilenir.",
                    },
                    {
                        icon: "❌",
                        title: "İptal",
                        text: "Aboneliğinizi dilediğiniz zaman telefonunuzun Ayarlar > Abonelikler bölümünden iptal edebilirsiniz. İptal ettiğinizde, ödenen sürenin sonuna kadar Premium özellikleri kullanmaya devam edersiniz. Geriye dönük iade yapılmaz.",
                    },
                ],
            },
            {
                num: "3",
                title: "Sorumluluk Reddi (Disclaimer)",
                cards: [
                    {
                        icon: "🕌",
                        title: "Namaz Vakitleri ve Kıble",
                        text: "Uygulama, namaz vakitlerini ve kıble yönünü hesaplamak için kabul görmüş algoritmalar ve konum verilerini kullanır. Ancak, teknolojik sınırlamalar veya GPS hataları nedeniyle nadiren de olsa sapmalar yaşanabilir.",
                        warning: "⚠️ Kullanıcıların vakitleri yerel otoritelerle (örn. Diyanet takvimi) teyit etmesi önerilir. Oluşabilecek zamanlama hatalarından Acargur Studio sorumlu tutulamaz.",
                    },
                    {
                        icon: "🔧",
                        title: "Kesintisiz Hizmet",
                        text: "Uygulamanın her zaman hatasız veya kesintisiz çalışacağını garanti etmiyoruz. Teknik bakımlar veya güncellemeler sırasında erişim geçici olarak durabilir.",
                    },
                ],
            },
            {
                num: "4",
                title: "Fikri Mülkiyet",
                text: "Uygulamanın tasarımı, logosu, metinleri ve kodları Acargur Studio mülkiyetindedir ve telif hakkı yasalarıyla korunmaktadır. İzinsiz kullanılamaz.",
            },
            {
                num: "5",
                title: "Değişiklikler",
                text: "Acargur Studio, bu şartları dilediği zaman güncelleme hakkını saklı tutar. Uygulamayı kullanmaya devam etmeniz, yeni şartları kabul ettiğiniz anlamına gelir.",
            },
            {
                num: "6",
                title: "Uygulanacak Hukuk",
                text: "Bu şartlar, Türkiye Cumhuriyeti yasalarına tabidir ve uyuşmazlıkların çözümünde Türk mahkemeleri yetkilidir.",
            },
            {
                num: "7",
                title: "İletişim",
                contactIntro: "Her türlü soru ve destek talebiniz için:",
            },
        ],
    },
    en: {
        back: "Back to Home",
        title: "Terms of Use",
        date: "Last Updated: February 12, 2026",
        intro: 'Please carefully read these Terms of Use ("Terms") before using the Islamic Companion app ("App"). By downloading or using the App, you are deemed to have accepted these terms.',
        sections: [
            {
                num: "1",
                title: "Usage License",
                text: "Acargur Studio grants you a limited, non-transferable license to download, install, and use the App solely for your personal and non-commercial use. Copying, modifying, or reverse-engineering the App's source code is prohibited.",
            },
            {
                num: "2",
                title: "Subscriptions & Payments",
                cards: [
                    {
                        icon: "💎",
                        title: "Premium Membership",
                        text: "Some advanced features of the App may require a paid subscription.",
                    },
                    {
                        icon: "💳",
                        title: "Payment",
                        text: "Payments are charged to your Google Play Store or Apple App Store account upon purchase confirmation.",
                    },
                    {
                        icon: "🔄",
                        title: "Auto-Renewal",
                        text: "Your subscription will automatically renew unless cancelled at least 24 hours before the end of the current period.",
                    },
                    {
                        icon: "❌",
                        title: "Cancellation",
                        text: "You can cancel your subscription at any time through your phone's Settings > Subscriptions. Upon cancellation, you will continue to enjoy Premium features until the end of the paid period. No retroactive refunds are provided.",
                    },
                ],
            },
            {
                num: "3",
                title: "Disclaimer",
                cards: [
                    {
                        icon: "🕌",
                        title: "Prayer Times & Qibla",
                        text: "The App uses widely accepted algorithms and location data to calculate prayer times and Qibla direction. However, rare deviations may occur due to technological limitations or GPS errors.",
                        warning: "⚠️ Users are advised to verify times with local authorities (e.g., Diyanet calendar). Acargur Studio cannot be held responsible for any timing discrepancies.",
                    },
                    {
                        icon: "🔧",
                        title: "Uninterrupted Service",
                        text: "We do not guarantee that the App will always function without errors or interruptions. Access may be temporarily unavailable during technical maintenance or updates.",
                    },
                ],
            },
            {
                num: "4",
                title: "Intellectual Property",
                text: "The design, logo, text, and code of the App are the property of Acargur Studio and are protected by copyright laws. Unauthorized use is prohibited.",
            },
            {
                num: "5",
                title: "Changes",
                text: "Acargur Studio reserves the right to update these terms at any time. Your continued use of the App means you accept the new terms.",
            },
            {
                num: "6",
                title: "Governing Law",
                text: "These terms are governed by the laws of the Republic of Turkey, and Turkish courts have jurisdiction over any disputes.",
            },
            {
                num: "7",
                title: "Contact",
                contactIntro: "For any questions or support requests:",
            },
        ],
    },
};

export default function TermsPage() {
    const [lang, setLang] = useState<"tr" | "en">("tr");
    const t = content[lang];

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-islamic-green/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-islamic-green hover:underline text-sm font-medium"
                    >
                        <ArrowLeft size={18} />
                        {t.back}
                    </Link>

                    <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1">
                        <button
                            onClick={() => setLang("tr")}
                            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${lang === "tr" ? "bg-islamic-green text-black" : "text-gray-400 hover:text-white"}`}
                        >
                            TR
                        </button>
                        <button
                            onClick={() => setLang("en")}
                            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${lang === "en" ? "bg-islamic-green text-black" : "text-gray-400 hover:text-white"}`}
                        >
                            EN
                        </button>
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-3">{t.title}</h1>
                <p className="text-gray-500 mb-12 text-sm">{t.date}</p>

                <p className="text-gray-300 leading-relaxed mb-12">{t.intro}</p>

                <div className="space-y-10">
                    {t.sections.map((section) => (
                        <section key={section.num} className="border border-white/10 rounded-2xl p-6 md:p-8">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-islamic-green/20 rounded-lg flex items-center justify-center text-islamic-green text-sm font-bold">
                                    {section.num}
                                </span>
                                {section.title}
                            </h2>

                            {section.text && (
                                <p className="text-gray-400 leading-relaxed">{section.text}</p>
                            )}

                            {section.cards && (
                                <div className="space-y-4">
                                    {section.cards.map((card, ci) => (
                                        <div key={ci} className="bg-white/5 rounded-xl p-5">
                                            <h3 className="font-semibold text-white mb-2">
                                                {card.icon} {card.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {card.text}
                                            </p>
                                            {card.warning && (
                                                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-3">
                                                    <p className="text-yellow-200 text-sm">
                                                        {card.warning}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {section.contactIntro && (
                                <>
                                    <p className="text-gray-400 leading-relaxed mb-4">{section.contactIntro}</p>
                                    <div className="bg-white/5 rounded-xl p-5">
                                        <p className="text-gray-300 text-sm">
                                            <span className="text-gray-500">{lang === "tr" ? "E-posta:" : "Email:"}</span>{" "}
                                            <a href="mailto:info@islamiyoldas.com" className="text-islamic-green hover:underline">
                                                info@islamiyoldas.com
                                            </a>
                                        </p>
                                    </div>
                                </>
                            )}
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}
