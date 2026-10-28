import React from 'react';
import { ArrowDown, ArrowRight, HelpCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const beforeCards = [
    {
      icon: '🔍',
      title: '흩어진 정보 찾기',
      desc: '필요한 반려 생활 정보를 블로그, 지도, 카페 등 여기저기 찾아야 하는 불편함',
    },
    {
      icon: '⏰',
      title: '놓치기 쉬운 일정',
      desc: '예방접종이나 심장사상충 등 강아지의 중요한 일정을 놓치거나 기억하기 어려운 상황',
    },
    {
      icon: '📁',
      title: '정리 안 되는 기록',
      desc: '병원 진료 내역과 반려견 건강 기록이 여러 메모장에 제각각 흩어져 있는 문제',
    },
  ];

  const afterCards = [
    {
      icon: '🗺️',
      title: '한눈에 바로 확인',
      desc: '내 주변 24시 동물병원과 동반 카페, 산책로까지 필요한 정보를 쉽고 편리하게 확인',
    },
    {
      icon: '📅',
      title: '체계적인 일정 케어',
      desc: '접종 주기부터 체중 변화까지 반려견의 중요한 일상과 건강을 스마트하게 관리',
    },
    {
      icon: '🐾',
      title: '행복한 여유 시간',
      desc: '번거로운 검색과 걱정 대신, 소중한 우리 아이와 함께하는 시간을 더 여유롭게 즐기기',
    },
  ];

  return (
    <div className="space-y-0">
      {/* SECTION 2: Before - 이런 불편함 있으셨나요? */}
      <section id="before" className="py-14 md:py-20 bg-[#FFF9EE] border-t border-[#F5EADB] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE5B4]/50 border border-[#FFD59E] text-xs font-bold text-[#A85800] mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#A85800]" />
              <span>BEFORE · 이런 불편함 있으셨나요?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E232B] tracking-tight">
              강아지와 함께하는 일상, 생각보다 챙길 게 많죠?
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-[#69584C] font-medium">
              우리 아이를 위해 알아보고 기억해야 할 것들이 너무 많아요.
            </p>
          </div>

          {/* 3 Problem Cards in warm cream tones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beforeCards.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-6 sm:p-7 bg-white/90 border border-[#F0E4D4] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF4C7] border border-[#FFE2B8] flex items-center justify-center text-2xl mb-4 shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-[#B08050] tracking-wider block mb-1">
                    불편함 {idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-[#1E232B] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#666E7D] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Transition indicator arrow */}
          <div className="flex justify-center pt-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#FFB8A4] text-xs font-extrabold text-[#FF806B] shadow-md shadow-[#FF806B]/10 animate-bounce">
              <span>멍라이프를 만나면 이렇게 달라져요</span>
              <ArrowDown className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: After - 멍라이프와 함께라면 */}
      <section id="after" className="py-14 md:py-20 bg-gradient-to-b from-[#EBF9F3] via-[#F0F8FF] to-[#FFFDF8] border-t border-[#BCEBD9]/60 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BCEBD9]/60 border border-[#9CE0C6] text-xs font-bold text-[#156E52] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#156E52]" />
              <span>AFTER · 멍라이프와 함께라면</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E232B] tracking-tight">
              반려 생활이 한결 쉽고 행복해져요!
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-[#46655B] font-medium">
              복잡했던 반려 생활을 더 간편하게, 소중한 순간은 더 특별하게.
            </p>
          </div>

          {/* 3 Outcome Cards in Mint & Sky Blue */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {afterCards.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-6 sm:p-7 bg-white border-2 border-[#BCEBD9] shadow-md shadow-[#BCEBD9]/30 hover:border-[#86DFC0] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D3F4E8] to-[#CDEBFF] border border-[#BCEBD9] flex items-center justify-center text-2xl mb-4 shadow-xs">
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1E7D5F]" />
                    <span className="text-[11px] font-extrabold text-[#1E7D5F] tracking-wider">
                      변화 {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1E232B] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#555E6D] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#F2ECE1] flex items-center text-xs text-[#1E7D5F] font-bold">
                  <span>✓ 멍라이프로 스마트 해결</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
