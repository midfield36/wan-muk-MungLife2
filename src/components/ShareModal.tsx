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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-white border border-[#F2ECE1] rounded-3xl p-6 shadow-2xl text-[#30343B]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#F2ECE1]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FFF4C7] border border-[#FFE2B8] flex items-center justify-center text-[#FF806B]">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-[#1E232B]">친구 및 동료에게 공유하기</h3>
              <p className="text-xs text-[#717784]">멍라이프 소개 페이지를 간편하게 전송하세요</p>
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

        {/* Share buttons */}
        <div className="mt-5 space-y-3">
          {/* Kakao button */}
          <button
            type="button"
            onClick={handleKakaoShare}
            className="w-full flex items-center justify-between px-4 py-3.5 bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold rounded-2xl transition-transform active:scale-[0.98] shadow-sm"
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
            className="w-full flex items-center justify-between px-4 py-3.5 bg-[#FFF9F2] hover:bg-[#FFF2E5] border border-[#FFE2D6] text-[#1E232B] font-bold rounded-2xl transition-transform active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <Share2 className="w-5 h-5 text-[#FF806B]" />
              <span className="text-sm">스마트폰 기본 공유</span>
            </div>
            <span className="text-xs text-[#8C7D73]">메시지 · SNS</span>
          </button>

          {/* Link Copy Bar */}
          <div className="pt-2">
            <label className="block text-xs font-bold text-[#717784] mb-1.5">
              랜딩페이지 주소 복사
            </label>
            <div className="flex items-center gap-2 bg-[#FAF7F0] border border-[#E8DFC8] rounded-2xl p-1.5">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="w-full bg-transparent px-3 py-1.5 text-xs text-[#30343B] font-mono outline-none truncate"
              />
              <button
                type="button"
                onClick={handleCopy}
                className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-[#FF806B] to-[#FF6F59] text-white text-xs font-extrabold rounded-xl hover:opacity-95 transition-opacity active:scale-95 shadow-xs"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? '복사됨' : '복사'}</span>
              </button>
            </div>
          </div>

          {/* QR code view toggle */}
          <div className="pt-2 flex items-center justify-between text-xs text-[#717784]">
            <button
              type="button"
              onClick={() => setShowQr(!showQr)}
              className="flex items-center gap-1.5 hover:text-[#FF806B] font-medium transition-colors"
            >
              <QrCode className="w-4 h-4 text-[#FF806B]" />
              <span>{showQr ? 'QR코드 접기' : '모바일용 QR코드 보기'}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsConfiguringKakao(!isConfiguringKakao)}
              className="text-[11px] underline text-slate-500 hover:text-slate-700"
            >
              {isConfiguringKakao ? '카카오 설정 닫기' : '카카오 API키 설정'}
            </button>
          </div>

          {/* QR Section */}
          {showQr && (
            <div className="p-4 bg-[#FFFDF8] border border-[#FFE2D6] rounded-2xl text-center shadow-xs">
              <p className="text-xs text-[#555E6D] mb-2 font-semibold">스마트폰 카메라로 스캔하여 열기</p>
              <div className="inline-block p-2 bg-white rounded-xl border border-[#F2ECE1] shadow-xs">
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
            <div className="p-3.5 bg-[#FFF9F2] border border-[#FFE2D6] rounded-2xl space-y-2 text-xs">
              <p className="text-[#555E6D] leading-relaxed">
                카카오 개발자 콘솔의 <strong>JavaScript 키</strong>를 입력하면 맞춤 카카오 메시지 카드가 전송됩니다. 미입력 시에도 기본 공유 및 링크 복사가 완벽하게 작동합니다.
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="카카오 JavaScript 키 붙여넣기"
                  value={kakaoKeyInput}
                  onChange={(e) => setKakaoKeyInput(e.target.value)}
                  className="w-full bg-white border border-[#E8DFC8] px-2.5 py-1.5 rounded-xl text-[#1E232B] font-mono text-xs outline-none focus:border-[#FF806B]"
                />
                <button
                  type="button"
                  onClick={saveKakaoKey}
                  className="px-3.5 py-1.5 bg-[#FF806B] text-white font-bold rounded-xl shrink-0 hover:bg-[#FF6F59]"
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
