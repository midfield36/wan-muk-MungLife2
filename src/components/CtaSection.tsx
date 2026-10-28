import React from 'react';
import { ExternalLink, Share2, Sparkles, Heart } from 'lucide-react';
import { APP_CONFIG } from '../config';

interface CtaSectionProps {
  onOpenShare: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenShare }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFFDF8] via-[#FFF3EE] to-[#FFEFE8] border-t border-[#FFE5DC] relative overflow-hidden">
      {/* Background soft glow rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-r from-[#FFF4C7] via-[#FFD6CD] to-[#BCEBD9] rounded-full blur-3xl opacity-50 pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Accent Tag */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#FFB8A4] text-xs font-bold text-[#FF806B] shadow-xs mb-5">
          <Sparkles className="w-3.5 h-3.5 text-[#FF806B]" />
          <span>별도 다운로드 없이 웹 브라우저에서 바로 실행</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E232B] tracking-tight text-balance leading-tight">
          우리 강아지의 행복한 일상, <br />
          <span className="bg-gradient-to-r from-[#FF806B] via-[#FF6F59] to-[#FA5B41] bg-clip-text text-transparent">
            지금 시작해 보세요!
          </span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-base sm:text-lg text-[#555E6D] max-w-xl mx-auto leading-relaxed font-medium">
          멍라이프와 함께 더 편리하고 즐거운 반려 생활을 경험해 보세요.
        </p>

        {/* Big Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={APP_CONFIG.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#FF806B] to-[#FF6F59] hover:from-[#f8715b] hover:to-[#f05e46] text-white text-lg font-extrabold rounded-2xl shadow-xl shadow-[#FF806B]/30 hover:shadow-2xl hover:shadow-[#FF806B]/40 transition-all transform hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
          >
            <span>지금 멍라이프 이용하기</span>
            <ExternalLink className="w-5 h-5 stroke-[2.5]" />
          </a>

          <button
            type="button"
            onClick={onOpenShare}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-[#FFF9F2] border-2 border-[#FFE2D6] text-[#1E232B] text-base font-bold rounded-2xl transition-all shadow-sm hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
          >
            <Share2 className="w-4 h-4 text-[#FF806B]" />
            <span>친구에게 소개하기</span>
          </button>
        </div>

        {/* Trust Note */}
        <p className="mt-5 text-xs text-[#8C7D73] font-medium">
          스마트폰 및 PC 웹 브라우저 어디서든 터치 한 번으로 접속됩니다.
        </p>
      </div>
    </section>
  );
};
