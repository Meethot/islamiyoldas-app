import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "İslami Yoldaş - Modern İslami Yardımcınız",
  description: "İnancınızla bağ kurmanın modern ve zarif yolu. Günlük ayetler, namaz vakitleri ve daha fazlası.",
  openGraph: {
    title: "İslami Yoldaş - Modern İslami Uygulama",
    description: "İnancınızla bağ kurmanın modern ve zarif yolu.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#050505] text-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
