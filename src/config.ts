/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const APP_CONFIG = {
  name: "멍라이프",
  nameEn: "MungLife",
  tagline: "우리 강아지와 함께하는 일상, 멍라이프 하나로!",
  subDescription: "동물병원부터 반려견 동반 장소, 건강관리까지. 반려견에게 필요한 정보를 쉽고 편리하게 만나보세요.",
  kicker: "전국 반려견 보호자를 위한 생활 필수 앱",
  appUrl: "https://wan-muk-mung-life.vercel.app/",
  shareTitle: "멍라이프(MungLife) - 우리 강아지 생활 필수 앱",
  shareDescription: "동물병원부터 반려견 동반 장소, 건강관리까지! 반려견과 함께하는 일상에 필요한 정보를 만나보세요.",
};

export interface ScreenshotData {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  defaultDescription: string;
  customImage?: string;
  type: "home" | "search" | "health";
}
