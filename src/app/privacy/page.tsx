"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const content = {
    tr: {
        back: "Ana Sayfa'ya Dön",
        title: "Gizlilik Politikası",
        date: "Son Güncelleme: 17.02.2026",
        intro: 'Acargur Studio ("biz", "bizim") olarak, İslami Yoldaş uygulamasını ("uygulama") kullanırken gizliliğinizi korumaya büyük önem veriyoruz. Bu Gizlilik Politikası, Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) ve 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında hangi verileri topladığımızı, nasıl kullandığımızı ve haklarınızı açıklar.',
        sections: [
            {
                num: "1",
                title: "Veri Sorumlusu",
                text: "Kişisel verilerinizin işlenmesinden sorumlu veri sorumlusu Acargur Studio'dur. Veri işleme faaliyetlerimizle ilgili her türlü soru ve talepleriniz için support@islamiyoldas.com adresinden bizimle iletişime geçebilirsiniz.",
            },
            {
                num: "2",
                title: "Toplanan Bilgiler ve Kullanım Amacı",
                desc: "Uygulamamız, size en iyi deneyimi sunmak için minimum düzeyde veri erişimine ihtiyaç duyar.",
                cards: [
                    {
                        icon: "📍",
                        title: "Konum Bilgisi (Hassas Veri)",
                        text: "Namaz vakitlerini doğru hesaplamak ve Kıble yönünü gösterebilmek için cihazınızın tam konumuna (GPS) veya yaklaşık konumuna erişim izni isteriz.",
                        highlight: "⚡ Önemli: Bu konum verisi sadece cihazınızda anlık olarak işlenir. Sunucularımıza kaydedilmez, takip edilmez ve üçüncü taraflarla reklam amacıyla asla paylaşılmaz. Uygulamayı kapattığınızda konum kullanımı durur.",
                    },
                    {
                        icon: "📊",
                        title: "Kullanım Verileri",
                        text: "Uygulamanın performansını artırmak ve hataları tespit etmek için anonim teknik veriler (Cihaz modeli, işletim sistemi sürümü, çökme raporları) toplanabilir. Bu veriler kimliğinizle eşleştirilmez.",
                    },
                ],
            },
            {
                num: "3",
                title: "Verilerin İşlenmesinin Hukuki Dayanağı",
                desc: "Kişisel verilerinizi GDPR Madde 6 ve KVKK Madde 5 kapsamında aşağıdaki hukuki dayanaklara göre işliyoruz:",
                cards: [
                    {
                        icon: "✅",
                        title: "Açık Rıza (GDPR m.6/1-a)",
                        text: "Konum verileriniz, yalnızca sizin açık izninizle (cihaz izin penceresi aracılığıyla) işlenir. Bu izni dilediğiniz zaman cihaz ayarlarından geri alabilirsiniz.",
                    },
                    {
                        icon: "📋",
                        title: "Sözleşmenin İfası (GDPR m.6/1-b)",
                        text: "Premium abonelik satın alımları ve abonelik yönetimi için gerekli olan verilerin işlenmesi, sizinle aramızdaki sözleşmenin ifası kapsamındadır.",
                    },
                    {
                        icon: "⚖️",
                        title: "Meşru Menfaat (GDPR m.6/1-f)",
                        text: "Uygulamanın performansını iyileştirmek, hataları tespit etmek ve kullanıcı deneyimini geliştirmek için anonim analitik verileri toplamak, meşru menfaatimiz kapsamındadır. Bu veriler kimliğinizi tanımlayacak şekilde işlenmez.",
                    },
                ],
            },
            {
                num: "4",
                title: "Üçüncü Taraf Hizmetler",
                desc: "Uygulama altyapısını ve güvenliğini sağlamak için güvenilir servis sağlayıcıları kullanıyoruz:",
                cards: [
                    {
                        icon: "🛒",
                        title: "Google Play Services & Apple StoreKit",
                        text: "Uygulama içi satın alımlar (Premium üyelik) ve lisans kontrolü için kullanılır. Ödeme bilgileriniz (Kredi kartı vb.) doğrudan Google veya Apple tarafından işlenir; biz bu bilgilere asla erişemeyiz ve saklamayız.",
                    },
                    {
                        icon: "📈",
                        title: "Firebase Analytics (Google)",
                        text: "Uygulama hatalarını ve kullanım istatistiklerini anonim olarak analiz etmek için kullanılır.",
                    },
                    {
                        icon: "💳",
                        title: "RevenueCat",
                        text: "Uygulama içi abonelik yönetimi için kullanılır. RevenueCat, satın alma durumunuzu ve abonelik bilgilerinizi işler. Ödeme bilgilerinize (kredi kartı vb.) erişmez; bu bilgiler yalnızca Google veya Apple tarafından işlenir.",
                    },
                    {
                        icon: "📊",
                        title: "Amplitude Analytics",
                        text: "Kullanıcı deneyimini iyileştirmek ve uygulama kullanım kalıplarını anlamak için anonim analitik verileri toplamak amacıyla kullanılır. Toplanan veriler kişisel kimliğinizle eşleştirilmez.",
                    },
                    {
                        icon: "🔔",
                        title: "OneSignal",
                        text: "Uygulama içi ve anlık bildirimler (push notification) göndermek için kullanılır. OneSignal, bildirim tercihlerinizi ve anonim cihaz tanımlayıcılarını işler. Kişisel bilgileriniz (ad, e-posta vb.) OneSignal ile paylaşılmaz.",
                    },
                    {
                        icon: "🤖",
                        title: "Google Gemini AI (Yapay Zeka Mentor)",
                        text: "Uygulamamızdaki \"Manevi Rehber\" (AI Mentor) özelliği, kişisel manevi rehberlik sağlamak için kullanıcının yazdığı soruları Google Gemini AI API'sine gönderir. Gönderilen veriler yalnızca kullanıcının yazdığı mesajlar ve seçili uygulama dilidir. Mesajlar Firebase Cloud Functions aracılığıyla Google Gemini API'sine iletilir ve yanıt oluşturulduktan sonra sunucularımızda veya Google sunucularında kalıcı olarak saklanmaz. Bu özellik, ilk kullanımdan önce açık bir rıza ekranı gösterir; kullanıcı onay vermeden bu özellik kullanılamaz.",
                    },
                ],
            },
            {
                num: "5",
                title: "Kullanıcı Hakları (GDPR & KVKK)",
                desc: "GDPR (Madde 15-22) ve KVKK (Madde 11) kapsamında aşağıdaki haklara sahipsiniz:",
                cards: [
                    {
                        icon: "🔍",
                        title: "Erişim Hakkı",
                        text: "Kişisel verilerinizin işlenip işlenmediğini öğrenme ve işlenen verilerinize erişim talep etme hakkınız vardır.",
                    },
                    {
                        icon: "✏️",
                        title: "Düzeltme Hakkı",
                        text: "Yanlış veya eksik kişisel verilerinizin düzeltilmesini isteme hakkınız vardır.",
                    },
                    {
                        icon: "🗑️",
                        title: "Silme Hakkı (Unutulma Hakkı)",
                        text: "Belirli koşullar altında kişisel verilerinizin silinmesini talep etme hakkınız vardır. Uygulama içindeki Profilim bölümünden tüm verilerinizi doğrudan silebilirsiniz.",
                    },
                    {
                        icon: "⏸️",
                        title: "İşlemeyi Kısıtlama Hakkı",
                        text: "Belirli durumlarda kişisel verilerinizin işlenmesinin kısıtlanmasını isteme hakkınız vardır.",
                    },
                    {
                        icon: "📦",
                        title: "Veri Taşınabilirliği Hakkı",
                        text: "Verilerinizi yapılandırılmış, yaygın kullanılan ve makine tarafından okunabilir bir biçimde alma hakkınız vardır. Uygulama içindeki Profilim bölümünden verilerinizi cihazınıza indirebilirsiniz.",
                    },
                    {
                        icon: "🚫",
                        title: "İtiraz Hakkı",
                        text: "Meşru menfaate dayalı veri işleme faaliyetlerine itiraz etme hakkınız vardır.",
                    },
                    {
                        icon: "↩️",
                        title: "Rızayı Geri Çekme Hakkı",
                        text: "Rızanıza dayalı olarak işlenen verileriniz için, rızanızı dilediğiniz zaman geri çekme hakkınız vardır. Rızanızı geri çekmeniz, geri çekmeden önce yapılan işlemenin hukuka uygunluğunu etkilemez.",
                    },
                ],
                highlight: "Bu haklarınızı kullanmak için support@islamiyoldas.com adresine e-posta gönderebilirsiniz. Talebiniz en geç 30 gün içinde yanıtlanacaktır.",
            },
            {
                num: "6",
                title: "Veri Saklama Süresi",
                text: "Kişisel verileriniz (okuduğunuz ayetler, zikir sayıları, tercihler vb.) yalnızca cihazınızın yerel hafızasında saklanır ve uygulamayı sildiğinizde otomatik olarak kaldırılır. Anonim analitik veriler, analiz amacıyla hizmet sağlayıcılarımız tarafından kendi saklama politikalarına uygun olarak tutulur. Abonelik verileri, aktif abonelik süresince ve yasal yükümlülüklerimizin gerektirdiği süre boyunca saklanır.",
            },
            {
                num: "7",
                title: "Uluslararası Veri Transferleri",
                text: "Kullandığımız bazı üçüncü taraf hizmet sağlayıcıları (Firebase, RevenueCat, Amplitude) ABD merkezlidir. Bu hizmet sağlayıcılarına aktarılan anonim veriler, GDPR Madde 46 kapsamında Standart Sözleşme Hükümleri (SCC) veya diğer uygun güvenceler çerçevesinde gerçekleştirilir. Her bir hizmet sağlayıcı, kendi gizlilik politikasına uygun olarak verilerinizi korumakla yükümlüdür.",
            },
            {
                num: "8",
                title: "Veri Güvenliği",
                text: 'Kullanıcı verilerinizin güvenliği bizim için önceliktir. İslami Yoldaş, "Önce Gizlilik" prensibiyle tasarlanmıştır. Kişisel verileriniz (okuduğunuz ayetler, zikir sayıları vb.) cihazınızın yerel hafızasında saklanır. Bizim tarafımızdan yönetilen harici bir veritabanına kişisel verileriniz gönderilmez.',
                privacyFirst: "Önce Gizlilik",
            },
            {
                num: "9",
                title: "Çocukların Gizliliği",
                text: "Uygulamamız genel izleyici kitlesine hitap etmektedir. 16 yaşın altındaki çocuklardan (GDPR kapsamında) bilerek kişisel veri toplamayız. Ebeveynlerin veya yasal temsilcilerin, çocuklarının veri işleme faaliyetlerine onay vermesi gerekmektedir.",
            },
            {
                num: "10",
                title: "Şikayet Hakkı",
                text: "Kişisel verilerinizin işlenmesiyle ilgili endişeleriniz varsa, öncelikle support@islamiyoldas.com adresinden bizimle iletişime geçmenizi rica ederiz. Bunun yanı sıra, GDPR kapsamında bulunduğunuz ülkedeki Veri Koruma Otoritesine (DPA) veya KVKK kapsamında Kişisel Verileri Koruma Kurumu'na (KVKK Kurumu) şikayette bulunma hakkınız saklıdır.",
            },
            {
                num: "11",
                title: "Politikadaki Değişiklikler",
                text: "Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Değişiklikler bu sayfada yayınlandığı tarihte yürürlüğe girer. Önemli değişikliklerde uygulama içinden bildirim gönderebiliriz.",
            },
            {
                num: "12",
                title: "İletişim",
                contactIntro: "Gizlilik politikamızla ilgili sorularınız veya GDPR/KVKK kapsamındaki haklarınızı kullanmak için bizimle iletişime geçebilirsiniz:",
                developer: "Acargur Studio",
            },
        ],
    },
    en: {
        back: "Back to Home",
        title: "Privacy Policy",
        date: "Last Updated: February 17, 2026",
        intro: 'At Acargur Studio ("we", "our"), we place great importance on protecting your privacy while using the Islamic Companion app ("app"). This Privacy Policy explains, in accordance with the EU General Data Protection Regulation (GDPR) and the Turkish Personal Data Protection Law (KVKK No. 6698), what data we collect, how we use it, and your rights.',
        sections: [
            {
                num: "1",
                title: "Data Controller",
                text: "The data controller responsible for processing your personal data is Acargur Studio. For any questions or requests regarding our data processing activities, please contact us at support@islamiyoldas.com.",
            },
            {
                num: "2",
                title: "Collected Information & Purpose of Use",
                desc: "Our app requires minimal data access to provide you with the best experience.",
                cards: [
                    {
                        icon: "📍",
                        title: "Location Data (Sensitive)",
                        text: "We request access to your device's precise (GPS) or approximate location to accurately calculate prayer times and display the Qibla direction.",
                        highlight: "⚡ Important: This location data is only processed locally on your device in real-time. It is never stored on our servers, tracked, or shared with third parties for advertising purposes. Location usage stops when you close the app.",
                    },
                    {
                        icon: "📊",
                        title: "Usage Data",
                        text: "Anonymous technical data (device model, OS version, crash reports) may be collected to improve app performance and detect errors. This data is never linked to your identity.",
                    },
                ],
            },
            {
                num: "3",
                title: "Legal Basis for Processing",
                desc: "We process your personal data under the following legal bases pursuant to GDPR Article 6 and KVKK Article 5:",
                cards: [
                    {
                        icon: "✅",
                        title: "Consent (GDPR Art. 6(1)(a))",
                        text: "Your location data is only processed with your explicit consent (via the device permission prompt). You can withdraw this consent at any time through your device settings.",
                    },
                    {
                        icon: "📋",
                        title: "Contractual Necessity (GDPR Art. 6(1)(b))",
                        text: "Processing of data necessary for Premium subscription purchases and subscription management falls under the performance of a contract between you and us.",
                    },
                    {
                        icon: "⚖️",
                        title: "Legitimate Interest (GDPR Art. 6(1)(f))",
                        text: "Collecting anonymous analytics data to improve app performance, detect errors, and enhance user experience falls under our legitimate interest. This data is not processed in a way that identifies you personally.",
                    },
                ],
            },
            {
                num: "4",
                title: "Third-Party Services",
                desc: "We use trusted service providers to ensure app infrastructure and security:",
                cards: [
                    {
                        icon: "🛒",
                        title: "Google Play Services & Apple StoreKit",
                        text: "Used for in-app purchases (Premium membership) and license verification. Your payment information (credit card, etc.) is processed directly by Google or Apple; we never access or store this information.",
                    },
                    {
                        icon: "📈",
                        title: "Firebase Analytics (Google)",
                        text: "Used to anonymously analyze app errors and usage statistics.",
                    },
                    {
                        icon: "💳",
                        title: "RevenueCat",
                        text: "Used for in-app subscription management. RevenueCat processes your purchase status and subscription information. It does not access your payment details (credit card, etc.); these are handled solely by Google or Apple.",
                    },
                    {
                        icon: "📊",
                        title: "Amplitude Analytics",
                        text: "Used to collect anonymous analytics data to improve user experience and understand app usage patterns. The collected data is not linked to your personal identity.",
                    },
                    {
                        icon: "🔔",
                        title: "OneSignal",
                        text: "Used to send in-app and push notifications. OneSignal processes your notification preferences and anonymous device identifiers. Your personal information (name, email, etc.) is not shared with OneSignal.",
                    },
                    {
                        icon: "🤖",
                        title: "Google Gemini AI (AI Mentor)",
                        text: "The \"Spiritual Mentor\" (AI Mentor) feature in our app sends user-typed questions to the Google Gemini AI API to provide personalized spiritual guidance. The only data sent is the user's typed messages and the selected app language. Messages are forwarded to the Google Gemini API through Firebase Cloud Functions and are not permanently stored on our servers or Google's servers after the response is generated. This feature displays an explicit consent screen before first use; users cannot use this feature without providing consent.",
                    },
                ],
            },
            {
                num: "5",
                title: "Your Rights (GDPR & KVKK)",
                desc: "Under GDPR (Articles 15-22) and KVKK (Article 11), you have the following rights:",
                cards: [
                    {
                        icon: "🔍",
                        title: "Right of Access",
                        text: "You have the right to know whether your personal data is being processed and to request access to your processed data.",
                    },
                    {
                        icon: "✏️",
                        title: "Right to Rectification",
                        text: "You have the right to request correction of inaccurate or incomplete personal data.",
                    },
                    {
                        icon: "🗑️",
                        title: "Right to Erasure (Right to Be Forgotten)",
                        text: "Under certain conditions, you have the right to request the deletion of your personal data. You can directly delete all your data from the My Profile section within the app.",
                    },
                    {
                        icon: "⏸️",
                        title: "Right to Restriction of Processing",
                        text: "In certain circumstances, you have the right to request restriction of the processing of your personal data.",
                    },
                    {
                        icon: "📦",
                        title: "Right to Data Portability",
                        text: "You have the right to receive your data in a structured, commonly used, and machine-readable format. You can download your data to your device from the My Profile section within the app.",
                    },
                    {
                        icon: "🚫",
                        title: "Right to Object",
                        text: "You have the right to object to data processing activities based on legitimate interest.",
                    },
                    {
                        icon: "↩️",
                        title: "Right to Withdraw Consent",
                        text: "For data processed based on your consent, you have the right to withdraw your consent at any time. Withdrawal of consent does not affect the lawfulness of processing carried out before the withdrawal.",
                    },
                ],
                highlight: "To exercise any of these rights, please email us at support@islamiyoldas.com. Your request will be responded to within 30 days.",
            },
            {
                num: "6",
                title: "Data Retention",
                text: "Your personal data (verses you read, dhikr counts, preferences, etc.) is stored exclusively in your device's local storage and is automatically removed when you uninstall the app. Anonymous analytics data is retained by our service providers in accordance with their own retention policies. Subscription data is retained for the duration of your active subscription and for as long as required by our legal obligations.",
            },
            {
                num: "7",
                title: "International Data Transfers",
                text: "Some of the third-party service providers we use (Firebase, RevenueCat, Amplitude) are based in the United States. Anonymous data transferred to these providers is carried out under Standard Contractual Clauses (SCCs) or other appropriate safeguards pursuant to GDPR Article 46. Each service provider is obligated to protect your data in accordance with its own privacy policy.",
            },
            {
                num: "8",
                title: "Data Security",
                text: 'The security of your data is our priority. Islamic Companion is designed with a "Privacy First" principle. Your personal data (verses you read, dhikr counts, etc.) is stored in your device\'s local storage. No personal data is sent to any external database managed by us.',
                privacyFirst: "Privacy First",
            },
            {
                num: "9",
                title: "Children's Privacy",
                text: "Our app is intended for a general audience. We do not knowingly collect personal data from children under the age of 16 (as per GDPR). Parents or legal guardians must provide consent for any data processing activities involving their children.",
            },
            {
                num: "10",
                title: "Right to Lodge a Complaint",
                text: "If you have concerns about how your personal data is processed, we encourage you to first contact us at support@islamiyoldas.com. Additionally, under GDPR, you have the right to lodge a complaint with the Data Protection Authority (DPA) in your country of residence. Under KVKK, you may file a complaint with the Turkish Personal Data Protection Authority (KVKK Board).",
            },
            {
                num: "11",
                title: "Changes to This Policy",
                text: "We may update this privacy policy from time to time. Changes take effect on the date they are published on this page. We may send in-app notifications for significant changes.",
            },
            {
                num: "12",
                title: "Contact",
                contactIntro: "For questions about our privacy policy or to exercise your rights under GDPR/KVKK, please contact us:",
                developer: "Acargur Studio",
            },
        ],
    },
};

