import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="md:col-span-2 text-left">
                        <Link href="/" className="flex items-center gap-3 mb-6 w-fit">
                            <div className="w-10 h-10 relative overflow-hidden rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                <Image
                                    src="/app-logo.png"
                                    alt="Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">
                                İslami Yoldaş
                            </span>
                        </Link>
                        <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
                            İslami Yoldaş, şık tasarım ve yenilikçi teknoloji aracılığıyla dünya çapındaki
                            Müslümanların manevi hayatını iyileştirmeye adanmış modern bir İslami uygulamadır.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Facebook].map((Icon, i) => (
                                <button
                                    key={i}
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-islamic-green hover:border-islamic-green transition-all"
                                >
                                    <Icon size={18} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Ürün</h4>
                        <ul className="space-y-4">
                            <li><Link href="#features" className="text-gray-500 hover:text-white transition-colors">Özellikler</Link></li>
                            <li><Link href="#how-it-works" className="text-gray-500 hover:text-white transition-colors">Kurulum</Link></li>
                            <li><Link href="/" className="text-gray-500 hover:text-white transition-colors">Mobil Uygulama</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Yasal</h4>
                        <ul className="space-y-4">
                            <li><Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">Gizlilik Politikası</Link></li>
                            <li><Link href="/terms" className="text-gray-500 hover:text-white transition-colors">Kullanım Koşulları</Link></li>
                            <li><Link href="mailto:support@noorapp.com" className="text-gray-500 hover:text-white transition-colors">İletişim</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:row items-center justify-between pt-10 border-t border-white/5 text-gray-600 text-sm">
                    <p>© {new Date().getFullYear()} İslami Yoldaş. Tüm hakları saklıdır.</p>
                    <p className="mt-4 md:mt-0">Ummet için ❤️ ile yapıldı.</p>
                </div>
            </div>
        </footer>
    );
}
