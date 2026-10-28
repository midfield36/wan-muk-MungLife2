import React from 'react';
import { ExternalLink, Share2 } from 'lucide-react';
import { APP_CONFIG } from '../config';

interface NavbarProps {
  onOpenShare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenShare }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFDF8]/90 backdrop-blur-md border-b border-[#F2ECE1]/80 transition-colors">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-base sm:text-lg font-black tracking-tight text-[#1E232B] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          <span className="w-8 h-8 rounded-xl bg-[#FFF4C7] border border-[#FFE58F] flex items-center justify-center text-base shadow-sm">
            🐾
          </span>
          <span className="flex items-baseline gap-1.5">
            <span className="font-extrabold text-[#1E232B]">멍라이프</span>
            <span className="text-[#FF806B] font-bold text-xs sm:text-sm">MungLife</span>
          </span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#666E7D]">
          <a
            href="#hero"
            className="hover:text-[#FF806B] transition-colors whitespace-nowrap shrink-0"
          >
            홈
          </a>
          <a
            href="#before"
            className="hover:text-[#FF806B] transition-colors whitespace-nowrap shrink-0"
          >
            불편함 해결
          </a>
          <a
            href="#after"
            className="hover:text-[#FF806B] transition-colors whitespace-nowrap shrink-0"
          >
            변화
          </a>
          <a
            href="#features"
            className="hover:text-[#FF806B] transition-colors whitespace-nowrap shrink-0"
          >
            주요 기능
          </a>
          <a
            href="#screenshots"
            className="hover:text-[#FF806B] transition-colors whitespace-nowrap shrink-0"
          >
            화면 미리보기
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onOpenShare}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#666E7D] hover:text-[#1E232B] bg-[#FFF8EE] hover:bg-[#FFF0DD] border border-[#F0E6D8] rounded-xl transition-all whitespace-nowrap shrink-0"
          >
            <Share2 className="w-3.5 h-3.5 text-[#FF806B]" />
            <span className="hidden sm:inline">공유</span>
          </button>

          <a
            href={APP_CONFIG.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#FF806B] to-[#FF6F59] hover:from-[#f8715b] hover:to-[#f05e46] rounded-xl shadow-md shadow-[#FF806B]/25 hover:shadow-[#FF806B]/35 transition-all transform active:scale-95 whitespace-nowrap shrink-0"
          >
            <span>앱 바로가기</span>
            <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </header>
  );
};
