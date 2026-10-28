import React from 'react';
import {
  MapPin,
  Heart,
  AlertCircle,
  Phone,
  Search,
  Calendar,
  ShieldCheck,
  Coffee,
  Navigation,
  Compass,
  Upload,
  ZoomIn,
} from 'lucide-react';
import { ScreenshotData } from '../config';

interface PhoneMockupProps {
  data: ScreenshotData;
  onOpenZoom?: () => void;
  onOpenUpload?: () => void;
  showUploadTrigger?: boolean;
}

export const renderAppScreen = (data: ScreenshotData) => {
  if (data.customImage) {
    return (
      <img
        src={data.customImage}
        alt={data.title}
        className="w-full h-full object-cover object-top"
        referrerPolicy="no-referrer"
      />
    );
  }

  if (data.type === 'home') {
    return (
      <div className="p-3.5 space-y-3 text-left font-sans text-white select-none">
        {/* App Topbar */}
        <div className="flex items-center justify-between pb-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#60E6CC]" />
            <span className="text-xs font-black tracking-tight text-white">멍라이프</span>
          </div>
          <span className="text-[10px] text-slate-400 font-medium">서울 마포구 연남동</span>
        </div>

        {/* Dog Profile Card */}
        <div className="p-3 rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#141E30] border border-slate-750 shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-full bg-[#101827] border border-[#60E6CC]/40 flex items-center justify-center text-xl shrink-0">
              🐶
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-white truncate">초코</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#60E6CC]/20 text-[#60E6CC] font-semibold">
                  골든리트리버 · 2살
                </span>
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5">다음 광견병 접종까지 D-14</p>
            </div>
          </div>
        </div>

        {/* Emergency Quick Action */}
        <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400">
              <AlertCircle className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-rose-300">야간·응급 동물병원</div>
              <div className="text-[9px] text-slate-400">현재 영업 중인 응급 병원 3곳</div>
            </div>
          </div>
          <span className="text-[10px] text-rose-400 font-bold bg-rose-500/20 px-2 py-0.5 rounded-full">
            긴급찾기
          </span>
        </div>

        {/* Quick Menu 4-Grid */}
        <div>
          <div className="text-[10px] font-semibold text-slate-400 mb-1.5">자주 찾는 서비스</div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#60E6CC]/15 flex items-center justify-center text-[#60E6CC]">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-200">주변 장소</div>
                <div className="text-[8px] text-slate-400">카페·식당·공원</div>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-400/15 flex items-center justify-center text-amber-300">
                <Coffee className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-200">동반 맛집</div>
                <div className="text-[8px] text-slate-400">실시간 인기</div>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-400/15 flex items-center justify-center text-blue-300">
                <Heart className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-200">건강 수첩</div>
                <div className="text-[8px] text-slate-400">예방접종 기록</div>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-400/15 flex items-center justify-center text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-200">초보 가이드</div>
                <div className="text-[8px] text-slate-400">응급처치 상식</div>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Spotlight */}
        <div className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-semibold text-slate-300">추천 산책로</span>
            <span className="text-[9px] text-[#60E6CC]">500m 근처</span>
          </div>
          <div className="text-[10px] text-slate-400">연트럴파크 반려견 산책 코스 (배변봉투 수거함 완비)</div>
        </div>
      </div>
    );
  }

  if (data.type === 'search') {
    return (
      <div className="p-3.5 space-y-2.5 text-left font-sans text-white select-none">
        {/* Search header */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
          <input
            type="text"
            readOnly
            value="연남동 24시 동물병원"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-8 pr-3 py-1.5 text-[10px] text-slate-200 outline-none"
          />
        </div>

        {/* Filter categories */}
        <div className="flex gap-1 overflow-x-auto pb-1 text-[9px] text-slate-300">
          <span className="px-2 py-0.5 rounded-full bg-[#60E6CC] text-slate-900 font-bold shrink-0">
            전체
          </span>
          <span className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 shrink-0">
            🏥 동물병원
          </span>
          <span className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 shrink-0">
            ☕ 동반카페
          </span>
          <span className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 shrink-0">
            🌳 산책공원
          </span>
        </div>

        {/* Mini Map Canvas Simulation */}
        <div className="relative h-28 rounded-xl bg-[#0d1626] border border-slate-700 overflow-hidden">
          {/* Stylized road grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full border-t border-b border-slate-600/50 my-6 rotate-6 scale-125" />
            <div className="w-full h-full border-l border-r border-slate-600/50 mx-10 -rotate-12 scale-125" />
          </div>

          {/* Map Pins */}
          <div className="absolute top-4 left-6 flex items-center gap-1 bg-[#182338]/90 border border-rose-500/70 px-1.5 py-0.5 rounded-md shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-[8px] font-bold text-rose-300">24시 해든동물의료원</span>
          </div>

          <div className="absolute top-14 right-5 flex items-center gap-1 bg-[#182338]/90 border border-[#60E6CC]/70 px-1.5 py-0.5 rounded-md shadow-md">
            <MapPin className="w-2.5 h-2.5 text-[#60E6CC]" />
            <span className="text-[8px] font-bold text-[#60E6CC]">포포 펫카페 (320m)</span>
          </div>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#101827]/90 px-2 py-0.5 rounded-full border border-slate-700 text-[8px] text-slate-400 flex items-center gap-1">
            <Navigation className="w-2.5 h-2.5 text-blue-400" />
            내 위치에서 검색 중
          </div>
        </div>

        {/* List of places */}
        <div className="space-y-1.5">
          <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-white">마포 24시 동물의료센터</span>
                <span className="text-[8px] px-1 py-0.2 bg-rose-500/20 text-rose-400 rounded font-semibold">
                  야간진료중
                </span>
              </div>
              <div className="text-[8px] text-slate-400 mt-0.5">거리 420m · 주차 가능 · 외과 전문</div>
            </div>
            <div className="w-6 h-6 rounded-lg bg-[#60E6CC]/20 flex items-center justify-center text-[#60E6CC]">
              <Phone className="w-3 h-3" />
            </div>
          </div>

          <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-white">어반독스 루프탑 카페</span>
                <span className="text-[8px] px-1 py-0.2 bg-[#60E6CC]/20 text-[#60E6CC] rounded font-semibold">
                  대형견 가능
                </span>
              </div>
              <div className="text-[8px] text-slate-400 mt-0.5">거리 780m · 천연잔디 운동장 완비</div>
            </div>
            <span className="text-[9px] text-amber-400 font-bold">★ 4.9</span>
          </div>
        </div>
      </div>
    );
  }

  // type === 'health'
  return (
    <div className="p-3.5 space-y-3 text-left font-sans text-white select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-1">
        <span className="text-xs font-bold text-white">반려견 건강 & 수첩</span>
        <span className="text-[9px] text-[#60E6CC] font-semibold">체계적 일정 관리</span>
      </div>

      {/* Routine Tracker */}
      <div className="p-2.5 rounded-xl bg-[#1E293B] border border-slate-700">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold text-slate-200">예방접종 현황</span>
          <span className="text-[9px] text-slate-400">초코 (24개월)</span>
        </div>
        <div className="space-y-1.5 text-[9px]">
          <div className="flex items-center justify-between p-1.5 rounded-lg bg-[#101827] border border-slate-800">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              종합백신 (DHPPL 5차)
            </span>
            <span className="text-emerald-400 font-semibold">접종완료</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded-lg bg-[#101827] border border-slate-800">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              광견병 예방접종
            </span>
            <span className="text-amber-400 font-semibold">11월 12일 예정</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded-lg bg-[#101827] border border-slate-800">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60E6CC]" />
              심장사상충 예방약
            </span>
            <span className="text-[#60E6CC] font-semibold">매월 15일 복용</span>
          </div>
        </div>
      </div>

      {/* Weight Log */}
      <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-bold text-slate-200">체중 관리 그래프</span>
          <span className="text-[9px] text-[#60E6CC] font-mono font-bold">28.4 kg (정상)</span>
        </div>
        <div className="h-10 flex items-end gap-1.5 px-2 pt-2 bg-[#101827] rounded-lg">
          <div className="flex-1 bg-slate-700 h-[60%] rounded-t-sm" />
          <div className="flex-1 bg-slate-700 h-[70%] rounded-t-sm" />
          <div className="flex-1 bg-slate-700 h-[65%] rounded-t-sm" />
          <div className="flex-1 bg-slate-700 h-[80%] rounded-t-sm" />
          <div className="flex-1 bg-[#60E6CC] h-[75%] rounded-t-sm" />
        </div>
      </div>

      {/* Emergency contact quick tag */}
      <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-[9px] text-slate-400">
        <span>담당 주치의: 미래동물메디컬센터</span>
        <span className="text-[#60E6CC] font-bold">02-332-XXXX</span>
      </div>
    </div>
  );
};

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  data,
  onOpenZoom,
  onOpenUpload,
  showUploadTrigger = true,
}) => {
  return (
    <div className="relative group w-full max-w-[280px] mx-auto">
      {/* Outer Phone Hardware */}
      <div className="relative rounded-[2.5rem] p-2 bg-[#182338] border-2 border-slate-700 shadow-2xl transition-all duration-300 group-hover:border-[#60E6CC]/60 group-hover:shadow-[0_12px_40px_rgba(96,230,204,0.12)]">
        {/* Phone screen bezel */}
        <div className="relative rounded-[2.2rem] bg-[#101827] overflow-hidden aspect-[9/18.5] flex flex-col">
          {/* Top Speaker / Dynamic Island */}
          <div className="w-full pt-2 pb-1 flex justify-center items-center z-20">
            <div className="w-20 h-4 bg-[#0B111E] rounded-full flex items-center justify-between px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
              <span className="w-2 h-2 rounded-full bg-slate-900 border border-slate-800" />
            </div>
          </div>

          {/* Screen Content */}
          <div className="flex-1 overflow-y-auto no-scrollbar">
            {renderAppScreen(data)}
          </div>

          {/* Home indicator bar */}
          <div className="w-full py-1.5 flex justify-center items-center bg-[#101827]">
            <div className="w-24 h-1 rounded-full bg-slate-700" />
          </div>

          {/* Hover Overlay with Action Buttons */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 z-30 backdrop-blur-[2px]">
            {onOpenZoom && (
              <button
                type="button"
                onClick={onOpenZoom}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-white text-slate-900 text-xs font-bold rounded-xl shadow hover:bg-slate-100 transition-transform active:scale-95"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>화면 크게 보기</span>
              </button>
            )}

            {showUploadTrigger && onOpenUpload && (
              <button
                type="button"
                onClick={onOpenUpload}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-[#182338] border border-[#60E6CC] text-[#60E6CC] text-xs font-bold rounded-xl shadow hover:bg-[#101827] transition-transform active:scale-95"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>실제 스크린샷 교체</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Screen Slot Subtitle / Label */}
      <div className="mt-3 text-center">
        <div className="flex items-center justify-center gap-1.5">
          <span className="text-xs font-bold text-white">{data.title}</span>
          {data.customImage && (
            <span className="text-[10px] text-emerald-400 font-semibold">(커스텀 이미지)</span>
          )}
        </div>
        <p className="text-[11px] text-[#A8B3C7] mt-0.5">{data.subtitle}</p>
      </div>
    </div>
  );
};
