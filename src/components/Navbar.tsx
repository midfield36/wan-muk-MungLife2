import React from 'react';
import { ExternalLink } from 'lucide-react';
import { APP_CONFIG } from '../config';

interface NavbarProps {
  onOpenShare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenShare }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#101827]/85 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Brand Wordmark (Single text element with icon) */}
        <a
          href="#"
          className="flex items-center gap-2 text-base sm:text-lg font-black tracking-tight text-white whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#182338] to-[#101827] border border-[#60E6CC]/40 flex items-center justify-center text-sm shadow-sm text-[#60E6CC]">
            🐾
          </span>
          <span>
            멍라이프 <span className="text-[#60E6CC] font-semibold text-xs sm:text-sm">MungLife</span>
          </span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A8B3C7]">
          <a
            href="#hero"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            소개
          </a>
          <a
            href="#before-after"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            비교
          </a>
          <a
            href="#features"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            핵심 기능
          </a>
          <a
            href="#screenshots"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            화면 미리보기
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onOpenShare}
            className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-semibold text-[#A8B3C7] hover:text-white border border-slate-700/80 rounded-lg hover:bg-slate-800/60 transition-colors whitespace-nowrap shrink-0"
          >
            공유
          </button>
          <a
            href={APP_CONFIG.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-[#101827] bg-gradient-to-r from-[#60E6CC] to-[#34D399] hover:from-[#50d8bd] hover:to-[#2ec088] rounded-xl shadow-sm transition-all transform active:scale-95 whitespace-nowrap shrink-0"
          >
            <span>앱 바로가기</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
