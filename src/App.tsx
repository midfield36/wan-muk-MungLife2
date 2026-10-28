/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { APP_CONFIG, ScreenshotData } from './config';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ScreenshotsSection } from './components/ScreenshotsSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ShareModal } from './components/ShareModal';
import { ScreenshotUploadModal } from './components/ScreenshotUploadModal';
import { LightboxModal } from './components/LightboxModal';
import { renderAppScreen } from './components/PhoneMockup';
import { Check } from 'lucide-react';

const INITIAL_SCREENSHOTS: ScreenshotData[] = [
  {
    id: 'screen-1',
    title: '화면 1: 메인 홈 화면',
    subtitle: '반려견 요약 정보와 긴급 케어 바로가기',
    tag: '홈 대시보드',
    defaultDescription: '내 반려견 프로필, 24시 병원 원터치 검색, 자주 찾는 반려 생활 메뉴',
    type: 'home',
  },
  {
    id: 'screen-2',
    title: '화면 2: 주변 장소 검색',
    subtitle: '병원 · 동반 카페 · 산책로 실시간 지도 탐색',
    tag: '장소 탐색',
    defaultDescription: '현재 내 위치 기반 주변 24시 동물병원, 동반 카페, 산책 공원 필터링',
    type: 'search',
  },
  {
    id: 'screen-3',
    title: '화면 3: 우리 강아지 관리',
    subtitle: '예방접종 일정과 맞춤 건강 기록 관리',
    tag: '건강 수첩',
    defaultDescription: '종합백신, 광견병, 심장사상충 예방 접종 캘린더와 체중 기록 그래프',
    type: 'health',
  },
];

export default function App() {
  const [screenshots, setScreenshots] = useState<ScreenshotData[]>(() => {
    try {
      const saved = localStorage.getItem('munglife_custom_screenshots');
      if (saved) {
        const parsed = JSON.parse(saved);
        return INITIAL_SCREENSHOTS.map((init) => {
          const match = parsed.find((p: ScreenshotData) => p.id === init.id);
          return match && match.customImage ? { ...init, customImage: match.customImage } : init;
        });
      }
    } catch {
      // fallback
    }
    return INITIAL_SCREENSHOTS;
  });

  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [zoomedScreenshot, setZoomedScreenshot] = useState<ScreenshotData | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3000);
  };

  const handleUpdateScreenshot = (id: string, imageUrl?: string) => {
    setScreenshots((prev) => {
      const updated = prev.map((s) => (s.id === id ? { ...s, customImage: imageUrl } : s));
      try {
        localStorage.setItem('munglife_custom_screenshots', JSON.stringify(updated));
      } catch (err) {
        console.warn('Storage quota limit reached:', err);
      }
      return updated;
    });
  };

  const handleResetAllScreenshots = () => {
    setScreenshots(INITIAL_SCREENSHOTS);
    localStorage.removeItem('munglife_custom_screenshots');
    showToast('모든 화면이 기본 목업으로 초기화되었습니다.');
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8] text-[#30343B] flex flex-col font-sans selection:bg-[#FFB8A4]/40 selection:text-[#FF806B]">
      {/* 3-Zone Navigation Bar */}
      <Navbar onOpenShare={() => setIsShareOpen(true)} />

      <main className="flex-1">
        {/* SECTION 1: Main Hero Area */}
        <HeroSection
          heroScreenshot={screenshots[0]}
          onOpenShare={() => setIsShareOpen(true)}
          onOpenZoom={() => setZoomedScreenshot(screenshots[0])}
          onOpenUpload={() => setIsUploadOpen(true)}
        />

        {/* SECTION 2 & 3: Before (불편함) & After (멍라이프와 함께라면) */}
        <BeforeAfterSection />

        {/* SECTION 4: Major Features (주요 기능 소개) */}
        <FeaturesSection />

        {/* SECTION 5: App Screenshots Preview (앱 화면 미리보기) */}
        <ScreenshotsSection
          screenshots={screenshots}
          onSelectZoom={(screen) => setZoomedScreenshot(screen)}
          onOpenUpload={() => setIsUploadOpen(true)}
        />

        {/* SECTION 6: Final CTA (최종 이용 유도) */}
        <CtaSection onOpenShare={() => setIsShareOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenShare={() => setIsShareOpen(true)} />

      {/* Share Modal (KakaoTalk, Native Share, Link Copy, QR) */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        onToast={showToast}
      />

      {/* Screenshot Upload / Replacement Modal */}
      <ScreenshotUploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        screenshots={screenshots}
        onUpdateScreenshot={handleUpdateScreenshot}
        onResetAll={handleResetAllScreenshots}
        onToast={showToast}
      />

      {/* Lightbox Zoom Modal */}
      <LightboxModal
        screenshot={zoomedScreenshot}
        onClose={() => setZoomedScreenshot(null)}
        renderScreenContent={renderAppScreen}
      />

      {/* Global Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-3 bg-white border-2 border-[#FF806B] rounded-full shadow-2xl text-xs sm:text-sm text-[#1E232B] font-extrabold animate-bounce">
          <div className="w-5 h-5 rounded-full bg-[#FF806B] text-white flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