export default function PrivacyPage() {
    const [lang, setLang] = useState<"tr" | "en">("tr");
    const t = content[lang];

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-islamic-green/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
                {/* Top bar with back link and language toggle */}
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

                            {section.desc && (
                                <p className="text-gray-400 leading-relaxed mb-5">{section.desc}</p>
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
                                            {"highlight" in card && card.highlight && (
                                                <div className="bg-islamic-green/10 border border-islamic-green/20 rounded-lg p-4 mt-3">
                                                    <p className="text-islamic-green text-sm font-medium">
                                                        {card.highlight}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {"highlight" in section && section.highlight && (
                                <div className="bg-islamic-green/10 border border-islamic-green/20 rounded-lg p-4 mt-5">
                                    <p className="text-islamic-green text-sm font-medium">
                                        {section.highlight}
                                    </p>
                                </div>
                            )}

                            {section.text && (
                                <p className="text-gray-400 leading-relaxed">
                                    {section.privacyFirst
                                        ? section.text.split(section.privacyFirst).map((part, i, arr) =>
                                            i < arr.length - 1 ? (
                                                <span key={i}>
                                                    {part}
                                                    <span className="text-islamic-green font-medium">
                                                        &quot;{section.privacyFirst}&quot;
                                                    </span>
                                                </span>
                                            ) : (
                                                <span key={i}>{part}</span>
                                            )
                                        )
                                        : section.text}
                                </p>
                            )}

                            {section.contactIntro && (
                                <>
                                    <p className="text-gray-400 leading-relaxed mb-4">{section.contactIntro}</p>
                                    <div className="bg-white/5 rounded-xl p-5 space-y-2">
                                        <p className="text-gray-300 text-sm">
                                            <span className="text-gray-500">{lang === "tr" ? "E-posta:" : "Email:"}</span>{" "}
                                            <a href="mailto:support@islamiyoldas.com" className="text-islamic-green hover:underline">
                                                support@islamiyoldas.com
                                            </a>
                                        </p>
                                        <p className="text-gray-300 text-sm">
                                            <span className="text-gray-500">{lang === "tr" ? "Geliştirici:" : "Developer:"}</span>{" "}
                                            {section.developer}
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
