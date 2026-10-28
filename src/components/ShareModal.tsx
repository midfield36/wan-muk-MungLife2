import React, { useState } from 'react';
import { X, Copy, Check, Share2, MessageCircle, QrCode } from 'lucide-react';
import { APP_CONFIG } from '../config';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onToast: (msg: string) => void;
}

declare global {
  interface Window {
    Kakao?: {
      isInitialized: () => boolean;
      init: (key: string) => void;
      Share?: {
        sendDefault: (options: Record<string, unknown>) => void;
      };
    };
  }
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, onToast }) => {
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const [kakaoKeyInput, setKakaoKeyInput] = useState(() => localStorage.getItem('munglife_kakao_key') || '');
  const [isConfiguringKakao, setIsConfiguringKakao] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : APP_CONFIG.appUrl;

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(currentUrl);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = currentUrl;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      onToast('링크가 클립보드에 복사되었습니다!');
      setTimeout(() => setCopied(false), 2500);
    } catch {
      onToast('주소 복사에 실패했습니다. 브라우저 주소창을 이용해 주세요.');
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: APP_CONFIG.shareTitle,
          text: APP_CONFIG.shareDescription,
          url: currentUrl,
        });
        onToast('공유 창을 열었습니다.');
        onClose();
      } catch (err: unknown) {
        if ((err as Error)?.name !== 'AbortError') {
          handleCopy();
        }
      }
    } else {
      handleCopy();
    }
  };

  const handleKakaoShare = () => {
    const storedKey = localStorage.getItem('munglife_kakao_key') || kakaoKeyInput.trim();

    if (window.Kakao && storedKey) {
      try {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(storedKey);
        }
        if (window.Kakao.Share) {
          window.Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
              title: APP_CONFIG.shareTitle,
              description: APP_CONFIG.shareDescription,
              imageUrl: window.location.origin + '/og-image.svg',
              link: {
                mobileWebUrl: currentUrl,
                webUrl: currentUrl,
              },
            },
            buttons: [
              {
                title: '멍라이프 소개 보기',
                link: {
                  mobileWebUrl: currentUrl,
                  webUrl: currentUrl,
                },
              },
              {
                title: '앱 바로가기',
                link: {
                  mobileWebUrl: APP_CONFIG.appUrl,
                  webUrl: APP_CONFIG.appUrl,
                },
              },
            ],
          });
          onToast('카카오톡 공유창이 열렸습니다.');
          onClose();
          return;
        }
      } catch (e) {
        console.warn('Kakao SDK error:', e);
      }
    }

    // Fallback: If Kakao SDK key isn't provided yet or native share is preferred
    if (navigator.share) {
      navigator.share({
        title: APP_CONFIG.shareTitle,
        text: `${APP_CONFIG.shareTitle}\n${APP_CONFIG.shareDescription}`,
        url: currentUrl,
      }).catch(() => {
        handleCopy();
      });
    } else {
      handleCopy();
      onToast('카카오톡에 바로 붙여넣을 수 있도록 링크가 복사되었습니다!');
    }
  };

  const saveKakaoKey = () => {
    if (kakaoKeyInput.trim()) {
      localStorage.setItem('munglife_kakao_key', kakaoKeyInput.trim());
      onToast('카카오 JavaScript 키가 저장되었습니다.');
      setIsConfiguringKakao(false);
    } else {
      localStorage.removeItem('munglife_kakao_key');
      onToast('키가 초기화되었습니다.');
      setIsConfiguringKakao(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-[#182338] border border-slate-700/80 rounded-2xl p-6 shadow-2xl text-[#F8FAFC]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#60E6CC]/15 border border-[#60E6CC]/30 flex items-center justify-center text-[#60E6CC]">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">친구 및 동료에게 공유하기</h3>
              <p className="text-xs text-[#A8B3C7]">멍라이프 소개 페이지를 간편하게 전송하세요</p>
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

        {/* Share buttons */}
        <div className="mt-5 space-y-3">
          {/* Kakao button */}
          <button
            type="button"
            onClick={handleKakaoShare}
            className="w-full flex items-center justify-between px-4 py-3.5 bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-semibold rounded-xl transition-transform active:scale-[0.98] shadow-sm"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 fill-[#191919]" />
              <span className="text-sm">카카오톡으로 공유하기</span>
            </div>
            <span className="text-xs font-normal opacity-80">채팅방 전송</span>
          </button>

          {/* Native Smartphone Share */}
          <button
            type="button"
            onClick={handleNativeShare}
            className="w-full flex items-center justify-between px-4 py-3.5 bg-slate-800 hover:bg-slate-750 border border-slate-700 text-white font-medium rounded-xl transition-transform active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <Share2 className="w-5 h-5 text-[#60E6CC]" />
              <span className="text-sm">스마트폰 기본 공유</span>
            </div>
            <span className="text-xs text-[#A8B3C7]">메시지 · SNS</span>
          </button>

          {/* Link Copy Bar */}
          <div className="pt-2">
            <label className="block text-xs font-medium text-[#A8B3C7] mb-1.5">
              랜딩페이지 주소 복사
            </label>
            <div className="flex items-center gap-2 bg-[#101827] border border-slate-700/80 rounded-xl p-1.5">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="w-full bg-transparent px-3 py-1.5 text-xs text-slate-300 font-mono outline-none truncate"
              />
              <button
                type="button"
                onClick={handleCopy}
                className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-[#60E6CC] to-[#34D399] text-[#101827] text-xs font-bold rounded-lg hover:opacity-95 transition-opacity active:scale-95"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? '복사됨' : '복사'}</span>
              </button>
            </div>
          </div>

          {/* QR code view toggle */}
          <div className="pt-2 flex items-center justify-between text-xs text-[#A8B3C7]">
            <button
              type="button"
              onClick={() => setShowQr(!showQr)}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <QrCode className="w-4 h-4 text-[#60E6CC]" />
              <span>{showQr ? 'QR코드 접기' : '모바일용 QR코드 보기'}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsConfiguringKakao(!isConfiguringKakao)}
              className="text-[11px] underline text-slate-400 hover:text-slate-200"
            >
              {isConfiguringKakao ? '카카오 설정 닫기' : '카카오 API키 설정'}
            </button>
          </div>

          {/* QR Section */}
          {showQr && (
            <div className="p-4 bg-[#101827] border border-slate-700/70 rounded-xl text-center">
              <p className="text-xs text-slate-300 mb-2 font-medium">스마트폰 카메라로 스캔하여 열기</p>
              <div className="inline-block p-2 bg-white rounded-lg">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(currentUrl)}`}
                  alt="QR Code"
                  className="w-32 h-32"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          )}

          {/* Kakao Key Config Option */}
          {isConfiguringKakao && (
            <div className="p-3.5 bg-[#101827] border border-slate-700 rounded-xl space-y-2 text-xs">
              <p className="text-slate-300">
                카카오 개발자 콘솔의 <strong>JavaScript 키</strong>를 입력하면 맞춤 카카오 메시지 카드가 전송됩니다. 미입력 시에도 기본 공유 및 링크 복사가 완벽하게 작동합니다.
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="카카오 JavaScript 키 붙여넣기"
                  value={kakaoKeyInput}
                  onChange={(e) => setKakaoKeyInput(e.target.value)}
                  className="w-full bg-[#182338] border border-slate-700 px-2.5 py-1.5 rounded-lg text-white font-mono text-xs outline-none focus:border-[#60E6CC]"
                />
                <button
                  type="button"
                  onClick={saveKakaoKey}
                  className="px-3 py-1.5 bg-[#60E6CC] text-slate-900 font-bold rounded-lg shrink-0"
                >
                  저장
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
