import React from 'react';
import { ExternalLink, Share2, Sparkles } from 'lucide-react';
import { APP_CONFIG } from '../config';

interface CtaSectionProps {
  onOpenShare: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenShare }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#101827] via-[#141f32] to-[#101827] relative overflow-hidden">
      {/* Glow rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#60E6CC]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Accent Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#182338] border border-[#60E6CC]/30 text-xs text-[#60E6CC] font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>설치 없이 웹에서 바로 실행</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance leading-tight">
          우리 강아지를 위한 편리한 생활, <br />
          <span className="bg-gradient-to-r from-[#60E6CC] via-[#5EEAD4] to-[#34D399] bg-clip-text text-transparent">
            지금 시작하세요!
          </span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-base sm:text-lg text-[#A8B3C7] max-w-xl mx-auto leading-relaxed">
          언제 어디서나 반려견과 함께하는 일상에 필요한 정보를 멍라이프에서 만나보세요.
        </p>

        {/* Big Action Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={APP_CONFIG.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#60E6CC] to-[#34D399] hover:from-[#50d8bd] hover:to-[#2ec088] text-[#101827] text-lg font-extrabold rounded-2xl shadow-xl shadow-[#60E6CC]/25 hover:shadow-[#60E6CC]/35 transition-all transform active:scale-95 whitespace-nowrap"
          >
            <span>멍라이프 바로 이용하기</span>
            <ExternalLink className="w-5 h-5 stroke-[2.5]" />
          </a>

          <button
            type="button"
            onClick={onOpenShare}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#182338] hover:bg-slate-800 border border-slate-700 text-white text-base font-semibold rounded-2xl transition-all transform active:scale-95 whitespace-nowrap"
          >
            <Share2 className="w-4 h-4 text-[#60E6CC]" />
            <span>친구에게 소개하기</span>
          </button>
        </div>

        {/* Additional Trust note */}
        <p className="mt-5 text-xs text-slate-500">
          모바일 및 PC 웹 브라우저 어디서나 바로 접속할 수 있습니다.
        </p>
      </div>
    </section>
  );
};
