import React from 'react';
import { ExternalLink, Share2 } from 'lucide-react';
import { APP_CONFIG } from '../config';

interface FooterProps {
  onOpenShare: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenShare }) => {
  return (
    <footer className="w-full bg-[#0b111e] border-t border-slate-800/90 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        {/* Brand & Slogan */}
        <div className="space-y-1">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-lg font-black text-white">
              멍라이프 <span className="text-[#60E6CC] font-bold">MungLife</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#A8B3C7]">
            반려견과 함께하는 더 편리한 일상
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
          <a
            href={APP_CONFIG.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#60E6CC] transition-colors whitespace-nowrap"
          >
            <span>실제 앱 바로가기</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={onOpenShare}
            className="inline-flex items-center gap-1.5 hover:text-[#60E6CC] transition-colors whitespace-nowrap"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>친구에게 공유하기</span>
          </button>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-500 font-mono">
          Copyright © 2026 MungLife
        </div>
      </div>
    </footer>
  );
};
