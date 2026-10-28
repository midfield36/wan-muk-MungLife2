import React from 'react';
import { ExternalLink, Share2, Sparkles, MapPin, Heart } from 'lucide-react';
import { APP_CONFIG, ScreenshotData } from '../config';
import { PhoneMockup } from './PhoneMockup';

interface HeroSectionProps {
  heroScreenshot: ScreenshotData;
  onOpenShare: () => void;
  onOpenZoom: () => void;
  onOpenUpload: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  heroScreenshot,
  onOpenShare,
  onOpenZoom,
  onOpenUpload,
}) => {
  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#FFF6EB] to-[#FFFDF8]">
      {/* Warm ambient pastel blurs */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-[#FFF4C7] rounded-full blur-3xl opacity-70 pointer-events-none -z-10" />
      <div className="absolute top-12 right-1/4 w-96 h-96 bg-[#FFB8A4] rounded-full blur-3xl opacity-40 pointer-events-none -z-10" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-[#BCEBD9] rounded-full blur-3xl opacity-30 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4C7] border border-[#FFE2B8] text-xs font-bold text-[#A85800] shadow-xs">
              <span className="text-sm">🐾</span>
              <span>{APP_CONFIG.kicker}</span>
            </div>

            {/* App Brand Name Highlight */}
            <div className="pt-1">
              <span className="text-lg sm:text-xl font-black text-[#FF806B] tracking-tight">
                멍라이프 <span className="font-extrabold text-sm text-[#FF806B]/80">MungLife</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#1E232B] tracking-tight leading-[1.25] text-balance">
              우리 강아지와 함께하는 <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#FF806B] via-[#FF6F59] to-[#FA5B41] bg-clip-text text-transparent">
                모든 순간, 멍라이프!
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#555E6D] leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              {APP_CONFIG.subDescription}
            </p>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a
                href={APP_CONFIG.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#FF806B] to-[#FF6F59] hover:from-[#f8715b] hover:to-[#f05e46] text-white text-base font-extrabold rounded-2xl shadow-lg shadow-[#FF806B]/30 hover:shadow-xl hover:shadow-[#FF806B]/40 transition-all transform hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
              >
                <span>멍라이프 시작하기</span>
                <ExternalLink className="w-4 h-4 stroke-[2.5]" />
              </a>

              <button
                type="button"
                onClick={onOpenShare}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-[#FFF9F2] border-2 border-[#FFE8DC] hover:border-[#FFB8A4] text-[#1E232B] text-base font-bold rounded-2xl transition-all shadow-xs hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
              >
                <Share2 className="w-4 h-4 text-[#FF806B]" />
                <span>친구에게 공유하기</span>
              </button>
            </div>

            {/* 3 Pastel Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs font-semibold text-[#666E7D]">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-[#F0EAE1] shadow-xs">
                <span className="text-amber-500">✨</span>
                <span>가입 없이 즉시 이용</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-[#F0EAE1] shadow-xs">
                <span className="text-rose-500">🏥</span>
                <span>전국 24시 응급병원</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-[#F0EAE1] shadow-xs">
                <span className="text-emerald-500">☕</span>
                <span>반려견 동반 장소 지도</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Phone Mockup with Playful Pastel Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            {/* Ambient Pastel Glow behind phone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF4C7] via-[#FFD6CD] to-[#BCEBD9] rounded-full blur-3xl opacity-60 -z-10 scale-95" />

            {/* Ambient Cute Floating Badges */}
            <div className="absolute -top-3 -left-3 sm:left-2 z-20 hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#FFE2B8] shadow-md text-xs font-bold text-[#8C5800] backdrop-blur-sm">
              <span className="text-[#FF806B]">💛</span>
              <span>우리 댕댕이 맞춤</span>
            </div>

            <div className="absolute top-1/2 -right-4 sm:-right-5 z-20 hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#BCEBD9] shadow-md text-xs font-bold text-[#1E7D5F] backdrop-blur-sm">
              <MapPin className="w-3.5 h-3.5 text-[#1E7D5F]" />
              <span>주변 24시 병원</span>
            </div>

            <div className="absolute -bottom-3 left-4 z-20 hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#FFB8A4] shadow-md text-xs font-bold text-[#A83724] backdrop-blur-sm">
              <span>🦴</span>
              <span>동반 카페 & 산책로</span>
            </div>

            {/* Floating Phone */}
            <div className="animate-float">
              <PhoneMockup
                data={heroScreenshot}
                onOpenZoom={onOpenZoom}
                onOpenUpload={onOpenUpload}
                showUploadTrigger={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
