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
      <div className="p-3.5 space-y-3 text-left font-sans text-[#30343B] bg-[#FFFDF8] min-h-full select-none">
        {/* App Topbar */}
        <div className="flex items-center justify-between pb-1 border-b border-[#F5EFE6]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF806B]" />
            <span className="text-xs font-black tracking-tight text-[#1E232B]">멍라이프</span>
          </div>
          <span className="text-[10px] text-[#717784] font-medium flex items-center gap-0.5">
            <MapPin className="w-2.5 h-2.5 text-[#FF806B]" /> 서울 마포구 연남동
          </span>
        </div>

        {/* Dog Profile Card: Cream Yellow & Peach */}
        <div className="p-3 rounded-2xl bg-gradient-to-br from-[#FFF4C7] to-[#FFEFE0] border border-[#FFE2B8] shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-full bg-white border border-[#FFB8A4] flex items-center justify-center text-xl shrink-0 shadow-xs">
              🐶
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-extrabold text-[#1E232B] truncate">초코</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#FF806B] text-white font-bold">
                  골든리트리버 · 2살
                </span>
              </div>
              <p className="text-[10px] text-[#69584C] mt-0.5 font-medium">다음 광견병 예방접종 D-14</p>
            </div>
          </div>
        </div>

        {/* Emergency Quick Action: Soft Peach Coral */}
        <div className="p-2.5 rounded-xl bg-[#FFF0ED] border border-[#FFB8A4] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#FF806B] flex items-center justify-center text-white shadow-xs">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-black text-[#A83724]">24시 야간·응급 동물병원</div>
              <div className="text-[9px] text-[#8C5247]">현재 영업 중인 응급 병원 3곳</div>
            </div>
          </div>
          <span className="text-[10px] text-[#FF806B] font-extrabold bg-white px-2 py-0.5 rounded-full shadow-xs border border-[#FFC8BA]">
            긴급찾기
          </span>
        </div>

        {/* Quick Menu 4-Grid: Pastel colors */}
        <div>
          <div className="text-[10px] font-bold text-[#8C7D73] mb-1.5">자주 찾는 서비스</div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="p-2 rounded-xl bg-[#EBF9F3] border border-[#BCEBD9] flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-[#1E7D5F] shadow-xs">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-[#1E232B]">주변 장소</div>
                <div className="text-[8px] text-[#4F7366]">카페·식당·공원</div>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-[#FFF6E5] border border-[#FFE5B4] flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-[#996515] shadow-xs">
                <Coffee className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-[#1E232B]">동반 카페</div>
                <div className="text-[8px] text-[#7A6038]">실시간 인기</div>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-[#F3EEFF] border border-[#E5D9FF] flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-[#6A47A8] shadow-xs">
                <Heart className="w-3.5 h-3.5 fill-[#6A47A8]" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-[#1E232B]">건강 수첩</div>
                <div className="text-[8px] text-[#69558C]">예방접종 기록</div>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-[#F0F7FF] border border-[#CDEBFF] flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-[#2A659E] shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-[#1E232B]">초보 가이드</div>
                <div className="text-[8px] text-[#4C6F91]">응급처치 상식</div>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Spotlight */}
        <div className="p-2.5 rounded-xl bg-white border border-[#F2ECE1] shadow-xs">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-[#1E232B]">추천 산책 코스</span>
            <span className="text-[9px] text-[#FF806B] font-semibold">500m 근처</span>
          </div>
          <div className="text-[10px] text-[#717784]">연트럴파크 반려견 산책길 (배변봉투 수거함 완비)</div>
        </div>
      </div>
    );
  }

  if (data.type === 'search') {
    return (
      <div className="p-3.5 space-y-2.5 text-left font-sans text-[#30343B] bg-[#FFFDF8] min-h-full select-none">
        {/* Search header */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-[#9E9084] absolute left-2.5 top-2.5" />
          <input
            type="text"
            readOnly
            value="연남동 24시 동물병원"
            className="w-full bg-white border border-[#E8DFC8] rounded-xl pl-8 pr-3 py-1.5 text-[10px] text-[#1E232B] font-medium outline-none shadow-xs"
          />
        </div>

        {/* Filter categories */}
        <div className="flex gap-1 overflow-x-auto pb-1 text-[9px]">
          <span className="px-2 py-0.5 rounded-full bg-[#FF806B] text-white font-bold shrink-0 shadow-xs">
            전체
          </span>
          <span className="px-2 py-0.5 rounded-full bg-[#FFF0ED] text-[#A83724] border border-[#FFC8BA] font-semibold shrink-0">
            🏥 동물병원
          </span>
          <span className="px-2 py-0.5 rounded-full bg-[#FFF6E5] text-[#875800] border border-[#FFE5B4] font-semibold shrink-0">
            ☕ 동반카페
          </span>
          <span className="px-2 py-0.5 rounded-full bg-[#EBF9F3] text-[#1E7D5F] border border-[#BCEBD9] font-semibold shrink-0">
            🌳 산책공원
          </span>
        </div>

        {/* Mini Map Canvas Simulation with Pastel roads */}
        <div className="relative h-28 rounded-xl bg-[#EDF6F3] border border-[#BCEBD9] overflow-hidden">
          {/* Stylized road lines */}
          <div className="absolute inset-0 opacity-40">
            <div className="w-full h-full border-t-2 border-b-2 border-white my-6 rotate-6 scale-125" />
            <div className="w-full h-full border-l-2 border-r-2 border-white mx-10 -rotate-12 scale-125" />
          </div>

          {/* Map Pins */}
          <div className="absolute top-3 left-4 flex items-center gap-1 bg-white border border-[#FF806B] px-1.5 py-0.5 rounded-md shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF806B] animate-pulse" />
            <span className="text-[8px] font-extrabold text-[#A83724]">24시 해든동물의료센터</span>
          </div>

          <div className="absolute top-14 right-4 flex items-center gap-1 bg-white border border-[#1E7D5F] px-1.5 py-0.5 rounded-md shadow-xs">
            <MapPin className="w-2.5 h-2.5 text-[#1E7D5F]" />
            <span className="text-[8px] font-bold text-[#1E7D5F]">포포 펫카페 (320m)</span>
          </div>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/95 px-2 py-0.5 rounded-full border border-[#D1E7DF] text-[8px] text-[#4A7265] flex items-center gap-1 shadow-xs">
            <Navigation className="w-2.5 h-2.5 text-[#FF806B]" />
            내 위치에서 검색 중
          </div>
        </div>

        {/* List of places */}
        <div className="space-y-1.5">
          <div className="p-2 rounded-xl bg-white border border-[#E8DFC8] flex items-center justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-[#1E232B]">마포 24시 동물의료원</span>
                <span className="text-[8px] px-1 py-0.2 bg-[#FFF0ED] text-[#A83724] border border-[#FFC8BA] rounded font-semibold">
                  야간진료
                </span>
              </div>
              <div className="text-[8px] text-[#717784] mt-0.5">거리 420m · 주차 가능 · 외과 전문</div>
            </div>
            <div className="w-6 h-6 rounded-lg bg-[#FFF0ED] border border-[#FFC8BA] flex items-center justify-center text-[#FF806B]">
              <Phone className="w-3 h-3" />
            </div>
          </div>

          <div className="p-2 rounded-xl bg-white border border-[#E8DFC8] flex items-center justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-[#1E232B]">어반독스 루프탑 카페</span>
                <span className="text-[8px] px-1 py-0.2 bg-[#EBF9F3] text-[#1E7D5F] border border-[#BCEBD9] rounded font-semibold">
                  대형견 가능
                </span>
              </div>
              <div className="text-[8px] text-[#717784] mt-0.5">거리 780m · 천연잔디 운동장 완비</div>
            </div>
            <span className="text-[9px] text-amber-500 font-bold">★ 4.9</span>
          </div>
        </div>
      </div>
    );
  }

  // type === 'health'
  return (
    <div className="p-3.5 space-y-3 text-left font-sans text-[#30343B] bg-[#FFFDF8] min-h-full select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-1 border-b border-[#F5EFE6]">
        <span className="text-xs font-black text-[#1E232B]">반려견 건강 & 수첩</span>
        <span className="text-[9px] text-[#FF806B] font-bold">스마트 케어</span>
      </div>

      {/* Routine Tracker */}
      <div className="p-2.5 rounded-xl bg-white border border-[#E8DFC8] shadow-xs">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold text-[#1E232B]">예방접종 현황</span>
          <span className="text-[9px] text-[#8C7D73]">초코 (24개월)</span>
        </div>
        <div className="space-y-1.5 text-[9px]">
          <div className="flex items-center justify-between p-1.5 rounded-lg bg-[#EBF9F3] border border-[#BCEBD9]">
            <span className="flex items-center gap-1.5 text-[#1E7D5F] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E7D5F]" />
              종합백신 (DHPPL 5차)
            </span>
            <span className="text-[#1E7D5F] font-extrabold">접종완료</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded-lg bg-[#FFF6E5] border border-[#FFE5B4]">
            <span className="flex items-center gap-1.5 text-[#875800] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#875800]" />
              광견병 예방접종
            </span>
            <span className="text-[#875800] font-extrabold">11월 12일 예정</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded-lg bg-[#FFF0ED] border border-[#FFC8BA]">
            <span className="flex items-center gap-1.5 text-[#A83724] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF806B]" />
              심장사상충 예방약
            </span>
            <span className="text-[#A83724] font-extrabold">매월 15일 복용</span>
          </div>
        </div>
      </div>

      {/* Weight Log */}
      <div className="p-2.5 rounded-xl bg-white border border-[#E8DFC8] shadow-xs">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-bold text-[#1E232B]">체중 관리 기록</span>
          <span className="text-[9px] text-[#FF806B] font-mono font-bold">28.4 kg (정상)</span>
        </div>
        <div className="h-10 flex items-end gap-1.5 px-2 pt-2 bg-[#FFFDF8] rounded-lg border border-[#F2ECE1]">
          <div className="flex-1 bg-[#D8D2C4] h-[60%] rounded-t-sm" />
          <div className="flex-1 bg-[#D8D2C4] h-[70%] rounded-t-sm" />
          <div className="flex-1 bg-[#D8D2C4] h-[65%] rounded-t-sm" />
          <div className="flex-1 bg-[#D8D2C4] h-[80%] rounded-t-sm" />
          <div className="flex-1 bg-[#FF806B] h-[75%] rounded-t-sm" />
        </div>
      </div>

      {/* Emergency contact quick tag */}
      <div className="p-2 rounded-xl bg-[#FFF9F2] border border-[#FFE8CC] flex items-center justify-between text-[9px] text-[#69584C]">
        <span>담당 주치의: 미래동물메디컬센터</span>
        <span className="text-[#FF806B] font-bold">02-332-XXXX</span>
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
      {/* Outer Phone Hardware with warm white & soft gold trim */}
      <div className="relative rounded-[2.5rem] p-2 bg-white border-4 border-[#F0EAE1] shadow-xl transition-all duration-300 group-hover:border-[#FFB8A4] group-hover:shadow-[0_16px_36px_rgba(255,128,107,0.15)]">
        {/* Phone screen bezel */}
        <div className="relative rounded-[2.1rem] bg-[#FFFDF8] overflow-hidden aspect-[9/18.5] flex flex-col border border-[#F5EFE6]">
          {/* Top Speaker / Dynamic Island */}
          <div className="w-full pt-2 pb-1 flex justify-center items-center z-20 bg-[#FFFDF8]">
            <div className="w-20 h-4 bg-[#1E232B] rounded-full flex items-center justify-between px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              <span className="w-2 h-2 rounded-full bg-slate-800" />
            </div>
          </div>

          {/* Screen Content */}
          <div className="flex-1 overflow-y-auto no-scrollbar bg-[#FFFDF8]">
            {renderAppScreen(data)}
          </div>

          {/* Home indicator bar */}
          <div className="w-full py-1.5 flex justify-center items-center bg-[#FFFDF8]">
            <div className="w-24 h-1 rounded-full bg-[#E5DDCB]" />
          </div>

          {/* Hover Overlay with Action Buttons */}
          <div className="absolute inset-0 bg-[#1E232B]/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 z-30 backdrop-blur-[2px]">
            {onOpenZoom && (
              <button
                type="button"
                onClick={onOpenZoom}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-white text-[#1E232B] text-xs font-bold rounded-xl shadow hover:bg-[#FFF4C7] transition-transform active:scale-95"
              >
                <ZoomIn className="w-3.5 h-3.5 text-[#FF806B]" />
                <span>화면 크게 보기</span>
              </button>
            )}

            {showUploadTrigger && onOpenUpload && (
              <button
                type="button"
                onClick={onOpenUpload}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-[#FF806B] text-white text-xs font-bold rounded-xl shadow hover:bg-[#FF6F59] transition-transform active:scale-95"
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
          <span className="text-xs font-extrabold text-[#1E232B]">{data.title}</span>
          {data.customImage && (
            <span className="text-[10px] text-emerald-600 font-bold bg-[#EBF9F3] px-1.5 py-0.5 rounded-full">
              커스텀 적용됨
            </span>
          )}
        </div>
        <p className="text-[11px] text-[#717784] mt-0.5 font-medium">{data.subtitle}</p>
      </div>
    </div>
  );
};
