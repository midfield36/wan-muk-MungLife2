import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { ScreenshotData } from '../config';

interface LightboxModalProps {
  screenshot: ScreenshotData | null;
  onClose: () => void;
  renderScreenContent: (item: ScreenshotData) => React.ReactNode;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  screenshot,
  onClose,
  renderScreenContent,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (screenshot) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [screenshot, onClose]);

  if (!screenshot) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-sm w-full mx-auto bg-[#182338] border border-slate-700 rounded-3xl p-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-700/60 mb-3">
          <div>
            <h4 className="text-sm font-bold text-white">{screenshot.title}</h4>
            <p className="text-xs text-[#A8B3C7]">{screenshot.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="닫기"
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Screen Frame Mockup */}
        <div className="relative mx-auto rounded-[2.5rem] border-4 border-slate-700 bg-[#101827] shadow-xl overflow-hidden aspect-[9/19] max-h-[75vh]">
          {/* Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#0B111E] rounded-full z-20 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-900 ml-auto mr-2" />
          </div>

          {/* Screen Content */}
          <div className="w-full h-full pt-8 overflow-y-auto">
            {screenshot.customImage ? (
              <img
                src={screenshot.customImage}
                alt={screenshot.title}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            ) : (
              renderScreenContent(screenshot)
            )}
          </div>
        </div>

        <p className="text-center text-[11px] text-slate-400 mt-3">
          바깥 영역을 클릭하거나 ESC 키를 누르면 닫힙니다.
        </p>
      </div>
    </div>
  );
};
