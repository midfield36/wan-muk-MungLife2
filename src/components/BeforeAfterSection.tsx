import React from 'react';
import { ArrowRight, ArrowDown, XCircle, CheckCircle2 } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const beforePoints = [
    '급할 때 근처 동물병원을 찾느라 여러 사이트를 검색한다.',
    '반려견 동반 카페와 여행지를 일일이 알아본다.',
    '예방접종이나 건강관리 일정을 놓치기 쉽다.',
  ];

  const afterPoints = [
    '주변 동물병원과 반려견 관련 장소를 편리하게 찾는다.',
    '강아지와 함께 갈 장소 정보를 쉽게 확인한다.',
    '반려견의 중요한 일정과 건강 정보를 체계적으로 관리한다.',
  ];

  return (
    <section id="before-after" className="py-14 md:py-20 bg-[#101827] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#60E6CC] tracking-wider uppercase mb-2">
            <span>BEFORE & AFTER</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            강아지와 함께하는 생활, 이제 더 편리하게
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#A8B3C7]">
            번거롭던 검색과 흩어진 메모 대신, 멍라이프 하나로 스마트하게 관리하세요.
          </p>
        </div>

        {/* Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 lg:gap-6 items-center">
          {/* Before Card */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-[#182338]/80 border border-slate-700/80 shadow-md">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/60">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-slate-400">
                  <XCircle className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 tracking-wider">BEFORE</span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-200">멍라이프를 사용하기 전</h3>
                </div>
              </div>
              <span className="text-xs text-slate-500 font-medium">기존의 불편함</span>
            </div>

            <ul className="space-y-4">
              {beforePoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-xs font-mono">
                    {idx + 1}
                  </span>
                  <span className="text-sm sm:text-base text-slate-300 leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Transition Indicator (Desktop: Right arrow, Mobile: Down arrow) */}
          <div className="lg:col-span-1 flex justify-center py-2 lg:py-0">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#182338] border border-[#60E6CC]/40 flex items-center justify-center text-[#60E6CC] shadow-lg shadow-[#60E6CC]/10">
              <ArrowRight className="hidden lg:block w-5 h-5 stroke-[2.5]" />
              <ArrowDown className="block lg:hidden w-5 h-5 stroke-[2.5]" />
            </div>
          </div>

          {/* After Card (Mint Accent) */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#122b34] to-[#182338] border-2 border-[#60E6CC]/50 shadow-xl shadow-[#60E6CC]/10 relative overflow-hidden">
            {/* Subtle glow highlight */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#60E6CC]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#60E6CC]/20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#60E6CC]/20 border border-[#60E6CC]/40 flex items-center justify-center text-[#60E6CC]">
                  <CheckCircle2 className="w-5 h-5 text-[#60E6CC]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#60E6CC] tracking-wider">AFTER</span>
                  <h3 className="text-base sm:text-lg font-bold text-white">멍라이프를 사용하면</h3>
                </div>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#60E6CC]/15 text-[#60E6CC] font-bold">
                간편한 해결
              </span>
            </div>

            <ul className="space-y-4">
              {afterPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#60E6CC]/20 text-[#60E6CC] flex items-center justify-center text-xs font-mono font-bold">
                    ✓
                  </span>
                  <span className="text-sm sm:text-base font-medium text-white leading-snug">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
