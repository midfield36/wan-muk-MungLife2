import React, { useState } from 'react';
import { X, Upload, Image, Trash2, Check, RefreshCw } from 'lucide-react';
import { ScreenshotData } from '../config';

interface ScreenshotUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  screenshots: ScreenshotData[];
  onUpdateScreenshot: (id: string, imageUrl?: string) => void;
  onResetAll: () => void;
  onToast: (msg: string) => void;
}

export const ScreenshotUploadModal: React.FC<ScreenshotUploadModalProps> = ({
  isOpen,
  onClose,
  screenshots,
  onUpdateScreenshot,
  onResetAll,
  onToast,
}) => {
  const [selectedId, setSelectedId] = useState(screenshots[0]?.id || 'screen-1');
  const [urlInput, setUrlInput] = useState('');

  if (!isOpen) return null;

  const currentItem = screenshots.find((s) => s.id === selectedId) || screenshots[0];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      onToast('이미지 파일(PNG, JPG, WebP 등)만 업로드할 수 있습니다.');
      return;
    }

    if (file.size > 8 * 1024 * 1024) {
      onToast('파일 크기는 8MB 이하여야 합니다.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      if (base64) {
        onUpdateScreenshot(selectedId, base64);
        onToast(`'${currentItem.title}' 스크린샷이 교체되었습니다!`);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;
    onUpdateScreenshot(selectedId, urlInput.trim());
    setUrlInput('');
    onToast(`'${currentItem.title}' 스크린샷 주소가 반영되었습니다!`);
  };

  const handleRemoveCustom = () => {
    onUpdateScreenshot(selectedId, undefined);
    onToast(`'${currentItem.title}' 이미지가 기본 목업으로 복원되었습니다.`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#182338] border border-slate-700 rounded-2xl p-6 shadow-2xl text-[#F8FAFC]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-700/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#60E6CC]/15 border border-[#60E6CC]/30 flex items-center justify-center text-[#60E6CC]">
              <Upload className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">실제 앱 화면 스크린샷 교체</h3>
              <p className="text-xs text-[#A8B3C7]">실제 멍라이프 앱 화면 이미지를 업로드해 바로 반영하세요</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="닫기"
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab selection for screen */}
        <div className="mt-5">
          <label className="block text-xs font-semibold text-[#A8B3C7] mb-2">
            교체할 화면 슬롯 선택
          </label>
          <div className="grid grid-cols-3 gap-2">
            {screenshots.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedId(s.id)}
                className={`py-2 px-2 text-xs font-medium rounded-xl border text-center transition-all ${
                  selectedId === s.id
                    ? 'bg-[#101827] border-[#60E6CC] text-[#60E6CC] font-bold shadow-sm'
                    : 'bg-[#101827]/50 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="truncate">{s.title}</div>
                {s.customImage && (
                  <span className="inline-block mt-0.5 text-[10px] text-emerald-400 font-semibold">● 커스텀 적용됨</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Upload methods */}
        <div className="mt-5 space-y-4">
          {/* Method 1: File Upload */}
          <div className="p-4 bg-[#101827] border border-slate-700/80 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                <Image className="w-4 h-4 text-[#60E6CC]" /> 파일 직접 선택
              </span>
              {currentItem.customImage && (
                <button
                  type="button"
                  onClick={handleRemoveCustom}
                  className="flex items-center gap-1 text-[11px] text-rose-400 hover:text-rose-300"
                >
                  <Trash2 className="w-3.5 h-3.5" /> 커스텀 삭제
                </button>
              )}
            </div>
            
            <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-700 hover:border-[#60E6CC]/60 rounded-xl cursor-pointer bg-[#182338]/40 hover:bg-[#182338] transition-colors group">
              <Upload className="w-6 h-6 text-slate-400 group-hover:text-[#60E6CC] mb-1.5 transition-colors" />
              <span className="text-xs font-medium text-slate-300">내 기기에서 스크린샷 이미지 선택</span>
              <span className="text-[11px] text-slate-500 mt-0.5">PNG, JPG, WebP 파일 지원</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Method 2: Image URL */}
          <form onSubmit={handleUrlSubmit} className="p-4 bg-[#101827] border border-slate-700/80 rounded-xl">
            <label className="block text-xs font-semibold text-slate-200 mb-1.5">
              또는 이미지 웹 주소(URL) 입력
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                placeholder="https://... 스크린샷 이미지 주소"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                className="w-full bg-[#182338] border border-slate-700 px-3 py-2 text-xs text-white rounded-lg outline-none focus:border-[#60E6CC]"
              />
              <button
                type="submit"
                disabled={!urlInput.trim()}
                className="px-3.5 py-2 bg-gradient-to-r from-[#60E6CC] to-[#34D399] disabled:opacity-50 text-[#101827] text-xs font-bold rounded-lg shrink-0"
              >
                적용
              </button>
            </div>
          </form>
        </div>

        {/* Footer controls */}
        <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={onResetAll}
            className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>전체 기본 목업으로 초기화</span>
          </button>
          
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors"
          >
            완료
          </button>
        </div>
      </div>
    </div>
  );
};
