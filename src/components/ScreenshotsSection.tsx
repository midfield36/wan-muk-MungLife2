import React from 'react';
import { Upload, ZoomIn, Info, Sparkles } from 'lucide-react';
import { ScreenshotData } from '../config';
import { PhoneMockup } from './PhoneMockup';

interface ScreenshotsSectionProps {
  screenshots: ScreenshotData[];
  onSelectZoom: (item: ScreenshotData) => void;
  onOpenUpload: () => void;
}

export const ScreenshotsSection: React.FC<ScreenshotsSectionProps> = ({
  screenshots,
  onSelectZoom,
  onOpenUpload,
}) => {
  return (
    <section id="screenshots" className="py-14 md:py-20 bg-[#101827] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#60E6CC] tracking-wider uppercase mb-2">
            <span>APP PREVIEW</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            멍라이프, 이렇게 사용해요
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#A8B3C7]">
            복잡한 설명보다 실제 화면으로 확인해 보세요.
          </p>
        </div>

        {/* Screenshot Customization Banner */}
        <div className="max-w-xl mx-auto mb-10 p-3.5 sm:p-4 rounded-2xl bg-[#182338] border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-2.5 text-left">
            <div className="w-8 h-8 rounded-xl bg-[#60E6CC]/15 border border-[#60E6CC]/30 flex items-center justify-center text-[#60E6CC] shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">실제 앱 스크린샷 직접 교체 지원</div>
              <div className="text-[11px] text-slate-400">
                개발자 또는 사용자가 보유한 스크린샷 이미지 파일을 즉시 반영할 수 있습니다.
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenUpload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-[#60E6CC] to-[#34D399] hover:from-[#50d8bd] hover:to-[#2ec088] text-[#101827] text-xs font-bold rounded-xl transition-transform active:scale-95 shrink-0 whitespace-nowrap"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>스크린샷 변경하기</span>
          </button>
        </div>

        {/* Screenshots Container: Desktop 3-column / Mobile horizontal scroll carousel */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-2 no-scrollbar">
          {screenshots.map((screen) => (
            <div
              key={screen.id}
              className="snap-center shrink-0 w-[280px] sm:w-[300px] md:w-auto mx-auto"
            >
              <PhoneMockup
                data={screen}
                onOpenZoom={() => onSelectZoom(screen)}
                onOpenUpload={onOpenUpload}
                showUploadTrigger={true}
              />
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-400 md:hidden">
          <span>👈 좌우로 넘겨서 화면들을 둘러보세요 👉</span>
        </div>

        {/* Click-to-zoom note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5">
            <ZoomIn className="w-3.5 h-3.5 text-[#60E6CC]" />
            각 화면을 클릭하면 큰 화면으로 상세하게 살펴볼 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};
