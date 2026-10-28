import React from 'react';
import { MapPin, Siren, HeartHandshake } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      num: '01',
      title: '내 주변 장소 찾기',
      subtitle: '동물병원 · 동반 카페 · 산책 공원',
      description: '동물병원, 공원, 반려견 동반 카페와 식당, 숙소까지 내 주변 정보를 손쉽게 찾아보세요.',
      icon: MapPin,
      accentColor: 'text-[#60E6CC]',
      bgAccent: 'bg-[#60E6CC]/15 border-[#60E6CC]/30',
      badge: '위치 기반',
    },
    {
      num: '02',
      title: '긴급할 때 빠르게',
      subtitle: '24시 야간 · 주말 휴일 진료',
      description: '야간·휴일 동물병원 등 갑자기 도움이 필요한 순간에 유용한 정보를 빠르게 확인하세요.',
      icon: Siren,
      accentColor: 'text-[#FF9F83]',
      bgAccent: 'bg-[#FF9F83]/15 border-[#FF9F83]/30',
      badge: '응급 케어',
    },
    {
      num: '03',
      title: '우리 강아지 관리',
      subtitle: '프로필 · 접종 기록 · 건강 관리',
      description: '반려견 프로필과 건강기록, 예방접종 등 중요한 정보를 편리하게 관리하세요.',
      icon: HeartHandshake,
      accentColor: 'text-[#60E6CC]',
      bgAccent: 'bg-[#60E6CC]/15 border-[#60E6CC]/30',
      badge: '일정 케어',
    },
  ];

  return (
    <section id="features" className="py-14 md:py-20 bg-[#0d1523] border-y border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#60E6CC] tracking-wider uppercase mb-2">
            <span>CORE FEATURES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            우리 강아지에게 필요한 기능을 한곳에
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#A8B3C7]">
            필요한 순간 망설임 없이, 반려견과의 일상을 든든하게 받쳐주는 3가지 핵심 기능입니다.
          </p>
        </div>

        {/* Feature 3-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.num}
                className="group rounded-3xl p-6 sm:p-7 bg-[#182338] border border-slate-700/80 hover:border-slate-600 transition-all duration-200 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Top line with Icon & Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${feat.bgAccent} transition-transform group-hover:scale-105`}
                    >
                      <Icon className={`w-6 h-6 ${feat.accentColor}`} />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {feat.num}
                    </span>
                  </div>

                  {/* Clean unboxed category label */}
                  <div className="text-xs text-[#A8B3C7] mb-1.5 font-medium">
                    {feat.subtitle}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {feat.title}
                  </h3>

                  {/* Description (within 2 lines) */}
                  <p className="text-sm text-[#A8B3C7] leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-slate-300">{feat.badge}</span>
                  <span className="text-[#60E6CC] font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                    자세히 보기 →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
