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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white border border-[#F2ECE1] rounded-3xl p-6 shadow-2xl text-[#30343B]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#F2ECE1]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FFF4C7] border border-[#FFE2B8] flex items-center justify-center text-[#FF806B]">
              <Upload className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-[#1E232B]">실제 앱 화면 스크린샷 교체</h3>
              <p className="text-xs text-[#717784]">실제 멍라이프 앱 화면 이미지를 업로드해 바로 반영하세요</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="닫기"
            className="p-1.5 text-slate-400 hover:text-[#1E232B] rounded-xl hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab selection for screen */}
        <div className="mt-5">
          <label className="block text-xs font-bold text-[#717784] mb-2">
            교체할 화면 슬롯 선택
          </label>
          <div className="grid grid-cols-3 gap-2">
            {screenshots.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedId(s.id)}
                className={`py-2 px-2 text-xs font-bold rounded-2xl border text-center transition-all ${
                  selectedId === s.id
                    ? 'bg-[#FFF0ED] border-[#FF806B] text-[#FF806B] shadow-xs'
                    : 'bg-[#FAF7F0] border-[#E8DFC8] text-[#555E6D] hover:text-[#1E232B]'
                }`}
              >
                <div className="truncate">{s.title}</div>
                {s.customImage && (
                  <span className="inline-block mt-0.5 text-[10px] text-emerald-600 font-extrabold">● 커스텀 적용됨</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Upload methods */}
        <div className="mt-5 space-y-4">
          {/* Method 1: File Upload */}
          <div className="p-4 bg-[#FFFDF8] border border-[#FFE2D6] rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#1E232B] flex items-center gap-1.5">
                <Image className="w-4 h-4 text-[#FF806B]" /> 파일 직접 선택
              </span>
              {currentItem.customImage && (
                <button
                  type="button"
                  onClick={handleRemoveCustom}
                  className="flex items-center gap-1 text-[11px] text-rose-500 hover:text-rose-600 font-bold"
                >
                  <Trash2 className="w-3.5 h-3.5" /> 커스텀 삭제
                </button>
              )}
            </div>
            
            <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-[#FFC8BA] hover:border-[#FF806B] rounded-2xl cursor-pointer bg-white hover:bg-[#FFF9F2] transition-colors group">
              <Upload className="w-6 h-6 text-[#FF806B] mb-1.5 transition-transform group-hover:scale-110" />
              <span className="text-xs font-bold text-[#1E232B]">내 기기에서 스크린샷 이미지 선택</span>
              <span className="text-[11px] text-[#8C7D73] mt-0.5">PNG, JPG, WebP 파일 지원</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Method 2: Image URL */}
          <form onSubmit={handleUrlSubmit} className="p-4 bg-[#FFFDF8] border border-[#FFE2D6] rounded-2xl">
            <label className="block text-xs font-bold text-[#1E232B] mb-1.5">
              또는 이미지 웹 주소(URL) 입력
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                placeholder="https://... 스크린샷 이미지 주소"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                className="w-full bg-white border border-[#E8DFC8] px-3 py-2 text-xs text-[#1E232B] rounded-xl outline-none focus:border-[#FF806B]"
              />
              <button
                type="submit"
                disabled={!urlInput.trim()}
                className="px-4 py-2 bg-gradient-to-r from-[#FF806B] to-[#FF6F59] disabled:opacity-50 text-white text-xs font-extrabold rounded-xl shrink-0 shadow-xs"
              >
                적용
              </button>
            </div>
          </form>
        </div>

        {/* Footer controls */}
        <div className="mt-5 pt-4 border-t border-[#F2ECE1] flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={onResetAll}
            className="flex items-center gap-1.5 text-[#717784] hover:text-[#1E232B] font-medium"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>전체 기본 목업으로 초기화</span>
          </button>
          
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-[#1E232B] hover:bg-black text-white font-bold rounded-xl transition-colors"
          >
            완료
          </button>
        </div>
      </div>
    </div>
  );
};
