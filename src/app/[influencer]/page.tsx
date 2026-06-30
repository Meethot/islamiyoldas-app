"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { track } from "@vercel/analytics";

export default function InfluencerRedirect() {
  const params = useParams();
  const influencer = params?.influencer as string;

  useEffect(() => {
    if (influencer) {
      // Kullanıcının cihazını (OS) tespit et
      const userAgent = navigator.userAgent || navigator.vendor;
      let os = "Desktop/Other";
      if (/android/i.test(userAgent)) {
        os = "Android";
      } else if (/iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
        os = "iOS";
      }

      // Vercel Analytics'e influencer ismi VE Cihaz bilgisi ile birlikte etkinlik gönder
      track("Influencer Redirect", { name: influencer, os: os });
      
      // Cihaza göre doğru mağazaya yönlendiriyoruz
      if (os === "Android") {
        window.location.href = `https://play.google.com/store/apps/details?id=com.islamiyoldas.app&referrer=utm_source%3D${influencer}`;
      } else {
        window.location.href = `https://apps.apple.com/tr/app/i-slami-yolda%C5%9F-namaz-ramazan/id6759666173?pt=128582746&ct=${influencer}&mt=8&l=tr`;
      }
    }
  }, [influencer]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-islamic-green border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-400 font-medium animate-pulse">
          Mağazaya yönlendiriliyorsunuz...
        </p>
      </div>
    </div>
  );
}
