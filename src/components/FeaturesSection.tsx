import React from 'react';
import { MapPin, Siren, HeartHandshake, CheckCircle2, ChevronRight } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      num: '01',
      title: '내 주변 장소 찾기',
      subtitle: '동물병원 · 동반 카페 · 산책 공원',
      description: '동물병원부터 공원, 반려견 동반 카페와 식당까지 내 주변 정보를 손쉽게 찾아보세요.',
      advantage: '외출 전 일일이 전화할 필요 없이 동반 가능 여부와 위치를 즉시 확인',
      icon: MapPin,
      bgColor: 'bg-[#FFF8E6]',
      borderColor: 'border-[#FFEAA7]',
      iconBg: 'bg-[#FFF0B3] text-[#996515] border-[#FFDF80]',
      badgeColor: 'text-[#875800] bg-[#FFF0B3]',
      tag: '위치 기반 탐색',
    },
    {
      num: '02',
      title: '긴급할 때 빠르게',
      subtitle: '24시 야간 · 주말 휴일 응급 케어',
      description: '야간·휴일 동물병원 등 갑자기 도움이 필요한 순간에 유용한 정보를 빠르게 확인하세요.',
      advantage: '골든타임을 놓치지 않도록 현재 진료 중인 병원 전화 연결 및 길안내',
      icon: Siren,
      bgColor: 'bg-[#EDFAF4]',
      borderColor: 'border-[#BCEBD9]',
      iconBg: 'bg-[#D3F4E8] text-[#1E7D5F] border-[#A8E6CE]',
      badgeColor: 'text-[#176E50] bg-[#D3F4E8]',
      tag: '24시 응급 케어',
    },
    {
      num: '03',
      title: '우리 강아지 관리',
      subtitle: '프로필 · 접종 기록 · 건강 관리',
      description: '반려견 프로필과 건강기록, 예방접종 등 중요한 정보를 편리하게 관리하세요.',
      advantage: '종합백신부터 심장사상충 복용일과 체중 변화를 한곳에서 깔끔하게 정리',
      icon: HeartHandshake,
      bgColor: 'bg-[#F6F2FF]',
      borderColor: 'border-[#E5D9FF]',
      iconBg: 'bg-[#EBDDFF] text-[#6A47A8] border-[#D9C4FF]',
      badgeColor: 'text-[#5F4299] bg-[#EBDDFF]',
      tag: '스마트 건강 수첩',
    },
  ];

  return (
    <section id="features" className="py-14 md:py-20 bg-[#FFFDF8] border-t border-[#F2ECE1] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4C7] border border-[#FFE2B8] text-xs font-bold text-[#A85800] mb-3">
            <span>CORE FEATURES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E232B] tracking-tight">
            멍라이프 하나로 더 편리해지는 반려 생활
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#666E7D] font-medium">
            초보 보호자부터 베테랑 반려인까지, 꼭 필요한 3가지 핵심 기능만을 담았습니다.
          </p>
        </div>

        {/* Feature 3-Grid: Cream, Mint, Lavender */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.num}
                className={`rounded-3xl p-6 sm:p-7 ${feat.bgColor} border-2 ${feat.borderColor} shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div>
                  {/* Top line with Icon & Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${feat.iconBg} shadow-xs`}
                    >
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {feat.num}
                    </span>
                  </div>

                  {/* Clean unboxed category label */}
                  <div className="text-xs font-bold text-[#717784] mb-1.5">
                    {feat.subtitle}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#1E232B] mb-2.5">
                    {feat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#555E6D] leading-relaxed mb-4">
                    {feat.description}
                  </p>

                  {/* Benefit Card */}
                  <div className="p-3 rounded-2xl bg-white/90 border border-black/5 shadow-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-xs shrink-0 mt-0.5">💡</span>
                      <p className="text-xs text-[#555E6D] font-medium leading-snug">
                        <strong className="text-[#1E232B]">장점:</strong> {feat.advantage}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-black/5 flex items-center justify-between text-xs">
                  <span className={`px-2 py-0.5 rounded-full font-bold text-[11px] ${feat.badgeColor}`}>
                    {feat.tag}
                  </span>
                  <a
                    href="#screenshots"
                    className="font-bold text-[#FF806B] hover:text-[#FF6F59] inline-flex items-center gap-0.5 group"
                  >
                    <span>화면 보기</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
