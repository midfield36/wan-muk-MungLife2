import React from 'react';
import { ExternalLink, Share2, Sparkles, MapPin, Heart, Shield } from 'lucide-react';
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
    <section id="hero" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#60E6CC]/10 via-[#182338]/40 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182338] border border-[#60E6CC]/30 text-xs text-[#60E6CC] font-semibold shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60E6CC]" />
              <span>{APP_CONFIG.kicker}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.2] text-balance">
              우리 강아지와 함께하는 일상, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#60E6CC] via-[#5EEAD4] to-[#34D399] bg-clip-text text-transparent">
                멍라이프 하나로!
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#A8B3C7] leading-relaxed max-w-xl mx-auto lg:mx-0">
              {APP_CONFIG.subDescription}
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href={APP_CONFIG.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#60E6CC] to-[#34D399] hover:from-[#50d8bd] hover:to-[#2ec088] text-[#101827] text-base font-extrabold rounded-2xl shadow-lg shadow-[#60E6CC]/20 hover:shadow-[#60E6CC]/30 transition-all transform active:scale-95 whitespace-nowrap"
              >
                <span>멍라이프 지금 시작하기</span>
                <ExternalLink className="w-4 h-4 stroke-[2.5]" />
              </a>

              <button
                type="button"
                onClick={onOpenShare}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#182338] hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-white text-base font-semibold rounded-2xl transition-all transform active:scale-95 whitespace-nowrap"
              >
                <Share2 className="w-4 h-4 text-[#60E6CC]" />
                <span>친구에게 공유하기</span>
              </button>
            </div>

            {/* 3 Micro-Proof Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#60E6CC]" />
                <span>가입 절차 없이 즉시 이용</span>
              </div>
              <span className="hidden sm:inline text-slate-600">·</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#60E6CC]" />
                <span>전국 24시 동물병원 실시간 조회</span>
              </div>
              <span className="hidden sm:inline text-slate-600">·</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#60E6CC]" />
                <span>반려견 동반 장소 지도 검색</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Phone Mockup with Playful Floating Ornaments */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-4 lg:mt-0">
            {/* Glow Aura */}
            <div className="absolute inset-0 bg-[#60E6CC]/15 rounded-full blur-3xl -z-10 scale-90" />

            {/* Ambient Pet Ornaments (Paw, Heart, MapPin) */}
            <div className="absolute -top-3 -left-4 sm:left-4 z-20 animate-bounce duration-1000 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#182338]/90 border border-slate-700 shadow-lg text-xs font-semibold text-white backdrop-blur-sm">
              <span className="text-[#FF9F83]">❤️</span>
              <span>우리 댕댕이 맞춤</span>
            </div>

            <div className="absolute top-1/2 -right-3 sm:-right-4 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#182338]/90 border border-[#60E6CC]/40 shadow-lg text-xs font-semibold text-[#60E6CC] backdrop-blur-sm">
              <MapPin className="w-3.5 h-3.5" />
              <span>주변 24시 병원</span>
            </div>

            <div className="absolute -bottom-4 left-6 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#182338]/90 border border-slate-700 shadow-lg text-xs font-semibold text-slate-200 backdrop-blur-sm">
              <span className="text-amber-300">🐾</span>
              <span>카페 & 공원 찾기</span>
            </div>

            {/* Floating Phone with smooth gentle float */}
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
