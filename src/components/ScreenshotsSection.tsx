import React from 'react';
import { Upload, ZoomIn, Sparkles, Smartphone } from 'lucide-react';
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
    <section id="screenshots" className="py-14 md:py-20 bg-gradient-to-b from-[#FFFDF8] via-[#FFF9F2] to-[#FFFDF8] border-t border-[#F2ECE1] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEAE5] border border-[#FFC8BA] text-xs font-bold text-[#FF806B] mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>APP PREVIEW</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E232B] tracking-tight">
            멍라이프, 이렇게 사용해요!
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#666E7D] font-medium">
            스마트폰으로 언제 어디서나 손쉽게 만나는 멍라이프의 실제 화면입니다.
          </p>
        </div>

        {/* Screenshot Customization Banner */}
        <div className="max-w-xl mx-auto mb-10 p-4 rounded-2xl bg-white border border-[#FFE2D6] flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-[#FFF4C7] border border-[#FFE2B8] flex items-center justify-center text-lg shrink-0">
              📸
            </div>
            <div>
              <div className="text-xs font-extrabold text-[#1E232B]">실제 앱 화면 교체 기능 제공</div>
              <div className="text-[11px] text-[#717784] mt-0.5 font-medium">
                내가 캡처한 실제 멍라이프 화면 이미지를 업로드해 바로 반영할 수 있어요.
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenUpload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#FF806B] to-[#FF6F59] hover:from-[#f8715b] hover:to-[#f05e46] text-white text-xs font-bold rounded-xl shadow-xs transition-transform active:scale-95 shrink-0 whitespace-nowrap"
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
        <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#8C7D73] font-semibold md:hidden">
          <span>👈 좌우로 넘겨서 화면들을 둘러보세요 👉</span>
        </div>

        {/* Click-to-zoom note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-[#717784] font-medium flex items-center justify-center gap-1.5">
            <ZoomIn className="w-3.5 h-3.5 text-[#FF806B]" />
            각 화면에 마우스를 올리거나 터치하면 크게 확대하여 상세하게 보실 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};
